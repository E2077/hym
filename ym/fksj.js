/**
 * 疯狂水晶 app  (链接带邀请)  谢谢填写
 * 下载地址: http://mmwk.mmwl.fun/download/9570691cce3dc93a?user=18349
 * cron 2 6-23/1 * * *  yml2213_javascript_master/fksj.js
 *
 * 疯狂水晶 app(小程序也有)
 * 4-26 完成 签到 , 观看视频 , 京喜红包 任务   有bug及时反馈
 * 4-26 更新随机时间间隔
 * 4-28 感谢大佬的指导.终于解决了md5的sign,变量简化,无需抓包了
 * 4-29 更新任务 红包雨 现在已完成的任务(签到 , 观看视频 , 京喜红包 , 红包雨 , 一键收矿石(需要开启条件))
 * 5-1  默认打开 一键收矿石 不需要的自己禁用
 *
 *一键收矿石:这个比较特殊,可能需要邀请超过30人才能开启(当然 不满足 你也可以直接试试.说不定能行),然后有两个地方,一个是跟随任务每天 8 点一次,另一个跟随 红包雨 每小时一次,请自行选择(连个默认都没开启的)
 * 
 * 感谢所有测试人员   感谢大佬的解密  感谢大佬的解密	感谢大佬的解密
 * ========= 青龙 =========
 * 变量格式: export fksj_data='userid1 @ userid2'  多个账号用 @分割
 *
 * userid  小程序(疯狂水晶) app 页面都有 , 找不到的可以告别羊毛了  在问自杀
 *
 * 还是不会的请百度或者群里求助: tg: https://t.me/yml_tg  通知: https://t.me/yml2213_tg
 */
const $ = new Env("疯狂水晶");
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1; 		//0为关闭通知，1为打开通知,默认为1
const debug = 0; 		//0为关闭调试，1为打开调试,默认为0
//////////////////////
let ckStr = process.env.fksj_data;
let fksj_dataArr = [];
let msg = "";
let ck = "";
let sign = "";


/////////////////////////////////////////////////////////

async function tips(ckArr) {
	console.log(`\n版本: 0.3 -- 22/4/30`);
	// console.log(`\n 脚本已恢复正常状态,请及时更新! `);
	console.log(`\n 感谢大佬的解密! \n`);
	console.log(`\n 感谢大佬的解密! \n`);
	console.log(`\n 感谢大佬的解密! \n`);
	console.log(`\n 脚本测试中,有bug及时反馈! \n`);
	console.log(`\n 脚本测试中,有bug及时反馈! \n`);
	console.log(`\n 脚本测试中,有bug及时反馈! \n`);

	console.log(
		`\n================================================\n脚本执行 - 北京时间(UTC+8): ${new Date(
			new Date().getTime() +
			new Date().getTimezoneOffset() * 60 * 1000 +
			8 * 60 * 60 * 1000
		).toLocaleString()} \n================================================\n`
	);

	await wyy();

	console.log(
		`\n=================== 共找到 ${ckArr.length} 个账号 ===================`
	);
	debugLog(`【debug】 这是你的账号数组:\n ${ckArr}`);
}

!(async () => {
	let ckArr = await getCks(ckStr, "fksj_data");

	await tips(ckArr);

	for (let index = 0; index < ckArr.length; index++) {
		let num = index + 1;
		console.log(`\n========= 开始【第 ${num} 个账号】=========\n`);

		ck = ckArr[index].split("&");
		if (debug) {
			console.log(`\n 【debug】 这是你第 ${num} 账号信息:\n ${ck}\n`);
		}

		await start();
	}
	await SendMsg(msg);

})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done());

async function start() {

	let myDate = new Date();
	h = myDate.getHours();
	// console.log(h);
	console.log(`您现在的时间是 ${h} 点 ,签到,观看视频,京喜红包,升级 等任务每天 8 点开启! `);
	if (h == 8) {

		console.log("开始 签到");
		await signin();
		await $.wait(2 * 1000);

		console.log('开始 观看视频');
		await ad_video();
		await $.wait(2 * 1000);

		console.log('开始 京喜红包');
		await gold_ad_video();
		await $.wait(2 * 1000);

		console.log('开始 一键收矿石');
		await collection();
		await $.wait(2 * 1000);

		console.log('开始 升级');
		await Upgrade();
		await $.wait(2 * 1000);
	} else {
		console.log(`您现在的时间是 ${h} 点 , 跳过其他任务,执行红包雨任务! `);

	}

	// console.log('开始 一键收矿石');
	// await collection();
	// await $.wait(2 * 1000);


	console.log('开始 红包雨');
	await rain_open_redbag();
	await $.wait(2 * 1000);

}


/**
 * 签到   get
 * https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign=42d86c74b19f06cd07b4e6ac737a9911&m=skai_tooln_c&dopost=make_sign&userid=17803
 */
async function signin(timeout = 3 * 1000) {

	let sign = MD5Encrypt(`a=wxapp&c=entry&do=user&dopost=make_sign&from=wxapp&i=2&m=skai_tooln_c&t=0&userid=${ck}&v=1.0undefined`);
	//  console.log(sign);

	let url = {
		url: `https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign=${sign}&m=skai_tooln_c&dopost=make_sign&userid=${ck}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Host: "mmwk.zhilaiw.cn",
		},
	};

	let result = await httpGet(url, `签到`, timeout);
	if (result.result == "success") {
		console.log(
			`\n 签到:成功 🎉  您已经连续签到 ${result.sign_total} 天\n签到获得 能量 ${result.addpower} ,累计能量 ${result.power}\n`
		);

		// msg += `\n 签到:成功 🎉  您已经连续签到 ${result.sign_total} 天\n签到获得 能量 ${result.addpower} ,累计能量 ${result.power}\n`
	} else if (result.result == "fail") {
		console.log(`\n 签到:${result.msg}\n`);
	} else {
		console.log(`\n 签到:  失败 ❌ 了呢,原因未知！\n ${result} \n `);
	}
}

/**
 * 观看视频   get
 * https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign=4ca5032b2f0f16e2423880292792e5fa&m=skai_tooln_c&dopost=get_some_power_ad_video&userid=17803
 */
async function ad_video(timeout = 3 * 1000) {
	let sign = MD5Encrypt(`a=wxapp&c=entry&do=user&dopost=get_some_power_ad_video&from=wxapp&i=2&m=skai_tooln_c&t=0&userid=${ck}&v=1.0undefined`);
	//  console.log(sign); 

	let url = {
		url: `https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign=${sign}&m=skai_tooln_c&dopost=get_some_power_ad_video&userid=${ck}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Host: "mmwk.zhilaiw.cn",
		},
	};

	let result = await httpGet(url, `观看视频`, timeout);
	if (result.result == "success") {
		console.log(
			`\n 观看视频:成功 🎉  您今天已看: ${result.userdata.ad_video_num}/7 次, \n 观看视频 获得 能量 ${result.addpower} ,累计有能量 ${result.power}\n`
		);

		if (result.userdata.ad_video_num < 7) {
			let num = randomInt(40, 60);
			console.log(`\n 等待 ${num} s后,继续观看视频\n`);
			await $.wait(num * 1000);
			console.log("开始 观看视频");
			await ad_video();
		}
	} else if (result.result == "fail") {
		console.log(`\n 观看视频:${result.msg}\n`);
	} else {
		console.log(`\n 观看视频:  失败 ❌ 了呢,原因未知！\n ${result} \n `);
	}
}

/**
 * 京喜红包   get
 * https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign=13a6d7f8418c39085c261a91e9da665a&m=skai_tooln_c&dopost=get_some_gold_ad_video_full&userid=17803
 */
async function gold_ad_video(timeout = 3 * 1000) {

	let sign = MD5Encrypt(`a=wxapp&c=entry&do=user&dopost=get_some_gold_ad_video_full&from=wxapp&i=2&m=skai_tooln_c&t=0&userid=${ck}&v=1.0undefined`);

	let url = {
		url: `https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign=${sign}&m=skai_tooln_c&dopost=get_some_gold_ad_video_full&userid=${ck}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Host: "mmwk.zhilaiw.cn",
		},
	};

	let result = await httpGet(url, `京喜红包`, timeout);
	if (result.result == "success") {
		console.log(
			`\n 京喜红包:成功 🎉  您今天已看: ${result.userdata.ad_videob_num}/5 次 \n 京喜红包 获得 金币 ${result.addgold} ,累计有 金币 ${result.gold} \n 京喜红包 获得 能量 ${result.addpower} ,累计有能量 ${result.power}\n`
		);

		if (result.userdata.ad_videob_num < 5) {
			let num = randomInt(40, 50);
			console.log(`\n 等待 ${num} s后,继续京喜红包\n`);
			await $.wait(num * 1000);
			console.log("开始 京喜红包");
			await gold_ad_video();
		}
	} else if (result.result == "fail") {
		console.log(`\n 京喜红包:${result.msg}\n`);
	} else {
		console.log(`\n 京喜红包:  失败 ❌ 了呢,原因未知！\n ${result} \n `);
	}
}

/**
 * 升级   get
 * https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign=d1a53fca503869437cd14a2f0e9ab794&m=skai_tooln_c&dopost=update_grade&userid=17803
 */
async function Upgrade(timeout = 3 * 1000) {

	let sign = MD5Encrypt(`a=wxapp&c=entry&do=user&dopost=update_grade&from=wxapp&i=2&m=skai_tooln_c&t=0&userid=${ck}&v=1.0undefined`);
	let url = {
		url: `https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign=${sign}&m=skai_tooln_c&dopost=update_grade&userid=${ck}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Host: "mmwk.zhilaiw.cn",
		},
	};

	let result = await httpGet(url, `升级`, timeout);
	if (result.result == "success") {
		console.log(`\n 升级:成功 🎉  您已经 ${result.grade} 级了呢! 好厉害\n`);
	} else if (result.result == "fail") {
		console.log(`\n 升级:${result.msg} ,不灰心,攒攒下次一定行!\n`);
	} else {
		console.log(`\n 升级:  失败 ❌ 了呢,原因未知！\n ${result} \n `);
	}
}

/**
 * 一键收矿石   get
 * https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=friend&sign=5d1015991229a24dbb4f513a35db571b&m=skai_tooln_c&dopost=all_take_up&userid=17803
 */
async function collection(timeout = 3 * 1000) {
	let sign = MD5Encrypt(`a=wxapp&c=entry&do=friend&dopost=all_take_up&from=wxapp&i=2&m=skai_tooln_c&t=0&userid=${ck}&v=1.0undefined`);
	let url = {
		url: `https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=friend&sign=${sign}&m=skai_tooln_c&dopost=all_take_up&userid=${ck}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Host: "mmwk.zhilaiw.cn",
		},
	};

	let result = await httpGet(url, `一键收矿石`, timeout);
	if (result.result == "success") {
		console.log(
			`\n 一键收矿石:${result.result} 🎉   恭喜您获得 ${result.take_up_all_stone} 矿石呢!\n`
		);
	} else if (result.result == "fail") {
		console.log(`\n 一键收矿石:${result.msg}!\n`);
	} else {
		console.log(`\n 一键收矿石:  失败 ❌ 了呢,原因未知！\n ${result} \n `);
	}
}






/**
 * 红包雨   get
 * https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=index&sign=f85cf8026a9b813635995a143f9d3039&m=skai_tooln_c&dopost=rain_open_redbag&userid=17803&time=11
 */
async function rain_open_redbag(timeout = 3 * 1000) {
	let myDate = new Date();
	time = myDate.getHours();
	// // console.log(h);
	let sign = MD5Encrypt(`a=wxapp&c=entry&do=index&dopost=rain_open_redbag&from=wxapp&i=2&m=skai_tooln_c&t=0&time=${time}&userid=${ck}&v=1.0undefined`);

	let url = {
		url: `https://mmwk.zhilaiw.cn/index.php/Api/Index/index?i=2&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=index&sign=${sign}&m=skai_tooln_c&dopost=rain_open_redbag&userid=${ck}&time=${time}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Host: "mmwk.zhilaiw.cn",
		},
	};

	let result = await httpGet(url, `红包雨`, timeout);
	if (result.result == "success") {
		console.log(
			`\n 红包雨: ${result.result} 🎉   您在 ${time} 点红包雨 获得 金币 ${result.addmoney} \n`
		);


	} else if (result.result == "fail") {
		console.log(`\n 红包雨:${result.msg}\n`);
	} else {
		console.log(`\n 京喜红包:  失败 ❌ 了呢,原因未知！\n ${result} \n `);
	}
}

















//#region 固定代码
// ============================================变量检查============================================ \\

async function getCks(ck, str) {


	return new Promise((resolve, reject) => {

		let ckArr = []
		if (ck) {
			if (ck.indexOf("@") != -1) {

				ck.split("@").forEach((item) => {
					ckArr.push(item);
				});
			} else {
				ckArr.push(ck);
			}
			resolve(ckArr)
		} else {
			console.log(`\n 【${$.name}】：未填写变量 ${str}`)
		}

	}
	)
}

// ============================================发送消息============================================ \\

async function SendMsg(message) {
	if (!message) return;

	if (Notify > 0) {
		if ($.isNode()) {
			var notify = require("../疯狂水晶/sendNotify");
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
	e = e || 32;
	var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
		a = t.length,
		n = "";

	for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
	return n;
}

/**
 * 随机整数生成
 */

function randomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

//每日网抑云
function wyy(timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = {
			url: `https://keai.icu/apiwyy/api`
		}
		$.get(url, async (err, resp, data) => {
			try {
				data = JSON.parse(data)
				console.log(`\n 【网抑云时间】: ${data.content}  by--${data.music}`);

			} catch (e) {
				$.logErr(e, resp);
			} finally {
				resolve()
			}
		}, timeout)
	})
}
// ============================================ get请求 ============================================ \\
async function httpGet(getUrlObject, tip, timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = getUrlObject;
		if (!tip) {
			let tmp = arguments.callee.toString();
			let re = /function\s*(\w*)/i;
			let matches = re.exec(tmp);
			tip = matches[1];
		}
		if (debug) {
			console.log(
				`\n 【debug】=============== 这是 ${tip} 请求 url ===============`
			);
			console.log(url);
		}

		$.get(
			url,
			async (error, response, _data) => {
				try {
					if (debug) {
						console.log(
							`\n\n 【debug】===============这是 ${tip} 返回data==============`
						);
						console.log(_data);
						console.log(`======`);
						console.log(JSON.parse(_data));
					}
					let result = JSON.parse(_data);
					resolve(result);
				} catch (e) {
					console.log(e);
				} finally {
					resolve();
				}
			},
			timeout
		);
	});
}

// ============================================ post请求 ============================================ \\
async function httpPost(postUrlObject, tip, timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = postUrlObject;
		if (!tip) {
			let tmp = arguments.callee.toString();
			let re = /function\s*(\w*)/i;
			let matches = re.exec(tmp);
			tip = matches[1];
		}
		if (debug) {
			console.log(
				`\n 【debug】=============== 这是 ${tip} 请求 url ===============`
			);
			console.log(url);
		}

		$.post(
			url,
			async (error, response, data) => {
				try {
					if (debug) {
						console.log(
							`\n\n 【debug】===============这是 ${tip} 返回data==============`
						);
						console.log(data);
						console.log(`======`);
						console.log(JSON.parse(data));
					}
					let result = JSON.parse(data);
					resolve(result);
				} catch (e) {
					console.log(e);
				} finally {
					resolve();
				}
			},
			timeout
		);
	});
}

// ============================================ debug调试 ============================================ \\
function debugLog(...args) {
	if (debug) {
		console.log(...args);
	}
}

//#endregion

// prettier-ignore
function MD5Encrypt(a) { function b(a, b) { return a << b | a >>> 32 - b } function c(a, b) { var c, d, e, f, g; return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f } function d(a, b, c) { return a & b | ~a & c } function e(a, b, c) { return a & c | b & ~c } function f(a, b, c) { return a ^ b ^ c } function g(a, b, c) { return b ^ (a | ~c) } function h(a, e, f, g, h, i, j) { return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e) } function i(a, d, f, g, h, i, j) { return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d) } function j(a, d, e, g, h, i, j) { return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d) } function k(a, d, e, f, h, i, j) { return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d) } function l(a) { for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;)b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++; return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g } function m(a) { var b, c, d = "", e = ""; for (c = 0; 3 >= c; c++)b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2); return d } function n(a) { a = a.replace(/\r\n/g, "\n"); for (var b = "", c = 0; c < a.length; c++) { var d = a.charCodeAt(c); 128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128)) } return b } var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21; for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16)p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s); var O = m(t) + m(u) + m(v) + m(w); return O.toLowerCase() }

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
