import base64
import json
import re
import time
import requests
import rsa

#账号：手机号
account = [
    {"password": "Zz123456", "phone": "13850502511"},
    {"password": "Zz123456", "phone": "18965461016"},
    {"password": "Zz123456", "phone": "13774753771"}
]

# Server酱sendKey获取  https://sct.ftqq.com/
sendKey = ''




def int2char(a):
    return list("0123456789abcdefghijklmnopqrstuvwxyz")[a]


def b64tohex(a):
    b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    d = ""
    e = 0
    c = 0
    for i in range(len(a)):
        if list(a)[i] != "=":
            v = b64map.index(list(a)[i])
            if 0 == e:
                e = 1
                d += int2char(v >> 2)
                c = 3 & v
            elif 1 == e:
                e = 2
                d += int2char(c << 2 | v >> 4)
                c = 15 & v
            elif 2 == e:
                e = 3
                d += int2char(c)
                d += int2char(v >> 2)
                c = 3 & v
            else:
                e = 0
                d += int2char(c << 2 | v >> 4)
                d += int2char(15 & v)
    if e == 1:
        d += int2char(c << 2)
    return d


def rsa_encode(j_rsakey, string):
    rsa_key = f"-----BEGIN PUBLIC KEY-----\n{j_rsakey}\n-----END PUBLIC KEY-----"
    pubkey = rsa.PublicKey.load_pkcs1_openssl_pem(rsa_key.encode())
    result = b64tohex((base64.b64encode(rsa.encrypt(f"{string}".encode(), pubkey))).decode())
    return result


def login(session, username, password):
    url = "https://cloud.189.cn/api/portal/loginUrl.action?redirectURL=https://cloud.189.cn/web/redirect.html"
    r = session.get(url=url)
    captchatoken = re.findall(r"captchaToken' value='(.+?)'", r.text)[0]
    lt = re.findall(r'lt = "(.+?)"', r.text)[0]
    returnurl = re.findall(r"returnUrl = '(.+?)'", r.text)[0]
    paramid = re.findall(r'paramId = "(.+?)"', r.text)[0]
    j_rsakey = re.findall(r'j_rsaKey" value="(\S+)"', r.text, re.M)[0]
    session.headers.update({"lt": lt})

    username = rsa_encode(j_rsakey, username)
    password = rsa_encode(j_rsakey, password)
    url = "https://open.e.189.cn/api/logbox/oauth2/loginSubmit.do"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/76.0",
        "Referer": "https://open.e.189.cn/",
    }
    data = {
        "appKey": "cloud",
        "accountType": "01",
        "userName": f"{{RSA}}{username}",
        "password": f"{{RSA}}{password}",
        "validateCode": "",
        "captchaToken": captchatoken,
        "returnUrl": returnurl,
        "mailSuffix": "@189.cn",
        "paramId": paramid,
    }
    r = session.post(url, data=data, headers=headers, timeout=5)
    if r.json()["result"] == 0:
        redirect_url = r.json()["toUrl"]
        session.get(url=redirect_url)
        return True
    else:
        return {"name": "登陆信息", "value": r.json()["msg"]}


def sign(session):
    rand = str(round(time.time() * 1000))
    surl = f"https://api.cloud.189.cn/mkt/userSign.action?rand={rand}&clientType=TELEANDROID&version=8.6.3&model=SM-G930K"
    url = "https://m.cloud.189.cn/v2/drawPrizeMarketDetails.action?taskId=TASK_SIGNIN&activityId=ACT_SIGNIN"
    url2 = "https://m.cloud.189.cn/v2/drawPrizeMarketDetails.action?taskId=TASK_SIGNIN_PHOTOS&activityId=ACT_SIGNIN"
    headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 5.1.1; SM-G930K Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36 Ecloud/8.6.3 Android/22 clientId/355325117317828 clientModel/SM-G930K imsi/460071114317824 clientChannelId/qq proVersion/1.0.6",
        "Referer": "https://m.cloud.189.cn/zhuanti/2016/sign/index.jsp?albumBackupOpened=1",
        "Host": "m.cloud.189.cn",
        "Accept-Encoding": "gzip, deflate",
    }
    response = session.get(url=surl, headers=headers)
    netdiskbonus = response.json().get("netdiskBonus")
    msg = []
    if response.json().get("isSign") == "false":
        msg.append({"name": "签到结果", "value": f"未签到，签到获得 {netdiskbonus}M 空间"})
    else:
        msg.append({"name": "签到结果", "value": f"已经签到过了，签到获得 {netdiskbonus}M 空间"})
    response = session.get(url=url, headers=headers)
    if "errorCode" in response.text:
        if response.json().get("errorCode") == "User_Not_Chance":
            description = "没有抽奖机会了"
        else:
            description = response.json().get("errorCode")
        msg.append({"name": "第一次抽", "value": description})
    else:
        description = response.json().get("description", "")
        if description in ["1", 1]:
            description = "50M空间"
        msg.append({"name": "第一次抽", "value": f"获得{description}"})
    response = session.get(url=url2, headers=headers)
    if "errorCode" in response.text:
        if response.json().get("errorCode") == "User_Not_Chance":
            description = "没有抽奖机会了"
        else:
            description = response.json().get("errorCode")
        msg.append({"name": "第二次抽", "value": description})
    else:
        description = response.json().get("description", "")
        if description in ["1", 1]:
            description = "50M空间"
        msg.append({"name": "第二次抽", "value": f"获得{description}"})
    return msg


def checkin(data):
    cloud189_phone = data["phone"]
    cloud189_password = data["password"]
    session = requests.Session()
    flag = login(session=session, username=cloud189_phone, password=cloud189_password)
    if flag is True:
        sign_msg = sign(session=session)
    else:
        sign_msg = flag
    msg = [{"name": "帐号信息", "value": cloud189_phone}] + sign_msg
    msg = "\n".join([f"{one.get('name')}: {one.get('value')}" for one in msg])
    return msg


def main():
    text_content = ''
    for i in account:
        msg = checkin(data=i)
        print(msg)
        text_content = text_content + msg
    text_title = '天翼云盘 签到通知'
    url = f"https://sctapi.ftqq.com/{sendKey}.send"
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    data = {
        'text': f"{text_title}",
        'content': f"{text_content}"
    }
    response = requests.post(url, headers=headers, data=data)
    print(json.loads(response.text))

if __name__ == '__main__':
    main()
# -------  腾讯云函数启动模块  --------#
def main_handler(event, context):
    main()

# -------  阿里云函数启动模块  -------- #
def handler(event, context):
    main()
