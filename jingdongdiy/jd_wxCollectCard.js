/*
集卡抽奖通用活动

第一个CK失效会退出脚本


请求太频繁会被黑ip

变量：
//export jd_wxCollectCard_activityId="活动ID"
活动网址：
//https://lzkjdz-isv.isvjcloud.com/wxCollectCard/activity/activity?activityId=xxxxxxx

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#集卡抽奖通用活动
1 1 1 1 * jd_wxCollectCard.js, tag=集卡抽奖通用活动, enabled=true

*/

const $ = new Env('集卡抽奖通用活动');

const jdCookieNode=$.isNode()?require('./jdCookie.js'):'';
const notify=$.isNode()?require('./sendNotify'):'';
let cookiesArr=[],cookie='';
if($.isNode()){
	Object.keys(jdCookieNode).forEach(_0x288e2b=>{
		cookiesArr.push(jdCookieNode[_0x288e2b]);
	});
	if(process.env.JD_DEBUG&&process.env.JD_DEBUG==='false')console.log=()=>{};
}else{
	cookiesArr=[$.getdata('CookieJD'),$.getdata('CookieJD2'),...jsonParse($.getdata('CookiesJD')||'[]').map(_0xafbeab=>_0xafbeab.cookie)].filter(_0x2a33e1=>!!_0x2a33e1);
}
allMessage='';
message='';
$.hotFlag=false;
$.outFlag=false;
$.activityEnd=false;
let lz_jdpin_token_cookie='';
let activityCookie='';
let jd_wxCollectCard_activityId='';
jd_wxCollectCard_activityId=$.isNode()?process.env.jd_wxCollectCard_activityId?process.env.jd_wxCollectCard_activityId:''+jd_wxCollectCard_activityId:$.getdata('jd_wxCollectCard_activityId')?$.getdata('jd_wxCollectCard_activityId'):''+jd_wxCollectCard_activityId;
!(async()=>{
	if(!jd_wxCollectCard_activityId){
		console.log('\n衰仔、请填写集卡抽奖的活动ID,变量是jd_wxCollectCard_activityId\n');
		return;
	}
	if(!cookiesArr[0]){
		$.msg($.name,'【提示】请先获取cookie\n直接使用NobyDa的京东签到获取','https://bean.m.jd.com/',{'open-url':'https://bean.m.jd.com/'});
		return;
	}
	$.activityId=jd_wxCollectCard_activityId;
	$.shareUuid='';
	console.log('入口:\nhttps://lzkjdz-isv.isvjcloud.com/wxCollectCard/activity/activity?activityId='+$.activityId);
	for(let _0x3950d9=0;_0x3950d9<cookiesArr.length;_0x3950d9++){
		cookie=cookiesArr[_0x3950d9];
		if(cookie){
			$.UserName=decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/)&&cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
			$.index=_0x3950d9+1;
			message='';
			$.bean=0;
			$.hotFlag=false;
			$.nickName='';
			console.log('\n\n开始【京东账号'+$.index+'】'+($.nickName||$.UserName)+'\n');
			await getUA();
			await run();
			await $.wait(3000);
			if((_0x3950d9==0)&&!$.actorUuid)break;
			if($.outFlag||$.activityEnd)break;
			if($.hasEnd)break;
		}
	}
	cookie=cookiesArr[0];
	if(cookie&&$.assistStatus&&!$.outFlag&&!$.activityEnd){
		$.UserName=decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/)&&cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
		$.index=1;
		message='';
		$.bean=0;
		$.hotFlag=false;
		$.nickName='';
		console.log('\n\n开始抽奖【京东账号'+$.index+'】'+($.nickName||$.UserName)+'\n');
		await $.wait(parseInt(Math.random()*2000+2000,10));
		await getUA();
		await runs();
		await $.wait(3000);
	}if($.outFlag){
		let _0x317d7f='此ip已被限制，请过10分钟后再执行脚本';
		$.msg($.name,'',''+_0x317d7f);
		if($.isNode())await notify.sendNotify(''+$.name,''+_0x317d7f);
	}if(allMessage){
		$.msg($.name,'',''+allMessage);
	}
})().catch(_0x9ae645=>$.logErr(_0x9ae645)).finally(()=>$.done());
async function run(){
	try{
		$.assistCount=0;
		$.endTime=0;
		lz_jdpin_token_cookie='';
		$.Token='';
		$.Pin='';
		let _0x180fcb=false;
		await takePostRequest('isvObfuscator');
		if($.Token==''){
			console.log('获取[token]失败！');
			return;
		}
		await getCk();
		if(activityCookie==''){
			console.log('获取cookie失败');
			return;
		}
		if($.activityEnd===true){
			console.log('活动结束');
			return;
		}
		if($.outFlag){
			console.log('此ip已被限制，请过10分钟后再执行脚本\n');
			return;
		}
		await takePostRequest('getSimpleActInfoVo');
		await $.wait(1000);
		await takePostRequest('getMyPing');
		if(!$.Pin){
			console.log('获取[Pin]失败！');
			return;
		}
		await takePostRequest('accessLogWithAD');
		await $.wait(1000);
		await takePostRequest('getActMemberInfo');
		if($.openCard==false){
			console.log('衰仔，没有开通此店铺的会员，所以无法参与活动啦。');
			return;
		}
		await takePostRequest('getUserInfo');
		await $.wait(1000);
		await takePostRequest('activityContent');
		await takePostRequest('shopInfo');
		await takePostRequest('saveSource');
		await $.wait(1000);
		if($.index==1){
			console.log('活动获取成功，助力码：'+$.actorUuid+'\n默认不开卡，请手动进入活动页面开卡');
			console.log('\n当前活动店铺：'+$.shopName+'\n当前集卡成功人数：'+$.gatherCount+'\n');
			console.log('目前已集齐卡片详情：');
			for(const _0x42a661 of $.cardList){
				_0x180fcb=true;
				$.cardName=_0x42a661.cardName;
				$.count=_0x42a661.count;
				console.log('卡片：'+$.cardName+' , '+$.count+'张');
			}
			$.assistStatus=true;
		}
		if($.index!=1){
			await takePostRequest('drawCard');
			await takePostRequest('drawCard2');
		}
		if($.hotFlag)return;
		if($.outFlag){
			console.log('此ip已被限制，请过10分钟后再执行脚本\n');
			return;
		}
		if($.index==1){
			$.shareUuid=$.actorUuid;
			console.log('\n衰仔、全部助力→:'+$.shareUuid);
		}
		if($.index%3==0)await $.wait(parseInt((Math.random()*3000)+3000,10));
	}catch(_0x2a30c8){
		console.log(_0x2a30c8);
	}
}
async function runs(){
	try{
		$.assistCount=0;
		$.endTime=0;
		lz_jdpin_token_cookie='';
		$.Token='';
		$.Pin='';
		let _0x3168d6=false;
		await takePostRequest('isvObfuscator');
		if($.Token==''){
			console.log('获取[token]失败！');
			return;
		}
		await getCk();
		if(activityCookie==''){
			console.log('获取cookie失败');
			return;
		}
		if($.activityEnd===true){
			console.log('活动结束');
			return;
		}
		if($.outFlag){
			console.log('此ip已被限制，请过10分钟后再执行脚本\n');
			return;
		}
		await takePostRequest('getSimpleActInfoVo');
		await $.wait(1000);
		await takePostRequest('getMyPing');
		if(!$.Pin){
			console.log('获取[Pin]失败！');
			return;
		}
		await takePostRequest('accessLogWithAD');
		await $.wait(1000);
		await takePostRequest('getActMemberInfo');
		if($.openCard==false){
			console.log('衰仔，没有开通此店铺的会员，所以无法参与活动啦。');
			return;
		}
		await takePostRequest('getUserInfo');
		await $.wait(1000);
		await takePostRequest('activityContent');
		await takePostRequest('shopInfo');
		await $.wait(1000);
		await takePostRequest('saveSource');
		await $.wait(1000);
		console.log('\n当前活动店铺：'+$.shopName+'\n当前集卡成功人数：'+$.gatherCount+'\n');
		console.log('目前已集齐卡片详情：');
		const _0x55ad9c=new Set();
		for(const _0x15a464 of $.cardList){
			_0x3168d6=true;
			$.cardName=_0x15a464.cardName;
			$.count=_0x15a464.count;
			(_0x15a464.count>=0)?_0x55ad9c.add(_0x15a464.count):'';
			console.log('卡片：'+$.cardName+' , '+$.count+'张');
		}
		console.log('\n当前活动每人可抽卡：'+$.drawCounts+'次');
		await takePostRequest('drawCard3');
		for(let _0x577dbd=0;_0x577dbd<$.canShakeTimes;_0x577dbd++){
			console.log('第'+_0x577dbd+'次抽奖');
			await takePostRequest('drawCard3');
			await $.wait(parseInt(Math.random()*2000+2000,10));
		}
		var _0x16851a=Array.from(_0x55ad9c);
		var _0x3c668e=getMaxMin(_0x16851a,'min');
		console.log('\n目前已集齐可抽奖：'+_0x3c668e+' 次');
		for(let _0x2ba372=0;_0x2ba372<_0x3c668e;_0x2ba372++){
			console.log('第'+_0x2ba372+'次抽奖');
			await takePostRequest('getPrize');
			await $.wait(parseInt((Math.random()*2000)+2000,10));
		}
		if($.hotFlag)return;
		if($.outFlag){
			console.log('此ip已被限制，请过10分钟后再执行脚本\n');
			return;
		}
		if($.index%3==0)await $.wait(parseInt(Math.random()*3000+3000,10));
	}catch(_0x1eea8d){
		console.log(_0x1eea8d);
	}
}
async function takePostRequest(_0x3c703e){
	if($.outFlag)return;
	let _0x5d59f0='https://lzkjdz-isv.isvjcloud.com';
	let _0x4725ae='';
	let _0x2d0880='POST';
	let _0x3dd93b='';
	switch(_0x3c703e){
		case 'isvObfuscator':
			url='https://api.m.jd.com/client.action?functionId=isvObfuscator';
			_0x4725ae='body=%7B%22url%22%3A%22https%3A//lzkjdz-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=9a79133855e4ed42e83cda6c58b51881c4519236&client=apple&clientVersion=10.1.4&st=1647263148203&sv=102&sign=53ee02a59dece3c480e3fcb067c49954';
			break;
		case 'getMyPing':
			url=_0x5d59f0+'/customer/getMyPing';
			_0x4725ae='token='+$.Token+'&fromType=APP&userId='+$.venderId;
			break;
		case'shopInfo':
			url=_0x5d59f0+'/wxCollectCard/shopInfo';
			_0x4725ae='activityId='+$.activityId;
			break;
		case 'getSimpleActInfoVo':
			url=_0x5d59f0+'/customer/getSimpleActInfoVo';
			_0x4725ae='activityId='+$.activityId;
			break;
		case 'getActMemberInfo':
			url=_0x5d59f0+'/wxCommonInfo/getActMemberInfo';
			_0x4725ae='venderId='+$.venderId+'&activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			break;
		case 'accessLogWithAD':
			url=_0x5d59f0+'/common/accessLogWithAD';
			let _0x1aeca9='https://lzkjdz-isv.isvjcloud.com/wxCollectCard/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid;
			_0x4725ae='venderId='+($.shopId||$.venderId||'')+'&code=42&pin='+encodeURIComponent($.Pin)+'&activityId='+$.activityId+'&pageUrl='+encodeURIComponent(_0x1aeca9)+'&subType=app&adSource=';
			break;
		case 'getUserInfo':
			url=_0x5d59f0+'/wxActionCommon/getUserInfo';
			_0x4725ae='pin='+encodeURIComponent($.Pin);
			break;
		case 'drawCard':
			url=_0x5d59f0+'/wxCollectCard/drawCard';
			_0x4725ae='&sourceId='+$.shareUuid+'&activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&pinImg='+$.pinImg+'&jdNick='+encodeURIComponent($.jdNick)+'&type=1';
			break;
		case 'drawCard2':
			url=_0x5d59f0+'/wxCollectCard/drawCard';
			_0x4725ae='&sourceId='+$.shareUuid+'&activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&pinImg='+$.pinImg+'&type=2';
			break;
		case 'drawCard3':
			url=_0x5d59f0+'/wxCollectCard/drawCard';
			_0x4725ae='&sourceId='+$.actorUuid+'&activityId='+$.activityId+'&type=0';
			break;
		case 'drawContent':
			url=_0x5d59f0+'/wxCollectCard/drawContent';
			_0x4725ae='activityId='+$.activityId;
			break;
		case 'activityContent':
			url=_0x5d59f0+'/wxCollectCard/activityContent';
			_0x4725ae='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&uuid='+$.shareUuid;
			break;
		case 'saveSource':
			url=_0x5d59f0+'/wxCollectCard/saveSource';
			_0x4725ae='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&pinImg='+$.pinImg+'&jdNick='+encodeURIComponent($.jdNick);
			break;
		case 'drawResult':
			url=_0x5d59f0+'/wxCollectCard/drawResult';
			_0x4725ae='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin)+'&uuid='+$.actorUuid;
			break;
		case 'followShop':
			url=_0x5d59f0+'/wxActionCommon/followShop';
			_0x4725ae='userId='+$.venderId+'&activityType=70&buyerNick='+encodeURIComponent($.Pin)+'&activityId='+$.activityId;
			break;
		case 'getPrize':
			url=_0x5d59f0+'/wxCollectCard/getPrize';
			_0x4725ae='activityId='+$.activityId+'&pin='+encodeURIComponent($.Pin);
			break;
		default:
			console.log('错误'+_0x3c703e);
	}
	let _0x368569=getPostRequest(url,_0x4725ae,_0x2d0880);
	return new Promise(async _0x1ab3c0=>{
		$.post(_0x368569,(_0x5e147f,_0x3fe2db,_0x2dfd3c)=>{
			try{
				setActivityCookie(_0x3fe2db);
				if(_0x5e147f){
					if(_0x3fe2db&&(typeof _0x3fe2db.statusCode!='undefined')){
						if(_0x3fe2db.statusCode==493){
							console.log('此ip已被限制，请过10分钟后再执行脚本\n');
							$.outFlag=true;
						}
					}
					console.log(''+$.toStr(_0x5e147f,_0x5e147f));
					console.log(_0x3c703e+' API请求失败，请检查网路重试');
				}else{
					dealReturn(_0x3c703e,_0x2dfd3c);
				}
			}catch(_0x5a23fb){
				console.log(_0x5a23fb,_0x3fe2db);
			}
			finally{
				_0x1ab3c0();
			}
		});
	});
}
async function dealReturn(_0x2cf02f,_0x144dbd){
	let _0x1b0508='';
	try{
		if((_0x2cf02f!='accessLogWithAD')||(_0x2cf02f!='drawContent')){
			if(_0x144dbd){
				_0x1b0508=JSON.parse(_0x144dbd);
			}
		}
	}catch(_0x102381){
		console.log(_0x2cf02f+' 执行任务异常');
		console.log(_0x144dbd);
		$.runFalag=false;
	}try{
		switch(_0x2cf02f){
			case 'isvObfuscator':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.errcode==0){
					if(typeof _0x1b0508.token!='undefined')$.Token=_0x1b0508.token;
				}else if(_0x1b0508.message){
					console.log('isvObfuscator '+(_0x1b0508.message||''));
				}else{
					console.log(_0x144dbd);
				}
				}else{
					console.log(_0x144dbd);
				}
				break;
			case 'getMyPing':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					if(_0x1b0508.data&&(typeof _0x1b0508.data.secretPin!='undefined'))$.Pin=_0x1b0508.data.secretPin;
					if(_0x1b0508.data&&typeof _0x1b0508.data.nickname!='undefined')$.nickname=_0x1b0508.data.nickname;
				}else if(_0x1b0508.errorMessage){
					console.log(_0x2cf02f+' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				}else{}
				break;
			case 'shopInfo':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					$.shopName=_0x1b0508.data.shopName||'';
				}else if(_0x1b0508.errorMessage){
					console.log(_0x2cf02f+' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				break;
			case 'getSimpleActInfoVo':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					if(typeof _0x1b0508.data.shopId!='undefined')$.shopId=_0x1b0508.data.shopId;
					if(typeof _0x1b0508.data.venderId!='undefined')$.venderId=_0x1b0508.data.venderId;
				}else if(_0x1b0508.errorMessage){
					console.log(_0x2cf02f+' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				}else{}
				break;
			case 'getUserInfo':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&_0x1b0508.result===true){
					$.pinImg=_0x1b0508.data.yunMidImageUrl||'';
					$.jdNick=_0x1b0508.data.nickname||'';
				}else if(_0x1b0508.errorMessage){
					console.log(_0x2cf02f+' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				break;
			case 'activityContent':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					$.cardList=_0x1b0508.data.cardList||[];
					$.helpStatus=_0x1b0508.data.canDraw||false;
					$.canShake=_0x1b0508.data.canShake||true;
					$.canCreate=_0x1b0508.data.canCreate||true;
					$.canAssist=_0x1b0508.data.canAssist||true;
					$.gatherCount=_0x1b0508.data.gatherCount||0;
					$.drawCount=_0x1b0508.data.rule.match(/每人每天可获得(\d+)次/);
					if($.drawCount){
						$.drawCounts=$.drawCount[1];
					}
				}else if(_0x1b0508.errorMessage){
					if(_0x1b0508.errorMessage.indexOf('结束')>-1)$.activityEnd=true;
					console.log(''+(_0x1b0508.errorMessage||''));
				}else{
					console.log(''+_0x144dbd);
				}
				}else{
					console.log(''+_0x144dbd);
				}
				break;
			case 'saveSource':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&_0x1b0508.result===true){
					$.actorUuid=_0x1b0508.data||'';
				}else if(_0x1b0508.errorMessage){
					console.log(_0x2cf02f+' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				break;
			case 'drawCard':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					console.log('获得：'+(_0x1b0508.data.reward.cardName||''));
				}else if(_0x1b0508.errorMessage){
					console.log(''+(_0x1b0508.errorMessage||''));
				}else{
					console.log(''+_0x144dbd);
				}
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				break;
			case 'drawCard2':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					console.log('获得：'+(_0x1b0508.data.reward.cardName||''));
				}else if(_0x1b0508.errorMessage){
					console.log(''+(_0x1b0508.errorMessage||''));
				}else{
					console.log(''+_0x144dbd);
				}
				}else{}
				break;
			case 'drawCard3':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					$.canShakeTimes=_0x1b0508.data.canShakeTimes||0;
					console.log('获得：'+(_0x1b0508.data.reward.cardName||''));
				}else if(_0x1b0508.errorMessage){
					console.log(' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(''+_0x144dbd);
				}
				}else{}
				break;
			case 'getPrize':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)&&(_0x1b0508.result.drawOk===true)){
					console.log('获得：'+(_0x1b0508.data.name||''));
				}else if(_0x1b0508.errorMessage){
					console.log(' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(''+_0x144dbd);
				}
				}else{}
				break;
			case 'drawContent':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					$.content=_0x1b0508.data.content||[];
				}else if(_0x1b0508.errorMessage){
					console.log(_0x2cf02f+' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				break;
			case 'getActMemberInfo':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					$.openCard=_0x1b0508.data.openCard||false;
				}else if(_0x1b0508.errorMessage){
					console.log(_0x2cf02f+' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				break;
			case 'drawResult':
				if(typeof _0x1b0508=='object'){
					if(_0x1b0508.result&&(_0x1b0508.result===true)){
					if(typeof _0x1b0508.data=='object'){
						let _0x34c632='';
						if(_0x1b0508.data.drawName){
							_0x34c632=''+_0x1b0508.data.drawName;
						}
						if(!_0x34c632){
							_0x34c632='空气💨';
						}
						console.log('获得:'+(_0x34c632||_0x144dbd));
					}else{
						console.log(_0x2cf02f+' '+_0x144dbd);
					}
				}else if(_0x1b0508.errorMessage){
					$.runFalag=false;
					console.log(_0x2cf02f+' '+(_0x1b0508.errorMessage||''));
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				}else{
					console.log(_0x2cf02f+' '+_0x144dbd);
				}
				break;
			case'accessLogWithAD':
			case 'drawContent':
				break;
			default:
				console.log(_0x2cf02f+'-> '+_0x144dbd);
		}
		if(typeof _0x1b0508=='object'){
			if(_0x1b0508.errorMessage){
				if(_0x1b0508.errorMessage.indexOf('火爆')>-1){
					$.hotFlag=true;
				}
			}
		}
	}catch(_0x197396){
		console.log(_0x197396);
	}
}
function getPostRequest(_0x4e1425,_0x75bb63,_0x4644bf='POST'){
	let _0x27316b={'Accept':'application/json, text/javascript, */*; q=0.01','Accept-Encoding':'gzip, deflate, br','Accept-Language':'zh-cn','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded; charset=UTF-8','Cookie':cookie,'User-Agent':$.UA,'X-Requested-With':'XMLHttpRequest'};
	if(_0x4e1425.indexOf('https://lzkjdz-isv.isvjcloud.com')>-1){
		_0x27316b.Origin='https://lzkjdz-isv.isvjcloud.com';
		_0x27316b.Referer='https://lzkjdz-isv.isvjcloud.com/wxCollectCard/activity/activity?activityId='+$.activityId+'&shareUuid='+$.shareUuid;
		_0x27316b.Cookie=''+((lz_jdpin_token_cookie&&lz_jdpin_token_cookie)||'')+($.Pin&&('AUTH_C_USER='+$.Pin+';')||'')+activityCookie;
	}
	return{'url':_0x4e1425,'method':_0x4644bf,'headers':_0x27316b,'body':_0x75bb63,'timeout':30000};
}
function getCk(){
	return new Promise(_0x2bf6a4=>{
		let _0x312e47={'url':'https://lzkjdz-isv.isvjcloud.com/wxCommonInfo/token','headers':{'Accept':'application/json, text/plain, */*','Accept-Encoding':'gzip, deflate, br','Accept-Language':'zh-cn','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded','Cookie':cookie,'Referer':'https://lzkjdz-isv.isvjcloud.com/wxCollectCard/activity/activity?activityId='+$.activityId,'User-Agent':$.UA},'timeout':30000};
		$.get(_0x312e47,async(_0x3bb06b,_0x4fe4b7,_0x356139)=>{
			try{
				if(_0x3bb06b){
					if(_0x4fe4b7&&(typeof _0x4fe4b7.statusCode!='undefined')){
						if(_0x4fe4b7.statusCode==493){
							console.log('此ip已被限制，请过10分钟后再执行脚本\n');
							$.outFlag=true;
						}
					}
					console.log(''+$.toStr(_0x3bb06b));
					console.log($.name+' cookie API请求失败，请检查网路重试');
				}else{
					let _0x35bf91=_0x356139.match(/(活动已经结束)/)&&_0x356139.match(/(活动已经结束)/)[1]||'';
					if(_0x35bf91){
						$.activityEnd=true;
						console.log('活动已结束');
					}
					setActivityCookie(_0x4fe4b7);
				}
			}catch(_0x490eaf){
				$.logErr(_0x490eaf,_0x4fe4b7);
			}
			finally{
				_0x2bf6a4();
			}
		});
	});
}
function setActivityCookie(_0xcf04f5){
	let _0x764f41='';
	let _0x4e8dc2='';
	let _0x36ecc0='';
	let _0x4cd4cb=_0xcf04f5&&_0xcf04f5.headers&&(_0xcf04f5.headers['set-cookie']||_0xcf04f5.headers['Set-Cookie']||'')||'';
	let _0x32b8f7='';
	if(_0x4cd4cb){
		if(typeof _0x4cd4cb!='object'){
			_0x32b8f7=_0x4cd4cb.split(',');
		}else _0x32b8f7=_0x4cd4cb;
		for(let _0x157d1f of _0x32b8f7){
			let _0x155c7e=_0x157d1f.split(';')[0].trim();
			if(_0x155c7e.split('=')[1]){
				if(_0x155c7e.indexOf('LZ_TOKEN_KEY=')>-1)_0x764f41=_0x155c7e.replace(/ /g,'')+';';
				if(_0x155c7e.indexOf('LZ_TOKEN_VALUE=')>-1)_0x4e8dc2=(_0x155c7e.replace(/ /g,'')+';');
				if(_0x155c7e.indexOf('lz_jdpin_token=')>-1)_0x36ecc0=(''+_0x155c7e.replace(/ /g,''))+';';
			}
		}
	}
	if(_0x764f41&&_0x4e8dc2)activityCookie=_0x764f41+' '+_0x4e8dc2;
	if(_0x36ecc0)lz_jdpin_token_cookie=_0x36ecc0;
}
async function getUA(){
	$.UA='jdapp;iPhone;10.1.4;13.1.2;'+randomString(40)+';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}
function randomString(_0x31f279){
	_0x31f279=_0x31f279||32;
	let _0x4f41c5='abcdef0123456789',_0x2c1d17=_0x4f41c5.length,_0x132042='';
	for(i=0;i<_0x31f279;i++)_0x132042+=_0x4f41c5.charAt(Math.floor(Math.random()*_0x2c1d17));
	return _0x132042;
}
function getMaxMin(_0x586e18,_0x328f6e){
	if(_0x328f6e==='max'){
		return Math.max.apply(Math,_0x586e18);
	}else if(_0x328f6e==='min'){
		return Math.min.apply(Math,_0x586e18);
	}
}
function jsonParse(_0x5d04b9){
	if(typeof _0x5d04b9=='string'){
		try{
			return JSON.parse(_0x5d04b9);
		}catch(_0x2654c0){
			console.log(_0x2654c0);
			$.msg($.name,'','请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
			return[];
		}
	}
};

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

