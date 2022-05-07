/*
下载地址:
https://m.lu.com/h5-member/sign/1651333734248?marketFeedbackCode=eyJ1cmxUaWQiOiIyOTQ0OTkxNSIsInVybFNvdXJjZSI6IjIwMDA3MjMyIiwibm90aWZ5VWsiOiIiLCJyd2RSdWxlVHlwZSI6InoiLCJxckNvZGVQb3N0ZXJJbWdJZCI6bnVsbCwiZXh0UGFyYW0iOnt9fQ#/sign?cur=20220430&n=1651333734942&m1=3mt2EYwBBdd+4fOEmvMh7w==
注意 这个需要实名 不喜勿扰
变量为ljshd
下载登录后 点击首页签到页面 
关键字 integral
查看请求头Cookie填入变量
如 ljshd='XXXX'
多账号@隔开
如 ljshd='XXXX'@'XXXX'
玩转狗东E卡各种等

* cron 13 15 * * * ljs.js

*/

const $ = new Env('陆金所');

let status;
status = (status = ($.getval("ljsstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let ljshdArr = [],ljscount = ''
const notify = $.isNode() ? require('./sendNotify') : '';
let ljshd= $.isNode() ? (process.env.ljshd ? process.env.ljshd : "") : ($.getdata('ljshd') ? $.getdata('ljshd') : "")
let allMessage = '';
let ljshds = ""
const logs =0;
const host='https://m.lu.com/api/h5-mission/'
var hours = new Date().getHours();
var s = new Date().getMinutes();

var timestamp = Math.round(new Date().getTime()/1000).toString();
!(async () => {

      
          if (process.env.ljshd && process.env.ljshd.indexOf('@') > -1) {
            ljshdArr = process.env.ljshd.split('@');
            console.log(`您选择的是用"@"隔开\n`)
        } else {
            ljshds = [process.env.ljshd]
        };
        Object.keys(ljshds).forEach((item) => {
        if (ljshds[item]) {
            ljshdArr.push(ljshds[item])
        }
    })
          console.log(`共${ljshdArr.length}个cookie`)
	        for (let k = 0; k < ljshdArr.length; k++) {
                $.message = ""
                ljshd = ljshdArr[k]
                $.index = k + 1;
 
          console.log(`\n开始【陆金所${$.index}】`)
           allMessage +=`\n开始【陆金所${$.index}】`
await sign1()
await sign()
await tasklist()
await TASK_USER_SIGN()
await info()
}


      
  
  if ($.isNode() && allMessage) {
      await notify.sendNotify(`${$.name}`, `${allMessage}` )
    }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())




function tasklist() {
 return new Promise((resolve) => {
  
$.get(ljsget(`mission-app/get-task-group-task-list-for-task-centre?flag=0&taskGroupUnionId=GROUP_20200413_801&pageNo=1&pageSize=10`), async (err, resp, data) => {
    
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }// else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.resCode==00){
               console.log('\n任务数量：'+data.data.newGroupCount)  
               console.log('\n未完成任务：'+data.data.newGroupCount)
               newGroupCount = data.data.newGroupCount
               if(newGroupCount ==0){
                 $.log('\n叼毛，全部任务已完成，你还跑个鸡毛') 
                 allMessage += '\n叼毛，全部任务已完成，你还跑个鸡毛'
               }
               else if(newGroupCount !==0){
               tasks = data.data.tasks
               for(let i=0;i<tasks.length;i++){
                 userTaskPkId = tasks[i].userTaskPkId
                 await dotask(userTaskPkId)
                 await $.wait(3000)
               }
                   
               }
             
             }
             else if(data.resCode !== 00){
             console.log(data.resMsg)
              
             }
          }
        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
function dotask(userTaskPkId) {
 return new Promise((resolve) => {
  
$.get(ljsget(`listTask/commonRoot?userTaskPkId=${userTaskPkId}&requestKey=finishSpecifiedTask`), async (err, resp, data) => {

      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }// else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.resCode==00){
               console.log('\n任务：'+data.resMsg)  
               allMessage += '\n任务：'+data.resMsg
             
             }
             else if(data.resCode == 03){
             console.log('\n任务：'+data.resMsg)
              
             }
          }
        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

function TASK_USER_SIGN() {
 return new Promise((resolve) => {
  
$.get(ljsget(`mission-app/get-right-tasks-reversion?taskChannel=TASK_USER_SIGN&pageNo=1&pageSize=10&channel=LUFAX&isShowWaitGetTask=1`), async (err, resp, data) => {
    
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }// else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.resCode==00){
               console.log('\n总任务：'+data.data.totalCount)  
              taskList = data.data.taskList
              for(let i=0;i<taskList.length;i++){
                  if(taskList[i].rewardStatus == 'WAIT_FOR_REWARD'){
                  userTaskPkId = taskList[i].userTaskPkId
                      await DOTASK_USER_SIGN(userTaskPkId)
                      await $.wait(3000)
                  }else console.log('\n叼毛，全部任务已完成，你还跑个鸡毛')
              }
             
             }
             else if(data.resCode !== 00){
             console.log('\n任务：'+data.resMsg)
              
             }
          }
        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

function DOTASK_USER_SIGN(userTaskPkId) {
 return new Promise((resolve) => {
  
$.post(ljspost(`userTaskPkId=${userTaskPkId}`), async (err, resp, data) => {
    
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }// else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.resCode==00){
               console.log('\n任务：'+data.resMsg)  
               allMessage += '\n任务：'+data.resMsg
             
             }
             else if(data.resCode !== 00){
             console.log('\n任务：'+data.res_msg)
              
             }
          }
        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
function info() {
 return new Promise((resolve) => {
  
$.get(ljsinfo(), async (err, resp, data) => {
   //$.log(data)
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }// else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0000){
               console.log('\n积分：'+data.result.signinInfo.pointsBalance)
              
               allMessage += '\n积分：'+data.result.signinInfo.pointsBalance
             
             }
             else if(data.code !== 0000){
             console.log(data.message)
              
             }
          }
        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

function sign() {
 return new Promise((resolve) => {
  
$.post(ljssign(), async (err, resp, data) => {
   //$.log(data)
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }// else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0000){
               console.log('\n签到：'+data.result.basicPoints)
              
               allMessage += '\n签到：'+data.result.basicPoints
             
             }
             else if(data.code !== 0000){
             console.log(data.message)
              
             }
          }
        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
function sign1() {
 return new Promise((resolve) => {
  
$.get(ljssign1(), async (err, resp, data) => {

      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }// else {

        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
function ljsget(a) {
  return {

    url: `${host}${a}`,
    headers: {

'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Connection': 'keep-alive',
'Cookie': ljshd,
'Host':' m.lu.com',
'Referer': 'https://m.lu.com/h5-mission/task?_lutd=faMwiCG1kwClK3GoPOGfS2iiHjpkPHSqTrljKPHhBpEdSc00JxLzMVj1RprbVNKtLKOzELB4ICGiHixkdBSOUC90nQkjO2cmBdk0zlUlgS%3D%3D',
'Sec-Fetch-Site': 'same-origin',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
'X-LUFAX-EXT-REQ-ID': '0e217c0e-e298-451d-'+randomString(12),
'X-NEW-CHANNEL': 'LUFAX',
'X-NEW-SOURCE': 'H5_OTHER',
'X-Requested-With': 'XMLHttpRequest',

    }
  }
}
function ljspost(b) {
  return {

    url: `https://m.lu.com/h5-mission/alliance/receiveTaskReward`,
    body: `${b}`,
    headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Connection': 'keep-alive',
'Cookie': ljshd,
'Host':' m.lu.com',
'Origin': 'https://m.lu.com',
'Referer': 'https://m.lu.com/h5-member/integral/integral-sign?_lutd=faMwiCG1kwClK3GoPOGfS2iiHjpkPqJ4UOD4YlphBzt3Fc00LUD3MVncD2LbVGFkBHQcEeCbHCBwHixkdBSOUC90nQkjO2cmBdk0zlUlgS%3D%3D',
'Sec-Fetch-Site': 'same-origin',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
'X-LUFAX-EXT-REQ-ID': '0e217c0e-e298-451d-'+randomString(12),
'X-NEW-CHANNEL': 'LUFAX',
'X-NEW-SOURCE': 'H5_OTHER',
'X-Requested-With': 'XMLHttpRequest',

    }
  }
}
function ljsinfo() {
  return {

    url: `https://m.lu.com/h5-member/integral-server/integral-info`,
   
    headers: {

'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Connection': 'keep-alive',
'Cookie': ljshd,
'Host':' m.lu.com',
'Origin': 'https://m.lu.com',
'Referer': 'https://m.lu.com/h5-member/integral/integral-sign?_lutd=faMwiCG1kwClK3GoPOGfS2iiHjpkPqJ4UOD4YlphBzt3Fc00LUD3MVncD2LbVGFkBHQcEeCbHCBwHixkdBSOUC90nQkjO2cmBdk0zlUlgS%3D%3D',
'Sec-Fetch-Site': 'same-origin',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
'X-LUFAX-EXT-REQ-ID': '0e217c0e-e298-451d-'+randomString(12),
'X-NEW-CHANNEL': 'LUFAX',
'X-NEW-SOURCE': 'H5_OTHER',
'X-Requested-With': 'XMLHttpRequest',

    }
  }
}
function ljssign() {
  return {

    url: `https://m.lu.com/h5-member/integral-server/sign-in`,
    body:'ct=WEIXIN&m1=',
    headers: {

'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Connection': 'keep-alive',
'Cookie': ljshd,
'Host':' m.lu.com',
'Origin': 'https://m.lu.com',
'Referer': 'https://m.lu.com/h5-member/integral/integral-sign?_lutd=faMwiCG1kwClK3GoPOGfS2iiHjpkPqJ4UOD4YlphBzt3Fc00LUD3MVncD2LbVGFkBHQcEeCbHCBwHixkdBSOUC90nQkjO2cmBdk0zlUlgS%3D%3D',
'Sec-Fetch-Site': 'same-origin',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
'X-LUFAX-EXT-REQ-ID': '0e217c0e-e298-451d-'+randomString(12),
'X-NEW-CHANNEL': 'LUFAX',
'X-NEW-SOURCE': 'H5_OTHER',
'X-Requested-With': 'XMLHttpRequest',

    }
  }
}
function ljssign1() {
  return {

    url: `https://m.lu.com/h5-member/sign/1651333734248?marketFeedbackCode=eyJ1cmxUaWQiOiIyOTQ0OTkxNSIsInVybFNvdXJjZSI6IjIwMDA3MjMyIiwibm90aWZ5VWsiOiIiLCJyd2RSdWxlVHlwZSI6InoiLCJxckNvZGVQb3N0ZXJJbWdJZCI6bnVsbCwiZXh0UGFyYW0iOnt9fQ#/sign?cur=20220430&n=1651333734942&m1=3mt2EYwBBdd+4fOEmvMh7w==`,
    
    headers: {

'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Connection': 'keep-alive',
'Cookie': ljshd,
'Host':' m.lu.com',
'Origin': 'https://m.lu.com',
'Referer': 'https://m.lu.com/h5-member/integral/integral-sign?_lutd=faMwiCG1kwClK3GoPOGfS2iiHjpkPqJ4UOD4YlphBzt3Fc00LUD3MVncD2LbVGFkBHQcEeCbHCBwHixkdBSOUC90nQkjO2cmBdk0zlUlgS%3D%3D',
'Sec-Fetch-Site': 'same-origin',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
'X-LUFAX-EXT-REQ-ID': '0e217c0e-e298-451d-'+randomString(12),
'X-NEW-CHANNEL': 'LUFAX',
'X-NEW-SOURCE': 'H5_OTHER',
'X-Requested-With': 'XMLHttpRequest',

    }
  }
}
function randomString(e) {  
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
  a = t.length,
  n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}


function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
