/*
@肥皂 3.23 顺丰速运+（小程序）-乘风寻宝记 
抓取 mcs-mimp-web.sf-express.com 域名的cookie
cookie会过期，本有方法可以取新的cookie，但是无法禁止该请求重定向
如果有知道的可以告诉我。。。

一天2000积分。。。--短期活动。。

变量名：cfxbjck @分割多账户

*/
const $ = new Env('乘风寻宝记');
let status;
status = (status = ($.getval("cfxbjstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let cfxbjckArr = [], cfxbjcount = ''
let cfxbjck = ($.isNode() ? process.env.cfxbjck : $.getdata('cfxbjck')) || '';
let taskCode = '',taskName='',flightStoneNum = ''
let cookie = ''


!(async () => {
    if (typeof $request !== "undefined") {
        await cfxbjck()

    } else {
        cfxbjckArr = cfxbjck.split('@')
        console.log(`------------- 共${cfxbjckArr.length}个账号-------------\n`)
        for (let i = 0; i < cfxbjckArr.length; i++) {
            cfxbjck = cfxbjckArr[i]
            

            $.index = i + 1;
            console.log(`\n开始【乘风寻宝记${$.index}】`)
            //await cfxbjhq()
            await cfxbjqd()
            await cfxbjlb()
            await cfxbjyd()
        }
    }

})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
//数据获取

// function cfxbjhq(timeout = 0) {
//     return new Promise((resolve) => {

//         let url = {
//             url: cfxbjurl,
//             headers: {"Host":"mcs-mimp-web.sf-express.com","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","Sec-Fetch-Site":"none","Sec-Fetch-Mode":"navigate","Sec-Fetch-User":"?1","Sec-Fetch-Dest":"document","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-us,en","Cookie":""},
            
//         }
//         $.get(url, async (err, resp, data) => {
//             try {
//                 console.log(data);  //链接被重定向了。暂时不知道咋禁止重定向。。。。
//                 
                 
                
//             } catch (e) {
//                 //$.logErr(e, resp);
//             } finally {
//                 resolve()
//             }
//         }, timeout)
//     })
// }


//列表
function cfxbjlb(timeout = 0) {
    return new Promise((resolve) => {
        
        let url = {
            url: `https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2022TaskService~queryTask`,
            headers: {"Host":"mcs-mimp-web.sf-express.com","Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat","Content-Type":"application/json;charset=UTF-8","Sec-Fetch-Site":"same-origin","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"https://mcs-mimp-web.sf-express.com/anniversaryWarmFormal?redirectUri=/anniversaryWarmFormal&mobile=158****0800&userId=6A563907EBA94803A1D69087CCD377C0&scene=6150&memberType=0&token=node01cx6xl3i5fckw2pdw9u7bsn4p827356&ifForbid=0&from=29wxappbanner&source=CX&isFinishActivity=true","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-us,en","Cookie":cfxbjck},
            body: `{"fromChannel":"MINI_PROGRAM"}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.success == true) {
                    console.log(`\n乘风寻宝记任务列表获取成功`);
                    console.log(`\n乘风寻宝记匹配到任务：`+result.obj.taskInfoDTOList.length+'个');
                    for(let x = 0;x<result.obj.taskInfoDTOList.length;x++)
                    {
                        
                        taskCode = result.obj.taskInfoDTOList[x].taskCode;
                        taskName = result.obj.taskInfoDTOList[x].taskName;
                        flightStoneNum = result.obj.taskInfoDTOList[x].flightStoneNum
                        console.log(`\n乘风寻宝记执行：${taskName}任务-任务积分：${flightStoneNum}`);
                        await cfxbjrw()
                    }
                    

               } else {

                    console.log(`\n乘风寻宝记任务列表获取失败：` + data);
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

//签到
function cfxbjqd(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2022TaskService~fetchSignFlightStone`,
            headers: {"Host":"mcs-mimp-web.sf-express.com","Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat","Content-Type":"application/json;charset=UTF-8","Sec-Fetch-Site":"same-origin","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"https://mcs-mimp-web.sf-express.com/anniversaryWarmFormal?redirectUri=/anniversaryWarmFormal&mobile=158****0800&userId=6A563907EBA94803A1D69087CCD377C0&scene=6150&memberType=0&token=node01cx6xl3i5fckw2pdw9u7bsn4p827356&ifForbid=0&from=29wxappbanner&source=CX&isFinishActivity=true","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-us,en","Cookie":cfxbjck},
            body: `{}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.success == true) {
                    console.log(`\n乘风寻宝记签到成功`);
                    
                    

               } else {

                    console.log(`\n乘风寻宝记签到失败：` + result.errorMessage);
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}
//穿越云朵
function cfxbjyd(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2022FormalService~addFlightStone`,
            headers: {"Host":"mcs-mimp-web.sf-express.com","Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat","Content-Type":"application/json;charset=UTF-8","Sec-Fetch-Site":"same-origin","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"https://mcs-mimp-web.sf-express.com/anniversaryWarmFormal?redirectUri=/anniversaryWarmFormal&mobile=158****0800&userId=6A563907EBA94803A1D69087CCD377C0&scene=6150&memberType=0&token=node01cx6xl3i5fckw2pdw9u7bsn4p827356&ifForbid=0&from=29wxappbanner&source=CX&isFinishActivity=true","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-us,en","Cookie":cfxbjck},
            body: `{"stoneNum":100,"opType":"THROUGH_CLOUD"}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.success == true) {
                    console.log(`\n乘风寻宝记-穿越云朵成功`);
                    
                    

               } else {

                    console.log(`\n乘风寻宝记穿越云朵：` + result.errorMessage);
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

//做任务
function cfxbjrw(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask`,
            headers: {"Host":"mcs-mimp-web.sf-express.com","Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat","Content-Type":"application/json;charset=UTF-8","Sec-Fetch-Site":"same-origin","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"https://mcs-mimp-web.sf-express.com/anniversaryWarmFormal?redirectUri=/anniversaryWarmFormal&mobile=158****0800&userId=6A563907EBA94803A1D69087CCD377C0&scene=6150&memberType=0&token=node01cx6xl3i5fckw2pdw9u7bsn4p827356&ifForbid=0&from=29wxappbanner&source=CX&isFinishActivity=true","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-us,en","Cookie":cfxbjck},
            body: `{"taskCode":"${taskCode}"}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.obj == true) {
                    console.log(`\n乘风寻宝记执行任务`+ result.obj+"成功");
                    await $.wait(2000)
                    await cfxbjtj()
                    

               } else {

                    console.log(`\n乘风寻宝记执行任务：` + result.obj+'失败');
                    await $.wait(2000)
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

//提交
function cfxbjtj(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2022TaskService~fetchTaskFlightStone`,
            headers: {"Host":"mcs-mimp-web.sf-express.com","Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat","Content-Type":"application/json;charset=UTF-8","Sec-Fetch-Site":"same-origin","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"https://mcs-mimp-web.sf-express.com/anniversaryWarmFormal?redirectUri=/anniversaryWarmFormal&mobile=158****0800&userId=6A563907EBA94803A1D69087CCD377C0&scene=6150&memberType=0&token=node01cx6xl3i5fckw2pdw9u7bsn4p827356&ifForbid=0&from=29wxappbanner&source=CX&isFinishActivity=true","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-us,en","Cookie":cfxbjck},
            body: `{"taskCode":"${taskCode}"}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                //console.log(data);
                const result = JSON.parse(data)
                if (result.success == true) {
                    console.log(`\n乘风寻宝记提交任务`+data);
                    await cfxbjrw()
                    

               } else {

                    console.log(`\n乘风寻宝记提交任务：` + result.errorMessage);
                }
            } catch (e) {
                //$.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

function rand(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
}
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }