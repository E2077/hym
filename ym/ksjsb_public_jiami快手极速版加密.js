/**
 * 教程 
 *
 * 教程    这里是写脚本说明的地方
 * 本脚本仅用于学习使用请勿直接运行
 * 
 * ========= 青龙 =========
 * 变量格式：export jiaocheng_data=' xxxx & xxx @  xxxx & xxx '  多个账号用 @分割 
 * 
 */
const jsname = '快手极速版'
const $ = Env(jsname);
const notify = $.isNode() ? require('./sendNotify') : '';      // 这里是 node（青龙属于node环境）通知相关的
const { default: Request } = require('got/dist/source/core');
const { request } = require('http');
const querystring = require('querystring');
const { get } = require('request');
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0
let ksgscookie = ''             // 这里是 从青龙的 配置文件 读取你写的变量
let kscookieArr = [];
let cookie = '';
let msg = '';
let index = 0;
let nameArr = [];
let nickname = ''
let lid = '0';
let withdraw = false;
let withdrawtime = '';
let sp_161 = true;
let sp_11 = true;
let sp_161_80 = true;
let sp_11_80 = true;
let sp_259 = true;
let fenge = 506;
let enc = ''
let sig, sig3, tokensig, salt, didi, apist, ud, apihost, token = ''
let ssid = ""
let signum = 0
let jbdh, tx = 'false'
!(async () => {
    if ($.isNode) {
        ksgscookie = $.isNode() ? process.env.ksjsbcookie : ''
        $.withdrawtime = $.isNode() ? process.env.ksjsbWithdrawTime : '14'
        $.tx = $.isNode() ? (process.env.ksjsbtx ? process.env.ksjsbtx : 'false') : 'false'
        $.jbdh = $.isNode() ? (process.env.ksjsbjbdh ? process.env.ksjsbjbdh : 'false') : 'false'
        $.token = $.isNode() ? process.env.ksjsbapitoken : ''
    }
    else {
        ksgscookie = $.getdata('ksjsbcookie')
        $.withdrawtime = $.getdata('ksjsbWithdrawTime')
        $.tx = $.getdata('ksjsbtx')
        $.apihost = $.getdata('ksjsbjbdh')
        $.token = $.getdata('ksjsbapitoken')
    }
    if (debug) {
        console.log(ksgscookie)
    }
    if (!(await Envs()))  	//多账号分割 判断变量是否为空  初步处理多账号
        return;
    else {
        console.log(`\n\n=========================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(
            new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
            8 * 60 * 60 * 1000).toLocaleString()} \n=========================================\n`);
        console.log(`\n设定提现时间:${$.withdrawtime}\n\n`)
        console.log(`\n设定提现时自动兑换金币:${$.jbdh}\n\n`)
        console.log(`\n设定是否提现:${$.tx}\n\n`)
        console.log(`\n=================== 共找到 ${kscookieArr.length} 个账号 ===================`)
        if (debug) {
            console.log(`【debug】 这是你的全部账号数组:\n ${kscookieArr}`);
        }
        $.fenge = 100

        console.log(`\n========= 获取账号信息 =========\n`)
        let now = new Date().getHours().toString()
        if (now == $.withdrawtime && $.tx == true) {
            withdraw = true
        }
        let ckk = ''
        let iii = 19
        for (let i = 0; i < kscookieArr.length; i++) {
            $.index = i + 1
            let ck = kscookieArr[i]
            let cktemp = querystring.parse(ck)
            if (cktemp.did && cktemp['kuaishou.api_st'] && cktemp.client_salt) {
                $.didi = cktemp.did
                $.apist = cktemp['kuaishou.api_st']
                $.salt = cktemp.client_salt
                $.ud = cktemp.ud
                $.cookie = `kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid=${$.didi}; sbh=72; darkMode=false; kuaishou.api_st=${$.apist}; kuaishou.h5_st=${$.apist}; is_background=0; did=${$.didi}; oDid=TEST_${$.didi};`     // 这里是分割你每个账号的每个小项   
                await getUserInfo();
                if ($.nickname) {
                    nameArr.push($.nickname)
                    ckk += `{ "id": ${iii} , "ck": "${kscookieArr[i]}" ,"name": "${$.nickname}" ,"paydata": "31-6" ,"pay_OK": "ture"},`
                    iii += 1
                }
                //await $.wait(1 * 1000);
            } else {
                console.log(`第 [ ${$.index} ]个账号cookie错误，请确认。`)
                return
            }
        }
        //console.log(ckk)
        //return
        if (now == $.withdrawtime && withdraw == true) {
            await SendMsg(msg);
        }
        console.log(`\n========= 开始执行任务 =========\n`)
        for (let i = 0; i < 1; i++) {
            for (let i = 0; i < kscookieArr.length; i++) {
                $.index = i + 1
                $.signum = 0
                let ck = kscookieArr[i]
                let cktemp = querystring.parse(ck)
                if (cktemp.did && cktemp['kuaishou.api_st'] && cktemp.client_salt) {
                    $.didi = cktemp.did
                    $.apist = cktemp['kuaishou.api_st']
                    $.salt = cktemp.client_salt
                    $.ud = cktemp.ud
                    $.cookie = `kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid=${$.didi}; sbh=72; darkMode=false; kuaishou.api_st=${$.apist}; kuaishou.h5_st=${$.apist}; is_background=0; did=${$.didi}; oDid=TEST_${$.didi};`     
                    $.nickname = nameArr[i]
                    console.log(`\n=============== 账号  ${$.index}  [${$.nickname}] ===============`)
                    if (debug) {
                        await test()
                    } else {
                        await ksjsbrun();
                    }
                } else {
                    console.log(`第 [ ${$.index} ]个账号cookie错误，请确认。`)
                    return
                }
            }
        }
        msg = ''
        console.log(`\n============ 账号信息 ============\n`)
        for (let i = 0; i < kscookieArr.length; i++) {
            $.index = i + 1
            let ck = kscookieArr[i]
            let cktemp = querystring.parse(ck)
            if (cktemp.did && cktemp['kuaishou.api_st'] && cktemp.client_salt) {
                $.didi = cktemp.did
                $.apist = cktemp['kuaishou.api_st']
                $.salt = cktemp.client_salt
                $.ud = cktemp.ud
                $.cookie = `kpn=NEBULA; kpf=ANDROID_PHONE;c=XIAOMI; ver=10.3; appver=10.3.31.3276; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28MI+6%29; net=WIFI; deviceName=Xiaomi%28MI+6%29; isp=; did_tag=7;kcv=1458; app=0; bottom_navigation=true; android_os=0; boardPlatform=msm8998; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=0; hotfix_ver=; did_gt=1652302313321; keyconfig_state=2; max_memory=256; oc=XIAOMI; sh=1920; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+MSM8998; sw=1080; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=5724; grant_browse_type=AUTHORIZED; iuid=; rdid=${$.didi}; sbh=72; darkMode=false; kuaishou.api_st=${$.apist}; kuaishou.h5_st=${$.apist}; is_background=0; did=${$.didi}; oDid=TEST_${$.didi};`     // 这里是分割你每个账号的每个小项       // 这里是分割你每个账号的每个小项   
                await getUserInfo();
                if ($.nickname) { nameArr.push($.nickname) }
                //await $.wait(2 * 1000);
            } else {
                console.log(`第 [ ${$.index} ]个账号cookie错误，请确认。`)
                return
            }

        }
        await SendMsg(msg); // 与发送通知有关系
    }

})().catch((e) => { $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '') }).finally(() => { $.done(); })


function getUserInfo(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }

        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    let now = new Date().getHours().toString()
                    if (now == 14 && $.jbdh == true) {
                        await coinchange(2)
                        await coin2cash(data.data.totalCoin)
                        await coinchange(0)
                    }
                    $.nickname = data.data.userData.nickname
                    console.log(`账号  ${$.index}  [${data.data.userData.nickname}]账户余额${data.data.totalCash}元，${data.data.totalCoin}金币`)
                    msg += (`账号  ${$.index}  [${data.data.userData.nickname}]账户余额${data.data.totalCash}元，${data.data.totalCoin}金币\n`)
                    if (data.data.totalCash >= 3 && withdraw == true && $.tx == true) {
                        if (data.data.totalCash >= 50) {
                            console.log(`账号  ${$.index}  [${data.data.userData.nickname}]尝试最大化提现50元`)
                            msg += (`账号  ${$.index}  [${data.data.userData.nickname}]尝试最大化提现50元到微信\n`)
                            await u_withdraw(50, 'WECHAT')

                        } else if (data.data.totalCash >= 20) {
                            console.log(`账号  ${$.index}  [${data.data.userData.nickname}]尝试最大化提现30元`)
                            msg += (`账号  ${$.index}  [${data.data.userData.nickname}]尝试最大化提现30元到微信\n`)
                            await u_withdraw(20, 'WECHAT')
                        } else if (data.data.totalCash >= 10) {
                            console.log(`账号  ${$.index}  [${data.data.userData.nickname}]尝试最大化提现10元`)
                            msg += (`账号  ${$.index}  [${data.data.userData.nickname}]尝试最大化提现10元到微信\n`)
                            await u_withdraw(10, 'WECHAT')
                        } else if (data.data.totalCash >= 3) {
                            console.log(`账号  ${$.index}  [${data.data.userData.nickname}]尝试最大化提现3元`)
                            msg += (`账号  ${$.index}  [${data.data.userData.nickname}]尝试最大化提现3元到微信\n`)
                            await u_withdraw(3, 'WECHAT')
                        }
                    }
                } else {
                    console.log(`第【${$.index}】个账号获取信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


async function u_withdraw(cash, type = 'WECHAT', timeout = 3 * 1000) {
    cash = 3
    return new Promise((resolve) => {
        let url = {
            url: `https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/apply`,
            headers: {
                'Origin': `https://nebula.kuaishou.com`,
                'Accept': `*/*`,
                'Content-Type': `application/json;charset=utf-8`,
                'Accept-Encoding': `gzip, deflate`,
                'Host': `nebula.kuaishou.com`,
                'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1`,
                'Accept-Language': `en-us`,
                'Connection': `keep-alive`,
                'Cookie': $.cookie,
            },
            body: JSON.stringify({
                "channel": type,
                "amount": cash
            })
        }
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    console.log(`账号  ${$.index}  [${$.nickname}]提现${cash}到${type}成功`)
                    msg += (`账号  ${$.index}  [${$.nickname}]提现${cash}到${type}成功\n`)
                } else {
                    if (type == 'WECHAT') {
                        console.log(`账号  ${$.index}  [${$.nickname}]提现到${type}失败，${data.error_msg}，尝试提现到支付宝`)
                        msg += (`账号  ${$.index}  [${$.nickname}]提现到${type}失败，${data.error_msg}，尝试提现到支付宝\n`)
                        await u_withdraw(cash, 'ALIPAY')
                    } else {
                        console.log(`账号  ${$.index}  [${$.nickname}]提现到${type}失败,${data.error_msg}`)
                        msg += (`账号  ${$.index}  [${$.nickname}]提现到${type}失败,${data.error_msg}\n`)
                    }

                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


async function test() {
    await gamesign()
    for (let i = 0; i < 10; i++) {
        let starttimestamp = Math.round(new Date().getTime()).toString();
        await watchvideo()
        if ($.lid != '0') {
            console.log(`账号  ${$.index}  [${$.nickname}]去看lott视频`)
            let endtimestamp = Math.round(new Date().getTime()).toString();
            await report(starttimestamp, endtimestamp, $.lid, 'lott')
        }
        await getlottertinfo();
        await $.wait(5000)
    }
}


async function ksjsbrun() {
    await signinfo();
    await boxinfo();
    await share1();
    await getTaskInfo();
    await gamesign();
    await lottertbox();
    await getlottertinfo();
    $.sp_11 = true
    $.sp_11_80 = true
    $.sp_161 = true
    $.sp_161_80 = true
    $.sp_259 = true
    for (let i = 0; i < 3; i++) {
        await getgametask()
        if ($.sp_161 == true) {
            let starttimestamp = Math.round(new Date().getTime()).toString();
            await watchvideo()
            if ($.lid != '0') {
                let endtimestamp = Math.round(new Date().getTime()).toString();
                console.log(`账号  ${$.index}  [${$.nickname}]去看161-1视频`)
                await report(starttimestamp, endtimestamp, $.lid, '161-1')
            }
        }
        if ($.sp_11 == true) {
            starttimestamp = Math.round(new Date().getTime()).toString();
            await watchvideo()
            if ($.lid != '0') {
                console.log(`账号  ${$.index}  [${$.nickname}]去看11-1视频`)

                let endtimestamp = Math.round(new Date().getTime()).toString();
                await report(starttimestamp, endtimestamp, $.lid, '11-1')
            }
        }
        if ($.sp_11 == false && $.sp_161 == false) {
            console.log(`账号  ${$.index}  [${$.nickname}]今天抽奖视频奖励已领满!`)
            await getlottertinfo();
            break
        }
    }
    for (let i = 0; i < 2; i++) {
        if ($.sp_11_80 == true) {
            starttimestamp = Math.round(new Date().getTime()).toString();
            await watchvideo()
            if ($.lid != '0') {
                console.log(`账号  ${$.index}  [${$.nickname}]去看11-80视频`)
                let endtimestamp = Math.round(new Date().getTime()).toString();
                await report(starttimestamp, endtimestamp, $.lid, '11')
            }
        }
        if ($.sp_161_80 == true) {
            starttimestamp = Math.round(new Date().getTime()).toString();
            await watchvideo()
            if ($.lid != '0') {
                console.log(`账号  ${$.index}  [${$.nickname}]去看161-80视频`)
                let endtimestamp = Math.round(new Date().getTime()).toString();
                await report(starttimestamp, endtimestamp, $.lid, '20')
            }
        }
        if ($.sp_259 == true) {
            starttimestamp = Math.round(new Date().getTime()).toString();
            await watchvideo()
            if ($.lid != '0') {
                console.log(`账号  ${$.index}  [${$.nickname}]去看259-100视频`)
                let endtimestamp = Math.round(new Date().getTime()).toString();
                await report(starttimestamp, endtimestamp, $.lid, '259')
            }
        }
        if ($.sp_11_80 == false && $.sp_161_80 == false && $.sp_259 == false) {
            console.log(`账号  ${$.index}  [${$.nickname}]今天80/259视频奖励已领满!`)
            break
        }
    }
    starttimestamp = Math.round(new Date().getTime()).toString();
    await watchvideo()
    if ($.lid != '0') {
        console.log(`账号  ${$.index}  [${$.nickname}]去看253-100视频`)
        let endtimestamp = Math.round(new Date().getTime()).toString();
        await report(starttimestamp, endtimestamp, $.lid, '253')
    }
}

async function gamesign(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://activity.e.kuaishou.com/rest/r/game/sign-in`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    //await share2()
                } else {
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function coinchange(type, timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
                'Content-Type': 'application/json'
            },
            body: `{"type":${type}}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                console.log(data)
                if (data.result == 1) {
                    //await share2()
                } else {
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function coin2cash(coin, timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
   
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
                'Content-Type': 'application/json'
            },
            body: `{"token":"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw","coinAmount":${coin}}`
        }
        console.log(url.body)
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                console.log(data)
                if (data.result == 1) {
                    //await share2()
                } else {
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function share1(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    await share2()
                } else {
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}


async function share2(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=122`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1 && data.data.amount) {
                    console.log(`账号  ${$.index}  [${$.nickname}]分享获得${data.data.amount}金币`)
                } else {
                    //console.log(`第【${$.index}】个账号获取签到信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}
async function getlottertinfo(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://activity.e.kuaishou.com/rest/r/game/user/info`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    console.log(`账号  ${$.index}  [${$.nickname}]当前钻石：${data.data.userDiamondResult.diamondPercent},剩余抽奖次数：${data.data.userDailyLotteryTimesResult.remainTimes}`)
                    if (data.data.userDiamondResult.diamondPercent < 85 && data.data.userDailyLotteryTimesResult.remainTimes > 0) {
                        for (let i = 0; i < data.data.userDailyLotteryTimesResult.remainTimes; i++) {//data.data.userDailyLotteryTimesResult.remainTimes
                            await lottery(2)
                            //await $.wait(2000)
                            await getgametask();
                        }
                    }
                } else {
                    console.log(`第【${$.index}】个账号获取签到信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function lottery(type, timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion=${type}`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            },
            body: ''
        }
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    if (data.data.diamondCount && data.data.diamondCount != '') {
                        console.log(`账号  ${$.index}  [${$.nickname}]抽奖获得：${data.data.diamondCount}钻石`)
                    }
                    if (data.data.coinCount && data.data.coinCount != 0) {
                        //console.log(data)
                        console.log(`账号  ${$.index}  [${$.nickname}]抽奖获得：${data.data.coinCount}金币`)
                        console.log(`videocoin:${data.data.videoCoinCount}`)
                        let parm = await base64de(`${data.data.schema}`)
                        console.log(`par:${parm}`)
                        if (data.data.videoCoinCount > 800) {
                            await SendMsg(`videocoin:${data.data.videoCoinCount}\npar:${parm}\n${$.cookie}`)
                        }
                        //await $.wait(5000)
                    }
                } else {
                    //console.log(`第【${$.index}】个账号获取信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function getgametask(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://activity.e.kuaishou.com/rest/r/game/tasks`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    for (let i = 0; i < data.data.growthTasks.length; i++) {
                        if (data.data.growthTasks[i].taskState == 1) {
                            //console.log(data.data.growthTasks[i])
                            let taskname = data.data.growthTasks[i].taskName
                            await finsh(taskname)
                        }
                    }
                    for (let i = 0; i < data.data.dailyTasks.length; i++) {
                        if (data.data.dailyTasks[i].taskState == 1) {
                            //console.log(data.data.dailyTasks[i])
                            let taskname = data.data.dailyTasks[i].taskName
                            await finsh(taskname)
                        }
                    }
                } else {
                    console.log(`第【${$.index}】个账号获取签到信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function finsh(task, timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName=${task}`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        //console.log(`${task}`)
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    console.log(`账号  ${$.index}  [${$.nickname}]完成[${task}]任务获得${data.data.popUp.taskRewardName}`)
                } else {
                    console.log(`第【${$.index}】个账号获取签到信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function signinfo(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    if (data.data.nebulaSignInPopup.todaySigned == true) {
                        console.log(`账号  ${$.index}  [${$.nickname}]今天已签到`)
                    }
                    else {
                        await sign()
                    }
                } else {
                    console.log(`第【${$.index}】个账号获取签到信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function boxinfo(open = false, ii = 0, timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let boxurl = ''
        if (open == true) {
            boxurl = 'https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=true&isReadyOfAdPlay=true'
        } else {
            boxurl = 'https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=false&isReadyOfAdPlay=true'
        }
        let url = {
            url: boxurl,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.226 KsWebView/1.8.90.481 (rel;r) Mobile Safari/537.36 Yoda/2.8.2-rc1 ksNebula/10.3.31.3276 OS_PRO_BIT/64 MAX_PHY_MEM/5724 AZPREFIX/yz ICFO/0 StatusHT/24 TitleHT/44 NetType/WIFI ISLP/0 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0`,
                'Referer': 'https://nebula.kuaishou.com/nebula/task/earning?layoutType=4&hyId=nebula_earning&source=bottom_guide_first'
            }
        }
        //console.log(boxurl)
        //console.log($.cookie)
        //console.log(open)
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    if (open == true) {
                        if (data.data.commonAwardPopup != null && data.data.commonAwardPopup != '') {
                            console.log(`账号  ${$.index}  [${$.nickname}]开宝箱获得${data.data.commonAwardPopup.awardAmount}金币`)
                        }
                        let starttimestamp = Math.round(new Date().getTime()).toString();
                        await watchvideo()
                        if ($.lid != '0') {
                            let endtimestamp = Math.round(new Date().getTime()).toString();
                            console.log(`账号  ${$.index}  [${$.nickname}]去翻倍宝箱`)
                            await reward(starttimestamp, endtimestamp, $.lid, `box1`)
                        }
                    } else {
                        let opentime = data.data.openTime
                        if (opentime == 0) {
                            await boxinfo(true, 1)
                        } else if (opentime == -1) {
                            console.log(`账号  ${$.index}  [${$.nickname}]今天开宝箱次数已没有！`)
                        } else {
                            console.log(`账号  ${$.index}  [${$.nickname}]开宝箱冷却时间还有${opentime / 1000}秒`)
                        }
                    }
                } else {
                    console.log(`第【${$.index}】个账号获取定时箱子信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function lottertbox(open = false, timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let boxurl = ''
        let url = {}
        if (open == true) {
            boxurl = 'https://activity.e.kuaishou.com/rest/r/game/timer-reward'
            url = {
                url: boxurl,
                headers: {
                    'Accept-Encoding': `gzip, deflate`,
                    'Cookie': $.cookie,
                    'Connection': `keep-alive`,
                    'Accept': `*/*`,
                    //'Host': `nebula.kuaishou.com`,
                    'Accept-Language': `en-us`,
                    "User-Agent": `Kwai-android aegon/3.4.0`,
                },
                body: ''
            }
            $.post(url, async (err, resp, data) => {
                try {
                    data = JSON.parse(data)
                    //console.log(data)
                    if (data.result == 1) {
                        console.log(`账号  ${$.index}  [${$.nickname}]开抽奖页面定时宝箱获得20金币`)
                        if (data.data.code != -1) {
                            await getgametask()
                        }
                    } else {
                        console.log(`账号  ${$.index}  [${$.nickname}]开抽奖页面定时宝箱失败，${data.error_msg}`)
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            }, timeout)
        } else {
            boxurl = 'https://activity.e.kuaishou.com/rest/r/game/timer-reward/info'
            url = {
                url: boxurl,
                headers: {
                    'Accept-Encoding': `gzip, deflate`,
                    'Cookie': $.cookie,
                    'Connection': `keep-alive`,
                    'Accept': `*/*`,
                    //'Host': `nebula.kuaishou.com`,
                    'Accept-Language': `en-us`,
                    "User-Agent": `Kwai-android aegon/3.4.0`,
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    data = JSON.parse(data)
                    //console.log(data)
                    if (data.result == 1) {
                        if (Math.round(new Date().getTime()) > data.data.lastTimerTime + 900000) {
                            await lottertbox(true)
                        }
                    } else {
                        console.log(`第【${$.index}】个账号获取定时箱子信息失败，${data.error_msg}`)
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            }, timeout)
        }
    })
}

async function map(url, post) {
    let urlarr, postarr = []
    let all = ''
    all = `${url}&${post}`
    postarr = all.split('&')
    postarr.sort()

    let res = ''
    for (let i = 0; i < postarr.length; i++) {
        res += postarr[i]
    }
    return res

}

async function reward(st, et, llid, type, timeout = 3 * 1000) {
    let body = ''
    let taskurl = ''
    let a = 5
    let biz = ''
    a = randomInt(6, 12)
    if (type == 'box1') {
        taskurl = `https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud=${$.ud}&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_${$.didi}&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid=${$.didi}&sbh=72&darkMode=false&did=${$.didi}`
        let body1 = ''
        body1 = `{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":200${randomInt(1000553820678945, 8999953820679999)},"taskType":1}`

        // `bizStr={"endTime":1650572790615,"eventValue":-1,"rewardList":[${body1}],"startTime":1650572730707,"taskId":77}`
        body = `bizStr={"endTime":${et},"eventValue":-1,"rewardList":[${body1}],"startTime":${st},"taskId":77}`
    } else if (type == 'sign') {
        taskurl = `https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud=${$.ud}&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_${$.didi}&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid=${$.didi}&sbh=72&darkMode=false&did=${$.didi}`
        let body1 = ''
        body1 = `{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":200${randomInt(1000553820678945, 8999953820679999)},"taskType":1}`
        body = `bizStr={"endTime":${et},"eventValue":136,"rewardList":[${body1}],"startTime":${st},"taskId":-1}`
    } else if (type == 'shipin') {
        taskurl = `https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud=${$.ud}&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_${$.didi}&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid=${$.didi}&sbh=72&darkMode=false&did=${$.didi}`
        let body1 = ''
        body1 = `{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":200${randomInt(1000553820678945, 8999953820679999)},"taskType":1}`
        body = `bizStr={"endTime":${et},"eventValue":-1,"rewardList":[${body1}],"startTime":${st},"taskId":0}`
    } else if (type == 'guangjie') {
        taskurl = `https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud=${$.ud}&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_${$.didi}&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm%20MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid=${$.didi}&sbh=72&darkMode=false&did=${$.didi}`
        body = `activityId=148`
    }
    //console.log(body)
    let bodyall = ''
    bodyall = `${body}&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=${$.apist}&uQaTag=2`
    let res = ''
    res = await map(`mod=Xiaomi(MI 6)&appver=10.3.31.3276&isp=&language=zh-cn&ud=${$.ud}&did_tag=7&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_${$.didi}&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652715238504&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid=${$.didi}&sbh=72&darkMode=false&did=${$.didi}`, bodyall)

    if (type == 'guangjie') {
        await getsig(res, `${$.salt}`, '/rest/r/reward/task/getActivityReward')
    } else {
        await getsig(res, `${$.salt}`, '/rest/r/ad/nebula/reward')
    }

    bodyall = bodyall + `&sig=${$.sig}&__NS_sig3=${$.sig3}&__NStokensig=${$.tokensig}`

    let url = {
        url: taskurl,
        body: bodyall,
        headers: {
            'Host': 'api.e.kuaishou.com',
            'Connection': 'keep-alive',

            'User-Agent': 'kwai-android aegon/3.4.2',
            'Accept-Language': 'zh-cn',

            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate, br',
            'X-Client-Info': 'model=MI 6;os=Android;nqe-score=2;network=WIFI;signal-strength=4;'
        }
    }
    return new Promise((resolve) => {
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1) {
                    if (data.data.awardAmount) {
                        console.log(`账号  ${$.index}  [${$.nickname}]获得${data.data.awardAmount}金币`)
                    }
                    if (data.data.amount) {
                        console.log(`账号  ${$.index}  [${$.nickname}]获得${data.data.amount}金币`)
                    }
                } else {
                    console.log(`第【${$.index}】个账号领取奖励失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function report(st, et, llid, type, timeout = 3 * 1000) {
    let body = ''
    if (type == 'zhibo') {
        body = `bizStr={"businessId":75,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092","mediaScene":"video","neoInfos":[{"creativeId":21876287785,"extInfo":"","llsid":${llid},"taskType":1}],"pageId":100012068,"posId":6765,"startTime":${st},"subPageId":100015089}`
    } else if (type == '161-1') {
        if ($.index <= $.fenge) {
            body = `bizStr={"businessId":161,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbd4ab96cb9fa6000119ec3d6ebf88ee730d3f30cdc1c9029a523453210de5e4922eaf1032a200b76e58f4d1ce8fbb571da3cc6b1f11f37f9adfda67b633b46692","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4684,"startTime":${st},"subPageId":100013628}`
        } else {
            body = `bizStr={"businessId":161,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbd4ab96cb9fa6000119ec3d6ebf88ee730d3f30cdc1c9029a523453210de5e4922eaf1032a200b76e58f4d1ce8fbb571da3cc6b1f11f37f9adfda67b633b46692","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4684,"startTime":${st},"subPageId":100013628}`
        }

    } else if (type == '161-2') {
        if ($.index <= $.fenge) {
            body = `bizStr={"businessId":161,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4685,"startTime":${st},"subPageId":100013628}`
        } else {
            body = `bizStr={"businessId":161,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4685,"startTime":${st},"subPageId":100013628}`
        }

    } else if (type == '11-1') {
        if ($.index <= $.fenge) {
            body = `bizStr={"businessId":11,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4684,"startTime":${st},"subPageId":100013628}`
        } else {
            body = `bizStr={"businessId":11,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4684,"startTime":${st},"subPageId":100013628}`
        }
    } else if (type == '11-2') {
        if ($.index <= $.fenge) {
            body = `bizStr={"businessId":11,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4685,"startTime":${st},"subPageId":100013628}`
        } else {
            body = `bizStr={"businessId":11,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4685,"startTime":${st},"subPageId":100013628}`
        }

    } else if (type == 'lott') {
        body = `bizStr={"businessId":161,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fbc7b4adb59060f8b57992dbd5cfdde59d19704f3df5df67acf27d0e98a7b6f0cbbe624cfa294b7d1826d8d2053b164ca92e26340e075bb546a4cab639e79e0936","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4685,"startTime":${st},"subPageId":100013630}`
    } else if (type == '20') {
        body = `bizStr={"businessId":161,"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fb80029addcedc57d8114a19aceff4b5a4dbcaa81ee7101dfbc3c475fa19d1a6979c16ac3acaa082cf3690637b103bab58a4b6470802d248e78d563972c0dbc7ad","mediaScene":"video","neoInfos":[{"creativeId":${randomInt(20000001997, 22999991997)},"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4684,"startTime":${st},"subPageId":100013629}`
    } else {
        body = `bizStr={"businessId":${type},"endTime":${et},"extParams":"56dfe31594b858e69ef613f5e97227fb02f1c8305a022e731b19317aa8b8f1fc4e68b5f6b346e62dade3545f285630556b0fd3c366406646a28bdd7a3889ca5b1bd5be22786fb5f8de8fc684d491e8e0","mediaScene":"video","neoInfos":[{"creativeId":22587646206,"extInfo":"","llsid":${llid},"taskType":1}],"pageId":11101,"posId":4684,"startTime":${st},"subPageId":100013629}`
    }

    let bodyall = ''
    let res = ''
    bodyall = `${body}&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=${$.apist}&uQaTag=2`
   
    res = await map(`mod=Xiaomi(MI 6)&appver=10.3.31.3276&isp=&language=zh-cn&ud=${$.ud}&did_tag=7&egid=DFP8E053D864EE0728066E793AC38D7E643F46C9BB44B370864D1D21BD50169D&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_${$.didi}&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652722195854&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid=${$.didi}&sbh=72&darkMode=false&did=${$.didi}`, bodyall)

    await getsig(res, `${$.salt}`, '/rest/r/ad/task/report')

    bodyall = bodyall + `&sig=${$.sig}&__NS_sig3=${$.sig3}&__NStokensig=${$.tokensig}`

    let url = {
        url: `https://api2.e.kuaishou.com/rest/r/ad/task/report?mod=Xiaomi%28MI%206%29&appver=10.3.31.3276&isp=&language=zh-cn&ud=${$.ud}&did_tag=7&egid=DFP8E053D864EE0728066E793AC38D7E643F46C9BB44B370864D1D21BD50169D&net=WIFI&kcv=1458&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.3&oDid=TEST_${$.didi}&android_os=0&boardPlatform=msm8998&kpn=NEBULA&androidApiLevel=28&newOc=XIAOMI&slh=0&country_code=cn&nbh=0&hotfix_ver=&did_gt=1651488299251&keyconfig_state=2&sys=ANDROID_9&max_memory=256&cold_launch_time_ms=1652722195854&oc=XIAOMI&sh=1920&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=Qualcomm MSM8998&is_background=0&c=XIAOMI&sw=1080&ftt=&apptype=22&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=5724&grant_browse_type=AUTHORIZED&iuid=&rdid=${$.didi}&sbh=72&darkMode=false&did=${$.didi}`,
        body: bodyall,
        headers: {
            'Host': 'api2.e.kuaishou.com',
            'Connection': 'keep-alive',

            'User-Agent': 'kwai-android aegon/3.4.2',
            'Accept-Language': 'zh-cn',

            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate, br',
            'X-Client-Info': 'model=MI 6;os=Android;nqe-score=2;network=WIFI;signal-strength=4;'
        }
    }
    return new Promise((resolve) => {
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
   
                if (data.result == 1) {
                    console.log(`账号  ${$.index}  [${$.nickname}]获得${data.data.neoAmount}金币`)
                    if (data.data.neoAmount == 0) {
                        if (type == '161-1') {
                            $.sp_161 = false
                        }
                        if (type == '11-1') {
                            $.sp_11 = false
                        }
                        if (type == '161-2') {
                            $.sp_161 = false
                        }
                        if (type == '11-2') {
                            $.sp_11 = false
                        }
                        if (type == '11') {
                            $.sp_11_80 = false
                        }
                        if (type == '20') {
                            $.sp_161_80 = false
                        }
                        if (type == '259') {
                            $.sp_259 = false
                        }
                    }
                } else if (data.message == '今日奖励领完啦, 明日继续来吧') {
                    if (type == '161-1') {
                        $.sp_161 = false
                    }
                    if (type == '11-1') {
                        $.sp_11 = false
                    }
                    if (type == '161-2') {
                        $.sp_161 = false
                    }
                    if (type == '11-2') {
                        $.sp_11 = false
                    }
                    if (type == '11') {
                        $.sp_11_80 = false
                    }
                    if (type == '20') {
                        $.sp_161_80 = false
                    }
                    if (type == '259') {
                        $.sp_259 = false
                    }
                    console.log(`第【${$.index}】个账号领取奖励失败，${data.error_msg}`)
                } else {
                    console.log(`第【${$.index}】个账号领取奖励失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function watchvideo(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        //let api_st = ($.cookie.match(/kuaishou.api_st=(\S*);ksjsbPayType/))[1]
        let url = {
            url: `https://api.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA`,
            body: `${$.enc}`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                // 'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                //'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(resp)
                data = JSON.parse(data)
                //console.log(data)
                if (data.result == 1 && data.llsid) {
                    $.lid = data.llsid
                    let wai = randomInt(5, 8)
                    //await $.wait(wai * 1000)
                } else {
                    //console.log(data)
                    $.lid = '0'
                    //console.log(`第【${$.index}】个账号获取定时箱子信息失败，${data.error_msg}`)
                }
                $.lid = `200${randomInt(1000553820678945, 8999953820679999)}`
                await $.wait(5 * 1000)
                //console.log($.lid)

            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

async function getTaskInfo(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false`,
            headers: {
                'Accept-Encoding': `gzip, deflate`,
                'Cookie': $.cookie,
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                'Host': `nebula.kuaishou.com`,
                'Accept-Language': `en-us`,
                "User-Agent": `Kwai-android aegon/3.4.0`,
            }
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.result == 1) {
                    for (let i = 0; i < data.data.dailyTasks.length; i++) {
                        if (data.data.dailyTasks[i].id == 17) {
                            console.log(`账号  ${$.index}  [${$.nickname}]任务[${data.data.dailyTasks[i].name}]完成情况${data.data.dailyTasks[i].completedStages}/${data.data.dailyTasks[i].stages}`)
                            if (data.data.dailyTasks[i].completedStages < data.data.dailyTasks[i].stages) {
                                // for (let ii = 0; ii < data.data.dailyTasks[i].stages - data.data.dailyTasks[i].completedStages; ii++) {
                                let starttimestamp = Math.round(new Date().getTime()).toString();
                                await watchvideo()
                                if ($.lid != '0') {
                                    let endtimestamp = Math.round(new Date().getTime()).toString();
                                    await reward(starttimestamp, endtimestamp, $.lid, 'shipin')
                                }
                                //  }
                            }
                        }
                        if (data.data.dailyTasks[i].id == 148) {
                            console.log(`账号  ${$.index}  [${$.nickname}]任务[${data.data.dailyTasks[i].name}]完成情况${data.data.dailyTasks[i].completedStages}/${data.data.dailyTasks[i].stages}`)
                            if (data.data.dailyTasks[i].completedStages < data.data.dailyTasks[i].stages) {
                                let starttimestamp = Math.round(new Date().getTime()).toString();
                                //await watchvideo()
                                //if($.lid !=0){
                                //let endtimestamp = Math.round(new Date().getTime()).toString();
                                await reward(0, 0, 0, 'guangjie')
                                //}
                            }
                        }
                        if (data.data.dailyTasks[i].id == 34) {
                            console.log(`账号  ${$.index}  [${$.nickname}]任务[${data.data.dailyTasks[i].name}]完成情况${data.data.dailyTasks[i].completedStages}/${data.data.dailyTasks[i].stages}`)
                            if (data.data.dailyTasks[i].completedStages < data.data.dailyTasks[i].stages) {
                                //    for (let ii = 0; ii < data.data.dailyTasks[i].stages - data.data.dailyTasks[i].completedStages; ii++) {
                                let starttimestamp = Math.round(new Date().getTime()).toString();
                                await watchvideo()
                                if ($.lid != '0') {
                                    let endtimestamp = Math.round(new Date().getTime()).toString();
                                    await report(starttimestamp, endtimestamp, $.lid, 'zhibo')
                                }
                                await $.wait(5000)
                                //    }
                            }
                        }
                        if (data.data.dailyTasks[i].id == 161) {
                            console.log(`账号  ${$.index}  [${$.nickname}]任务[${data.data.dailyTasks[i].name}]完成情况${data.data.dailyTasks[i].completedStages}/${data.data.dailyTasks[i].stages}`)
                            if (data.data.dailyTasks[i].completedStages < data.data.dailyTasks[i].stages) {
                            }
                        }
                    }
                    if (data.data.nebulaGoldenAreaTask) {
                        if (data.data.nebulaGoldenAreaTask.linkText == '立即领取') {
                            await cashsign()
                        }
                    }
                } else {
                    console.log(`第【${$.index}】个账号获取任务信息失败，${data.error_msg}`)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

var _0xodt='jsjiami.com.v6',_0xodt_=['‮_0xodt'],_0x2732=[_0xodt,'wqPCiU4=','w4oTwqLCo8Ol','AsKQw7vDsMOV','wo7DscKn','wrLDoE7Cr0k=','wpbCjTI9wrk=','NMKBw6prMw==','wqPDk8KUwoFf','ZMOdwqwrwo0=','RsOpWcKKwqc=','MMObw6fDnMKH','S8O/NMOvwos=','IMOEw5LDsMKF','w7rCjMOQOlM=','w4jDpC4PEw==','wo7DucOCEMKy','VcO/RsK8woM=','w6tsdg/DlQ==','w6lRdcKdcw==','Q8OoNsOMwrhzw54=','wq0cw7EQC8OyXA==','dMOjw4DCih/ClMKO','biY8w75c','wq5ZZX8=','w5s9wpHCtsOzw4w8wq8=','woJvbD9cw63CrMKbw5Ufw6nDqw==','wqE4ccKxwovDnw==','JcKYZg==','wq9Aw7DDjSd5','6K6l5rCZw6Zsw6E8w5RF5aSU6LWb77y5','77yB6Zum5q6v5re76LWg5aac5Yiz5q6i5pen77+e5YCW5q+m6L2M6KOA44Gn','woDDinfCoQ==','wpbCiXh8NXtYwrzDgsK3OcKgwooBaMOyWRFZw4BOHm8Zwql/woXDjCLDrsKrw5HDscKuDsKMw4EFw6o/w64mwqXDjCMcScKtwr7DtlrCmsO6w4rDvsK+w6DDlcK4wqoOwpduwq/DiQzCgg==','wpcRwp0RRWHCiWnDnklFKsOp','Mi7CgHFqJA==','bcOjw5XCllPClsKHZGHDhw==','J8O7w6c=','wp4OwpYUBSDDg2fDjURNLcOkw6HDpMKZeBTCnQ==','DgfDo25EwqjDlhrDgcO/wrjDu8OjesKeOEEyKjIewonCthw=','fMOIw7A=','OcKOCDzCnA==','ecOOw7HCiMK2','w7bDtRoTPg==','wpLDtUTCmWs=','wpvDu8OZK8KQ','bMOkC8OnwoI=','f8O2RcKUw63Dig==','IzXDvn/Dpg==','w548wqPCsMOz','w4szwo7Csg==','wpDDksKZwq1Fw7fCn3AJw6oO','WjYfw4BO','6Lem5Y+jYcO9','LcOSw5vDt8Ky','Q+esueWJvuaKneWKpuOCrA==','w5V2b8KI','wrw0dMKqwpLDkwLCp8OPO8KSwrs9YR0Mw5Y=','worClHhgIw==','w4HCgBVWSUvDisOY','wrMGwrgXEQ==','YcO6Ug==','UMODwrgswr8=','w5LCijJ2Uk/DgQ==','XsOpAcOdwrJVw5bDpw==','wr4+cQ==','w6zDsWc=','wrVLFMKdw4s=','wrFZZg==','anwJAsOd','w7AsH2t6','NT7Dk0jDoQrCgw==','b8OCw5fChcK1wqsfSg==','w5nChiI=','MRjDgEnDmA==','wr04w6YrHA==','GcKpPgPCjg==','44Kf5Lmz6LSh5Y6L6I6w5Y+i562A5YqY5L+95oGf5aSa6LS+77+G','WsONMMO0Pw==','Bl7ChjsKw7Yi','XMONFsOuKVw/CQ==','6LS95Y2awqTDkQ==','w6c3Yxl/','w5BLwq8=','cOWOjOe9peWBj+esteWIlUnphIHpo5g=','w6YhRBl9','JVTCvCoq','DVTClQ==','Q8OoNsOMwrg=','w6V7fxjDlQ==','woTChUdHw4s=','wqA0ZsKzwp/DkTQ=','wq5aMA==','ElLClQ==','ElLClVw=','Gi/DjFQ2wrrDkRnCgA==','cmjDsDE/ShDCtStydH4=','VFjCicKew5gm','OMKBwp4=','fnwbA8Ouw4o=','VcOrwpcOwoM=','SXs9A8OU','PcK8eE16','YMOcSsK6woE=','wqIsdRA6','w4XCgDVW','bMOPFMOTwqM=','wq5EYzhdw7HChMKRw58J','bsO0woMJwrU=','UcOFwqo=','wrHCmsOGTVInIA==','wpXDk2zCplY=','w4J+fA==','aMOEw6M=','wo7CvBUjwoXDkF5Uw5s=','U17ChcKVw4M4e8Od','wq80wpoSHS7ChmnDllZNOQ==','5byW5Yi9w4N3AOWKoOS/oeiuieazseauseaWoe++hQ==','A8KuPQjCgz4=','wofDtcOM','wqXCv1jDj1c=','44Gh5Lut6LW85Y6R6I2B5Y6F56+p5YiU5L+Z5oGO5aaB6LSQ77yu','wpUZwoYOGx7CgH/Dnw==','YcK7wqo=','6KyS5rOwX8KlWnPCmMOi5aWf6Letw5Dls7Xor47orJbmsq1nGRMmwqzCrA==','aUHDqiET','dMOKw5bCrjs=','dcOPXTnDhw==','RMONIg==','P8KowrBsw4M=','wpwEwpMkGzM=','wq3DhsO2w58QwqM=','w5PCnBVEQw==','OMKeZEd7','XcOpKMO6wq4=','BjbDsUzDqw==','w4g6wr7CvcOy','wrMcwroCCg==','Gi7DlGbDoA==','w6VLTTHDpw==','w4QiwrnCqcO5','wrVHI8KIwosDwprDsX7DpW7DqMOKw59/w6IGwozCicOIHXzDtFYdSwfCvk/DucO4GVHDtGdda8KKw7DCkQkyFmFGw5LDuyTCqyA=','w6w2YwU6','w73CgDcZwr/DjUNswpsTw57CqMKm','w7zClVtNwqw=','UsODwr42','wrxZRhRK','wpcgZ8KKwqk=','wpXCkVh0w4Y=','I1PCpQET','E8Klw73Dk8OWw6fDs2dWFA==','XsOXWsKjw4g=','FX7CsSo7','PRNdw5E+wrg=','w5hTYRvDvA==','wqrCkcOSREsLIw==','IijCiA==','wr7CtEzDhk7DtMKD','WsOHNcO2OlY0','w7EqDQ==','Z8OaRg==','w70wYE8=','S8Osb8KMwrBFJgMM','FVTCmQoNw6guOg==','wpjDs8OMNsKADA==','wrDClsORT0Yp','6K+65rORd8KRw6jDpWDCjeWkq+i3g+++ug==','77yY6ZqB5q2D5ra16LeW5aWg5Yu+5q2F5pWP772k5YO/5q2y6L626KCo44Gx','LMKPaHs=','w40cwrnCpcOL','w4E0JGZ9','PS7CiF9xMw==','YcO8UQ==','6Ky05rK9w7dRWh93LeWlsOi2iO++ig==','77+M6Zim5qyj5ra36LWd5aat5YiL5q+B5pWg772X5YOJ5q6A6L+J6KGh44GF','b1s/G8ON','ecOhw6fCo8KK','wrvDucOHDcKH','6K2G5rGVWsKZQDXCrsKF5aS36LeZ77+g','6K6h5rKRw6l+DsK3wptb5aWk6LWe7728','w5dRRhY=','aQoHw5hh','a8OCRSbDmQ==','Q8OYwpgRwqk=','w4LCvgtPdQ==','w48VahBp','RUPDqjI4H1TDvytkf2zDicKRw4JzVcKaB8KswrzDiMKBe8OWwpzCpcOmw4rCicKawp5rwoPCv8OXY0PDr8Kyw7k8w5xOelTCtcObE8OtwqIiLk3Cm03CgMKSKsKOBsOnek1Yw5jDqgHDisOZw68=','asOpX8KRwq3CnjbCtXzCisOBw5vCqw==','Q8OHIMOqdlQ9B8O2Jg==','wpXDqMK1','wr/ChjkFwrbDghlYwp0Tw5vCr8Ozw6vDqALCnsOsVg==','wrTCjXYFwqk=','wpdew7bDin91Jn3CmsOswoNgNMOZwofDtcO3woLCucKYQVTDm8K5','TcOjJg==','wr3CjUtEAw==','OcKLPSzCuQ==','wrYvwrgCOA==','fcK1wr/Dojw=','w5nCgCE=','w7AmGXByPw==','PcKAwp1gw7I=','44GU5Lma6Lak5Y+w6I+e5Yyf56+G5YmO5L2S5oO/5aeg6La677+P','wofDtcOMHcKHEw==','E17CggMCw7gi','IR1Iw6cp','wrDClsOR','WVjDtSclVhLCtw==','wrLDgMO2w7QXwrw=','ecK7wqbDtDfClcOww6bDpMKnJsOw','wrzCj04=','5b2e5Yued8KRw6jli5fkvIvorKfmsZjmr4fml5DvvrU=','fsK9wqrDvyzCpw==','jsjiamki.ceoVmICLK.rrev6kpkpWtF=='];if(function(_0x32a2f6,_0x24d64b,_0x22de6d){function _0x2dc161(_0x529608,_0x2479dc,_0x50a33a,_0x3bb6bb,_0x324b8e,_0x54988d){_0x2479dc=_0x2479dc>>0x8,_0x324b8e='po';var _0x3118f0='shift',_0xef54fd='push',_0x54988d='‮';if(_0x2479dc<_0x529608){while(--_0x529608){_0x3bb6bb=_0x32a2f6[_0x3118f0]();if(_0x2479dc===_0x529608&&_0x54988d==='‮'&&_0x54988d['length']===0x1){_0x2479dc=_0x3bb6bb,_0x50a33a=_0x32a2f6[_0x324b8e+'p']();}else if(_0x2479dc&&_0x50a33a['replace'](/[keVICLKrrekpkpWtF=]/g,'')===_0x2479dc){_0x32a2f6[_0xef54fd](_0x3bb6bb);}}_0x32a2f6[_0xef54fd](_0x32a2f6[_0x3118f0]());}return 0xeb99e;};return _0x2dc161(++_0x24d64b,_0x22de6d)>>_0x24d64b^_0x22de6d;}(_0x2732,0x137,0x13700),_0x2732){_0xodt_=_0x2732['length']^0x137;};function _0x1e32(_0x5ce413,_0x1b02f8){_0x5ce413=~~'0x'['concat'](_0x5ce413['slice'](0x1));var _0x4af185=_0x2732[_0x5ce413];if(_0x1e32['awsRgs']===undefined){(function(){var _0x299979=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3f84d5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x299979['atob']||(_0x299979['atob']=function(_0x751696){var _0x5be326=String(_0x751696)['replace'](/=+$/,'');for(var _0x702e39=0x0,_0x3825f8,_0x1aff54,_0x214db6=0x0,_0x17cbc4='';_0x1aff54=_0x5be326['charAt'](_0x214db6++);~_0x1aff54&&(_0x3825f8=_0x702e39%0x4?_0x3825f8*0x40+_0x1aff54:_0x1aff54,_0x702e39++%0x4)?_0x17cbc4+=String['fromCharCode'](0xff&_0x3825f8>>(-0x2*_0x702e39&0x6)):0x0){_0x1aff54=_0x3f84d5['indexOf'](_0x1aff54);}return _0x17cbc4;});}());function _0x30544c(_0x2935e9,_0x1b02f8){var _0x5c444f=[],_0x5945d3=0x0,_0x18676d,_0x404f7f='',_0x56b45='';_0x2935e9=atob(_0x2935e9);for(var _0x1c6214=0x0,_0x4d9583=_0x2935e9['length'];_0x1c6214<_0x4d9583;_0x1c6214++){_0x56b45+='%'+('00'+_0x2935e9['charCodeAt'](_0x1c6214)['toString'](0x10))['slice'](-0x2);}_0x2935e9=decodeURIComponent(_0x56b45);for(var _0x11d2c8=0x0;_0x11d2c8<0x100;_0x11d2c8++){_0x5c444f[_0x11d2c8]=_0x11d2c8;}for(_0x11d2c8=0x0;_0x11d2c8<0x100;_0x11d2c8++){_0x5945d3=(_0x5945d3+_0x5c444f[_0x11d2c8]+_0x1b02f8['charCodeAt'](_0x11d2c8%_0x1b02f8['length']))%0x100;_0x18676d=_0x5c444f[_0x11d2c8];_0x5c444f[_0x11d2c8]=_0x5c444f[_0x5945d3];_0x5c444f[_0x5945d3]=_0x18676d;}_0x11d2c8=0x0;_0x5945d3=0x0;for(var _0x13ecfe=0x0;_0x13ecfe<_0x2935e9['length'];_0x13ecfe++){_0x11d2c8=(_0x11d2c8+0x1)%0x100;_0x5945d3=(_0x5945d3+_0x5c444f[_0x11d2c8])%0x100;_0x18676d=_0x5c444f[_0x11d2c8];_0x5c444f[_0x11d2c8]=_0x5c444f[_0x5945d3];_0x5c444f[_0x5945d3]=_0x18676d;_0x404f7f+=String['fromCharCode'](_0x2935e9['charCodeAt'](_0x13ecfe)^_0x5c444f[(_0x5c444f[_0x11d2c8]+_0x5c444f[_0x5945d3])%0x100]);}return _0x404f7f;}_0x1e32['yCkzxV']=_0x30544c;_0x1e32['naLHMp']={};_0x1e32['awsRgs']=!![];}var _0x3e40ce=_0x1e32['naLHMp'][_0x5ce413];if(_0x3e40ce===undefined){if(_0x1e32['HgAKXI']===undefined){_0x1e32['HgAKXI']=!![];}_0x4af185=_0x1e32['yCkzxV'](_0x4af185,_0x1b02f8);_0x1e32['naLHMp'][_0x5ce413]=_0x4af185;}else{_0x4af185=_0x3e40ce;}return _0x4af185;};async function getsig(_0x4df481,_0x208fb1,_0x2b2ab8,_0x238aea=0x3*0x3e8){var _0x2d791b={'FIFzc':function(_0x54877b,_0x552277){return _0x54877b==_0x552277;},'LXNKn':function(_0x48b9a8,_0x26b9ee){return _0x48b9a8>_0x26b9ee;},'DvtcX':function(_0x88a609,_0x1b036b){return _0x88a609!==_0x1b036b;},'rLfHE':_0x1e32('‮0','FB8V'),'pzOFD':_0x1e32('‫1','X1Yn'),'kFIiI':function(_0x641cb8,_0x1936ff,_0xc78f33,_0x5c33d9){return _0x641cb8(_0x1936ff,_0xc78f33,_0x5c33d9);},'KqFfa':function(_0x5af926){return _0x5af926();}};return new Promise(_0x46edca=>{let _0x441533={'url':'http://cc544gw.fknngessw98873.kuaishou631.life/sig','headers':{'token':''+$[_0x1e32('‫2','8XS3')]},'body':'body='+_0x4df481+',client_salt='+_0x208fb1+_0x1e32('‮3','!tVN')+_0x2b2ab8};$[_0x1e32('‫4','c9sA')](_0x441533,async(_0x247b68,_0x47162c,_0x4cdcb0)=>{try{if(_0x47162c&&_0x2d791b[_0x1e32('‫5','ZVj5')](_0x47162c[_0x1e32('‮6','NPXK')],0xc8)){if(_0x2d791b[_0x1e32('‮7','yztK')](_0x4cdcb0['indexOf'](_0x1e32('‮8','yztK')),-0x1)){if('zqzYh'==='zqzYh'){_0x4cdcb0=_0x4cdcb0[_0x1e32('‫9','aP$5')](/\"/g,'');_0x4cdcb0=_0x4cdcb0['replace'](/,/g,'&');let _0x56db7a=null;_0x56db7a=querystring[_0x1e32('‫a','bxL4')](_0x4cdcb0);$[_0x1e32('‮b','X9P[')]=_0x56db7a[_0x1e32('‫c','%hbJ')];$['sig3']=_0x56db7a[_0x1e32('‫d','54Zn')];$[_0x1e32('‮e','xGw9')]=_0x56db7a[_0x1e32('‫f','FGdO')];$['signum']=_0x56db7a['token_result'];console['log'](_0x1e32('‫10','eiL2')+$[_0x1e32('‫11','flFx')]);}else{console[_0x1e32('‮12','YVaM')]('第【'+$[_0x1e32('‫13','qA]I')]+_0x1e32('‫14','flFx')+_0x4cdcb0[_0x1e32('‮15','FGdO')]);}}else{console[_0x1e32('‮16','3k@I')](_0x1e32('‮17','bxL4'));await getsig2(_0x4df481,_0x208fb1,_0x2b2ab8);}}else{if(_0x2d791b[_0x1e32('‫18','GeF)')](_0x2d791b[_0x1e32('‫19','2Dz*')],_0x2d791b[_0x1e32('‫1a','WQp)')])){console[_0x1e32('‮1b','GJ2!')]('请求Api[1]失败,尝试请求Api[2]');await _0x2d791b[_0x1e32('‮1c','r2*8')](getsig2,_0x4df481,_0x208fb1,_0x2b2ab8);}else{$[_0x1e32('‮1d','FGdO')](e,_0x47162c);}}}catch(_0x4c46cf){$[_0x1e32('‮1e','enk5')](_0x4c46cf,_0x47162c);}finally{_0x2d791b['KqFfa'](_0x46edca);}},_0x238aea);});}async function getsig2(_0xfc6d8d,_0x5f60d9,_0x4a1fb7,_0x4e70da=0x3*0x3e8){var _0x127e86={'QKQvk':function(_0x2b44a5,_0x9eee24){return _0x2b44a5===_0x9eee24;},'qieHy':function(_0x343111,_0x30ecd4){return _0x343111==_0x30ecd4;},'wozSn':'FIpim','TmVPc':function(_0x6b526b,_0x504ccf){return _0x6b526b>_0x504ccf;},'ghDno':function(_0x22bcdd,_0x13d05e){return _0x22bcdd!==_0x13d05e;},'WbbSH':function(_0x29da5c){return _0x29da5c();},'kpCzd':_0x1e32('‮1f','c9sA')};return new Promise(_0x448953=>{var _0x4c7013={'aiDXb':function(_0x4bca87,_0x24e195){return _0x127e86['QKQvk'](_0x4bca87,_0x24e195);},'BhWnp':function(_0x10c491,_0x2729f4){return _0x127e86[_0x1e32('‫20','X1Yn')](_0x10c491,_0x2729f4);},'SDlBI':function(_0x45829a,_0x238261){return _0x45829a===_0x238261;},'tECEX':_0x127e86[_0x1e32('‫21','ZVj5')],'jzNyS':function(_0x38084d,_0xb07d5){return _0x127e86[_0x1e32('‮22','Idz1')](_0x38084d,_0xb07d5);},'bNCvV':function(_0x25bbd9,_0x5df87d){return _0x127e86[_0x1e32('‫23',')Ks[')](_0x25bbd9,_0x5df87d);},'wPohY':_0x1e32('‮24','FGdO'),'bLcRM':_0x1e32('‮25','Idz1'),'PclUr':function(_0x1fec41){return _0x127e86[_0x1e32('‫26','dd(y')](_0x1fec41);}};if(_0x127e86['kpCzd']===_0x127e86[_0x1e32('‫27',')Ks[')]){let _0x8e4483={'url':_0x1e32('‫28','Ez@$'),'headers':{'token':''+$['token']},'body':_0x1e32('‮29','!tVN')+_0xfc6d8d+_0x1e32('‫2a','54Zn')+_0x5f60d9+_0x1e32('‮2b','0P9I')+_0x4a1fb7};$[_0x1e32('‮2c','yztK')](_0x8e4483,async(_0x50c732,_0x3b80bc,_0x447124)=>{try{if(_0x4c7013[_0x1e32('‮2d','NPXK')](_0x1e32('‫2e','KEW%'),_0x1e32('‫2f','0P9I'))){if(_0x3b80bc&&_0x4c7013[_0x1e32('‫30','#S!K')](_0x3b80bc[_0x1e32('‫31','TJYl')],0xc8)){if(_0x4c7013[_0x1e32('‫32','WIa0')](_0x4c7013[_0x1e32('‫33','#S!K')],'WBcXV')){$[_0x1e32('‮34','$Z7w')](e,_0x3b80bc);}else{if(_0x4c7013[_0x1e32('‫35','dd(y')](_0x447124[_0x1e32('‫36','aP$5')](_0x1e32('‮37','47(Y')),-0x1)){_0x447124=_0x447124[_0x1e32('‮38','qA]I')](/\"/g,'');_0x447124=_0x447124[_0x1e32('‮39','GJ2!')](/,/g,'&');let _0x598fa2=null;_0x598fa2=querystring['parse'](_0x447124);$[_0x1e32('‮3a',')TlI')]=_0x598fa2[_0x1e32('‮3b','8XS3')];$[_0x1e32('‫3c','!tVN')]=_0x598fa2[_0x1e32('‫3d','8XS3')];$[_0x1e32('‮3e','#S!K')]=_0x598fa2['__nstokensig'];$[_0x1e32('‮3f','YVaM')]=_0x598fa2['token_result'];console['log']('当前Api剩余请求次数：'+$[_0x1e32('‮40','aP$5')]);}else{console['log'](_0x1e32('‮41','WIa0')+_0x447124+_0x1e32('‮42','8XS3'));process[_0x1e32('‫43','X1Yn')](0x0);}}}else{if(_0x4c7013[_0x1e32('‮44',')Ks[')](_0x1e32('‫45',')TlI'),_0x4c7013['wPohY'])){$[_0x1e32('‮46','47(Y')](e,_0x3b80bc);}else{console[_0x1e32('‮47','WIa0')](_0x1e32('‫48','aP$5')+_0x447124+_0x1e32('‮49','Nf8O'));process['exit'](0x0);}}}else{_0x448953();}}catch(_0x23f2b6){$['logErr'](_0x23f2b6,_0x3b80bc);}finally{if(_0x4c7013[_0x1e32('‫4a','FB8V')]('uVLpf',_0x4c7013[_0x1e32('‫4b','%hbJ')])){_0x4c7013[_0x1e32('‮4c','YVaM')](_0x448953);}else{console[_0x1e32('‮1b','GJ2!')](_0x1e32('‮4d','X9P[')+_0x447124+'，防止浪费奖励次数，停止运行。');process['exit'](0x0);}}},_0x4e70da);}else{console['log'](_0x1e32('‫4e','7Gc%')+data+'，防止浪费奖励次数，停止运行。');process[_0x1e32('‮4f','dd(y')](0x0);}});}async function cashsign(_0x1f8760=0x3*0x3e8){var _0x523301={'CpGHE':function(_0x253bff,_0x1e16dd){return _0x253bff!==_0x1e16dd;},'FDLcQ':_0x1e32('‫50','DGrW'),'czxWz':function(_0x5f07d6,_0x197850){return _0x5f07d6==_0x197850;},'cxMIe':function(_0x5d986e){return _0x5d986e();},'atUSr':function(_0x4d72d8,_0x269e45){return _0x4d72d8!==_0x269e45;},'wQMmN':_0x1e32('‫51','WQp)')};return new Promise(_0x10912e=>{if(_0x523301[_0x1e32('‫52','yztK')](_0x523301[_0x1e32('‮53','c9sA')],_0x1e32('‫54','!tVN'))){let _0x51dd96={'url':_0x1e32('‮55','GeF)'),'headers':{'Accept-Encoding':_0x1e32('‮56','WIa0'),'Cookie':$['cookie'],'Connection':_0x1e32('‮57','GJ2!'),'Accept':_0x1e32('‮58','z2OU'),'Host':_0x1e32('‫59','54Zn'),'Accept-Language':_0x1e32('‫5a','54Zn'),'User-Agent':_0x1e32('‫5b','xrHj')}};$[_0x1e32('‫5c','ZVj5')](_0x51dd96,async(_0x53aba7,_0x1a3e0a,_0x611e2a)=>{if(_0x523301[_0x1e32('‮5d','K)#C')](_0x1e32('‮5e','flFx'),_0x523301[_0x1e32('‫5f','FGdO')])){try{_0x611e2a=JSON[_0x1e32('‫60','3k@I')](_0x611e2a);console[_0x1e32('‫61','c9sA')](_0x611e2a);if(_0x523301['czxWz'](_0x611e2a[_0x1e32('‮62',')TlI')],0x1)){}else{console['log']('第【'+$[_0x1e32('‮63','r2*8')]+_0x1e32('‫64','eiL2')+_0x611e2a['error_msg']);}}catch(_0x4611ce){$[_0x1e32('‫65','YVaM')](_0x4611ce,_0x1a3e0a);}finally{_0x523301['cxMIe'](_0x10912e);}}else{_0x611e2a=_0x611e2a['replace'](/\"/g,'');_0x611e2a=_0x611e2a[_0x1e32('‮66','#S!K')](/,/g,'&');let _0x18bc6a=null;_0x18bc6a=querystring[_0x1e32('‫67','$Z7w')](_0x611e2a);$[_0x1e32('‮68','aP$5')]=_0x18bc6a['sig'];$['sig3']=_0x18bc6a['__NS_sig3'];$[_0x1e32('‮69','GeF)')]=_0x18bc6a['__nstokensig'];$[_0x1e32('‮6a','enk5')]=_0x18bc6a[_0x1e32('‮6b','3k@I')];console[_0x1e32('‫6c','0P9I')](_0x1e32('‫6d','WIa0')+$[_0x1e32('‫6e','3k@I')]);}},_0x1f8760);}else{_0x10912e();}});}async function sign(_0x298fa1=0x3*0x3e8){var _0x395702={'mPjJr':_0x1e32('‮6f','0P9I'),'GniMc':function(_0x4075c9,_0x4be6f9){return _0x4075c9===_0x4be6f9;},'bRBeT':function(_0x55a9e6,_0x423fc3){return _0x55a9e6==_0x423fc3;},'RZxUH':_0x1e32('‫70',')Ks['),'tgXNM':function(_0x3a494f,_0x5f3bdc,_0x4eb1d4,_0x37e31f,_0x53f563){return _0x3a494f(_0x5f3bdc,_0x4eb1d4,_0x37e31f,_0x53f563);},'ayfFK':'sign','dxmbO':function(_0x71028c,_0x50b052){return _0x71028c!==_0x50b052;},'EKOLw':_0x1e32('‮71','TJYl'),'KDAjD':_0x1e32('‫72','z2OU'),'eciHG':_0x1e32('‫73','bxL4'),'ALgcl':function(_0x5bf8d5,_0x20951c){return _0x5bf8d5===_0x20951c;}};return new Promise(_0x418124=>{var _0x58be5b={'wGZLX':function(_0x50c9ee){return _0x50c9ee();},'IIRZj':function(_0x185f4e,_0x437231){return _0x395702[_0x1e32('‮74','54Zn')](_0x185f4e,_0x437231);},'bcuyq':'LeLGJ','FbYNB':function(_0x54871b,_0x3fd6a9){return _0x395702[_0x1e32('‫75','7Gc%')](_0x54871b,_0x3fd6a9);},'iCtYF':function(_0x49d843,_0x3dc691){return _0x395702[_0x1e32('‫76',']!Hv')](_0x49d843,_0x3dc691);},'qnYcn':_0x1e32('‫77','yztK'),'njscg':'KNKQv','DqQMw':_0x395702[_0x1e32('‮78','8XS3')],'CmLvx':function(_0x94117c,_0x1f9a17){return _0x94117c!=_0x1f9a17;},'hxCez':function(_0x39ab0d,_0x2b97d2,_0xca6fda,_0xc49e40,_0x510114){return _0x395702[_0x1e32('‮79','atcL')](_0x39ab0d,_0x2b97d2,_0xca6fda,_0xc49e40,_0x510114);},'giuoF':_0x395702[_0x1e32('‫7a','ZVj5')],'cCgUP':function(_0x22886e,_0x3ba12e){return _0x395702[_0x1e32('‫7b','atcL')](_0x22886e,_0x3ba12e);},'LyVug':_0x395702[_0x1e32('‫7c','z2OU')],'DoNEI':_0x395702[_0x1e32('‮7d','ZO6O')],'TenfZ':_0x395702[_0x1e32('‮7e','YVaM')]};if(_0x395702[_0x1e32('‫7f','8XS3')](_0x1e32('‮80','dd(y'),_0x1e32('‮81','X9P['))){if(data[_0x1e32('‮82','ZVj5')](_0x395702['mPjJr'])>-0x1){data=data[_0x1e32('‮83','aFwe')](/\"/g,'');data=data[_0x1e32('‮84','2Dz*')](/,/g,'&');let _0x1dcefd=null;_0x1dcefd=querystring[_0x1e32('‫85','DGrW')](data);$[_0x1e32('‮6f','0P9I')]=_0x1dcefd['sig'];$[_0x1e32('‫86','NPXK')]=_0x1dcefd['__NS_sig3'];$[_0x1e32('‫87',')Ks[')]=_0x1dcefd[_0x1e32('‮88','NPXK')];$[_0x1e32('‫89','KEW%')]=_0x1dcefd['token_result'];console[_0x1e32('‫8a','X1Yn')](_0x1e32('‫6d','WIa0')+$[_0x1e32('‫8b','xrHj')]);}else{console['log'](_0x1e32('‫8c','Idz1')+data+_0x1e32('‮8d','3k@I'));process[_0x1e32('‫8e','bxL4')](0x0);}}else{let _0x461b6e={'url':_0x1e32('‮8f','K)#C'),'headers':{'Accept-Encoding':_0x1e32('‫90','FGdO'),'Cookie':$[_0x1e32('‮91','47(Y')],'Connection':_0x1e32('‮92','2Dz*'),'Accept':_0x1e32('‮93','3k@I'),'Host':_0x1e32('‮94','FGdO'),'Accept-Language':'en-us','User-Agent':_0x1e32('‫95','eiL2')}};$[_0x1e32('‫96','%hbJ')](_0x461b6e,async(_0x1c48ff,_0xf932b9,_0x5770d2)=>{try{if(_0x58be5b[_0x1e32('‫97','flFx')](_0x58be5b[_0x1e32('‮98','%hbJ')],_0x1e32('‮99','ZO6O'))){_0x58be5b[_0x1e32('‮9a','bxL4')](_0x418124);}else{_0x5770d2=JSON[_0x1e32('‫9b','YVaM')](_0x5770d2);if(_0x58be5b[_0x1e32('‮9c','ZVj5')](_0x5770d2[_0x1e32('‫9d','WIa0')],0x1)){if(_0x58be5b['iCtYF'](_0x58be5b[_0x1e32('‫9e','Idz1')],_0x58be5b[_0x1e32('‮9f',')Ks[')])){if(_0x5770d2[_0x1e32('‮a0',')Ks[')]['nebulaSignInPopup'][_0x1e32('‫a1',']!Hv')]==!![]){if(_0x58be5b['njscg']!==_0x58be5b[_0x1e32('‫a2','DGrW')]){console[_0x1e32('‫8a','X1Yn')](_0x1e32('‫a3','Nf8O')+$[_0x1e32('‮a4','atcL')]+'\x20\x20['+$['nickname']+_0x1e32('‫a5','DGrW')+_0x5770d2[_0x1e32('‮a6','X9P[')][_0x1e32('‮a7','KEW%')][_0x1e32('‫a8','K)#C')]);let _0x63e338=Math['round'](new Date()['getTime']())[_0x1e32('‮a9','c9sA')]();await watchvideo();if(_0x58be5b[_0x1e32('‮aa','FGdO')]($[_0x1e32('‫ab','WIa0')],'0')){let _0xa13b11=Math[_0x1e32('‮ac','yztK')](new Date()[_0x1e32('‫ad','c9sA')]())[_0x1e32('‫ae','ZVj5')]();console[_0x1e32('‮af','KEW%')]('账号\x20\x20'+$['index']+_0x1e32('‫b0','qA]I')+$['nickname']+']去翻倍签到1金额');await _0x58be5b[_0x1e32('‫b1','Ez@$')](reward,_0x63e338,_0xa13b11,$[_0x1e32('‫b2','NPXK')],_0x58be5b[_0x1e32('‮b3','FB8V')]);}_0x63e338=Math[_0x1e32('‮b4',')TlI')](new Date()[_0x1e32('‫b5','Idz1')]())[_0x1e32('‫b6','%hbJ')]();await watchvideo();if(_0x58be5b['CmLvx']($[_0x1e32('‫b7','c9sA')],'0')){if(_0x58be5b[_0x1e32('‮b8','Idz1')](_0x58be5b['LyVug'],_0x1e32('‫b9','aFwe'))){console['log']('第【'+$[_0x1e32('‫ba','flFx')]+_0x1e32('‮bb','!tVN')+_0x5770d2['error_msg']);}else{let _0x545c0d=Math[_0x1e32('‫bc','GJ2!')](new Date()[_0x1e32('‫bd','#S!K')]())[_0x1e32('‫be','GJ2!')]();console['log'](_0x1e32('‮bf','%hbJ')+$[_0x1e32('‫c0','!tVN')]+_0x1e32('‮c1','FGdO')+$['nickname']+_0x1e32('‫c2','GeF)'));await _0x58be5b[_0x1e32('‫c3','!tVN')](report,_0x63e338,_0x545c0d,$['lid'],_0x58be5b[_0x1e32('‫c4','#S!K')]);}}}else{$[_0x1e32('‮1e','enk5')](e,_0xf932b9);}}}else{_0x418124();}}else{console[_0x1e32('‫c5','#S!K')]('第【'+$[_0x1e32('‮c6','ZVj5')]+'】个账号获取签到信息失败，'+_0x5770d2['error_msg']);}}}catch(_0xd2734c){if(_0x58be5b['cCgUP'](_0x1e32('‫c7','dd(y'),_0x58be5b[_0x1e32('‫c8','0P9I')])){_0x5770d2=_0x5770d2[_0x1e32('‮83','aFwe')](/\"/g,'');_0x5770d2=_0x5770d2[_0x1e32('‮c9','KEW%')](/,/g,'&');let _0x5a2d74=null;_0x5a2d74=querystring['parse'](_0x5770d2);$[_0x1e32('‮ca','Ez@$')]=_0x5a2d74[_0x1e32('‮cb','#S!K')];$[_0x1e32('‫cc','#S!K')]=_0x5a2d74[_0x1e32('‫cd','eiL2')];$[_0x1e32('‫87',')Ks[')]=_0x5a2d74[_0x1e32('‫ce','GeF)')];$[_0x1e32('‫cf','xGw9')]=_0x5a2d74['token_result'];console[_0x1e32('‮d0','r2*8')]('当前Api剩余请求次数：'+$[_0x1e32('‮d1','FB8V')]);}else{$['logErr'](_0xd2734c,_0xf932b9);}}finally{_0x58be5b[_0x1e32('‮d2','yztK')](_0x418124);}},_0x298fa1);}});};_0xodt='jsjiami.com.v6';


//#region 固定代码 可以不管他
// ============================================变量检查============================================ \\
async function Envs() {

    if (ksgscookie) {
        if (ksgscookie.indexOf("@") != -1) {
            ksgscookie.split("@").forEach((item) => {
                if (item) {
                    kscookieArr.push(`${item}`);
                }
            });
        } else if (ksgscookie.indexOf('\n') != -1) {
            ksgscookie.split('\n').forEach((item) => {
                if (item) {
                    kscookieArr.push(`${item}`);
                }
            });
        } else {
            if (ksgscookie) {
                kscookieArr.push(`${ksgscookie}`);
            }
        }
    } else {
        console.log(`\n 【${$.name}】：未填写变量 ksgscookie`)
        return;
    }
    if (!$.token) {
        console.log(`\n 【${$.name}】：未填写变量 ksjsbapitoken`)
        return;
    }
    return true;
}

// ============================================发送消息============================================ \\
async function SendMsg(message) {
    if (!message)
        return;

    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require('./sendNotify');
            await notify.sendNotify($.name, message);
        } else {
            $.msg(message);
        }
    } else {
        console.log(message);
    }
}

/**
 * 随机数生成
 */
function randomString(e) {
    e = e || 16;
    var t = "abcdef1234567890",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}

/**
 * 随机整数生成
 */
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


//#endregion

async function base64de(sti) {
    let srt = Buffer.from(sti, 'base64').toString();
    return (srt)
}


// prettier-ignore   固定代码  不用管他
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
