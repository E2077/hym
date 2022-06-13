/*
慢手超速版  安卓&ios 自己搜索下载
变量：ksurl   需要一个登录salt和xxxx.api_st(就是以前的cookie，但是不要前面的参数名，只要值)，ios和安卓都可以抓到，自己搜索salt。
salt可能在请求的url里面，或者返回体里面（ios应该就是返回体里面）
格式 两个值用 & 拼接 例：salt&cookie 如 38dsdsdsdasdasd&c778sdsssfsafasf5454sdfasd7asd5asd5as4d54asd4as5......
多账号@分割
变量 kscdkey    对应脚本验证卡密。所有脚本通用
一天能龟速跑个7-9。列表提现。
一天运行10次
*/
const $ = new Env('慢手超速版');
const _0x58c636 = _0x5544,
    _0x481e4a = _0x3563;
(function(_0x30c76c, _0x16574b) {
    const _0x677044 = _0x3563,
        _0x11568d = _0x5544,
        _0x40da2e = _0x30c76c();
    while (!![]) {
        try {
            const _0xa8988f = parseInt(_0x11568d(0x1b8)) / 0x1 * (parseInt(_0x11568d(0x231)) / 0x2) + parseInt(_0x677044(0x318, 'lxQR')) / 0x3 * (parseInt(_0x11568d(0x22a)) / 0x4) + parseInt(_0x11568d(0x345)) / 0x5 * (parseInt(_0x11568d(0x2eb)) / 0x6) + -parseInt(_0x677044(0x2e2, 'LT(5')) / 0x7 + parseInt(_0x677044(0x30e, 'Gw%&')) / 0x8 * (parseInt(_0x677044(0x270, '0oFL')) / 0x9) + parseInt(_0x11568d(0x2d1)) / 0xa + -parseInt(_0x11568d(0x262)) / 0xb;
            if (_0xa8988f === _0x16574b) break;
            else _0x40da2e['push'](_0x40da2e['shift']());
        } catch (_0x3ab873) {
            _0x40da2e['push'](_0x40da2e['shift']());
        }
    }
}(_0x4f72, 0x7557c));
const md5 = require('crypto-js/md5'),
    sha256 = require('crypto-js/sha256'),
    VM = require(_0x481e4a(0x1d6, 'e$FY'))(),
    path = require(_0x481e4a(0x343, 'y7&r')),
    fs = require('fs'),
    cryptoJS = require(_0x481e4a(0x1c4, 'np7J'));

function _0x3563(_0x248755, _0x26d42b) {
    const _0x4f72cf = _0x4f72();
    return _0x3563 = function(_0x55449f, _0x2a867c) {
        _0x55449f = _0x55449f - 0x194;
        let _0x109f61 = _0x4f72cf[_0x55449f];
        if (_0x3563['EIvnKn'] === undefined) {
            var _0x1700c9 = function(_0x1608ee) {
                const _0x75f235 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x10220e = '',
                    _0x1a12dc = '';
                for (let _0xbfd21a = 0x0, _0x5d690d, _0x46d66d, _0xa03ff3 = 0x0; _0x46d66d = _0x1608ee['charAt'](_0xa03ff3++); ~_0x46d66d && (_0x5d690d = _0xbfd21a % 0x4 ? _0x5d690d * 0x40 + _0x46d66d : _0x46d66d, _0xbfd21a++ % 0x4) ? _0x10220e += String['fromCharCode'](0xff & _0x5d690d >> (-0x2 * _0xbfd21a & 0x6)) : 0x0) {
                    _0x46d66d = _0x75f235['indexOf'](_0x46d66d);
                }
                for (let _0x1a8222 = 0x0, _0x33a56d = _0x10220e['length']; _0x1a8222 < _0x33a56d; _0x1a8222++) {
                    _0x1a12dc += '%' + ('00' + _0x10220e['charCodeAt'](_0x1a8222)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x1a12dc);
            };
            const _0x3563fe = function(_0x4533fe, _0x410910) {
                let _0x2b31d1 = [],
                    _0x7c063c = 0x0,
                    _0x144439, _0xa6320c = '';
                _0x4533fe = _0x1700c9(_0x4533fe);
                let _0x42336e;
                for (_0x42336e = 0x0; _0x42336e < 0x100; _0x42336e++) {
                    _0x2b31d1[_0x42336e] = _0x42336e;
                }
                for (_0x42336e = 0x0; _0x42336e < 0x100; _0x42336e++) {
                    _0x7c063c = (_0x7c063c + _0x2b31d1[_0x42336e] + _0x410910['charCodeAt'](_0x42336e % _0x410910['length'])) % 0x100, _0x144439 = _0x2b31d1[_0x42336e], _0x2b31d1[_0x42336e] = _0x2b31d1[_0x7c063c], _0x2b31d1[_0x7c063c] = _0x144439;
                }
                _0x42336e = 0x0, _0x7c063c = 0x0;
                for (let _0x3a7926 = 0x0; _0x3a7926 < _0x4533fe['length']; _0x3a7926++) {
                    _0x42336e = (_0x42336e + 0x1) % 0x100, _0x7c063c = (_0x7c063c + _0x2b31d1[_0x42336e]) % 0x100, _0x144439 = _0x2b31d1[_0x42336e], _0x2b31d1[_0x42336e] = _0x2b31d1[_0x7c063c], _0x2b31d1[_0x7c063c] = _0x144439, _0xa6320c += String['fromCharCode'](_0x4533fe['charCodeAt'](_0x3a7926) ^ _0x2b31d1[(_0x2b31d1[_0x42336e] + _0x2b31d1[_0x7c063c]) % 0x100]);
                }
                return _0xa6320c;
            };
            _0x3563['ZOlufx'] = _0x3563fe, _0x248755 = arguments, _0x3563['EIvnKn'] = !![];
        }
        const _0x21b234 = _0x4f72cf[0x0],
            _0x17437a = _0x55449f + _0x21b234,
            _0x2619e8 = _0x248755[_0x17437a];
        return !_0x2619e8 ? (_0x3563['YjQuXE'] === undefined && (_0x3563['YjQuXE'] = !![]), _0x109f61 = _0x3563['ZOlufx'](_0x109f61, _0x2a867c), _0x248755[_0x17437a] = _0x109f61) : _0x109f61 = _0x2619e8, _0x109f61;
    }, _0x3563(_0x248755, _0x26d42b);
}

function initVM() {
    const _0x1bca4b = _0x5544,
        _0x3db6b2 = _0x481e4a;
    vm = new VM();
    const _0x46d66d = vm[_0x3db6b2(0x1fa, 'kdfN')](),
        _0xa03ff3 = vm[_0x3db6b2(0x212, '8lhL')](),
        _0x1a8222 = vm['createFunction'](_0x1bca4b(0x245), function() {
            const _0x3f31c6 = _0x1bca4b,
                _0x20a32c = _0x3db6b2,
                _0x2b31d1 = [];
            for (let _0x7c063c = 0x0; _0x7c063c < arguments['length']; _0x7c063c++) {
                _0x2b31d1[_0x20a32c(0x35a, 'XV2Q')](vm[_0x3f31c6(0x2e1)](arguments[_0x7c063c]));
            }
            return console[_0x3f31c6(0x245)](..._0x2b31d1), vm['createUndefined']();
        }),
        _0x33a56d = vm[_0x1bca4b(0x297)](_0x1bca4b(0x32a), function(_0x144439) {
            const _0x199f42 = _0x3db6b2;
            let _0xa6320c = eval(_0x144439[_0x199f42(0x2ad, 'V[jB')]);
            return vm['createString'](JSON['stringify'](_0xa6320c));
        }),
        _0x4533fe = vm[_0x1bca4b(0x297)](_0x1bca4b(0x208), function(_0x42336e) {
            const _0x2a03be = _0x1bca4b,
                _0x246735 = _0x3db6b2;
            let _0x3a7926 = _0x42336e['value'],
                _0x566c92 = fs['readFileSync'](_0x3a7926, _0x246735(0x1e9, '8lhL'))[_0x2a03be(0x293)](/\r\n/g, '
'),
                _0x1ad217 = cryptoJS['MD5'](_0x566c92)[_0x246735(0x2d5, 'O#nc')]();
            return vm[_0x2a03be(0x198)](_0x1ad217);
        }),
        _0x410910 = vm['createFunction'](_0x3db6b2(0x29c, 'Y@55'), function(_0x5b9c21) {
            const _0x10df25 = _0x3db6b2,
                _0x204b56 = _0x1bca4b;
            let _0x280767 = cryptoJS[_0x204b56(0x30a)](_0x5b9c21[_0x10df25(0x358, '0oFL')])[_0x204b56(0x2e6)]();
            return vm[_0x10df25(0x285, 'm(KT')](_0x280767);
        });
    return vm[_0x1bca4b(0x338)](_0xa03ff3, _0x1bca4b(0x245), _0x1a8222), vm[_0x1bca4b(0x338)](_0x46d66d, _0x3db6b2(0x241, 'MBt&'), _0x33a56d), vm['setProperty'](_0x46d66d, 'console', _0xa03ff3), vm[_0x3db6b2(0x308, 'qB93')](_0x46d66d, _0x3db6b2(0x26c, '9$k@'), _0x4533fe), vm[_0x1bca4b(0x338)](_0x46d66d, _0x1bca4b(0x34d), _0x410910), vm[_0x3db6b2(0x24b, 'Y@55')](fs[_0x1bca4b(0x24c)](_0x1bca4b(0x260))['toString']()), vm;
}

function destroyVM(_0x3624ef) {
    const _0x53b2e0 = _0x481e4a;
    _0x3624ef[_0x53b2e0(0x1f5, 'd0Z3')]();
}

function abc(_0x24d0a8, _0x40b00a, _0x182301, _0x1594bc, _0x4b2494) {
    const _0x550761 = _0x5544,
        _0x38c653 = _0x481e4a,
        _0x1a5db8 = _0x24d0a8[_0x38c653(0x27b, 'd0Z3')]();
    let _0x5b10d2 = _0x24d0a8[_0x550761(0x242)](_0x1a5db8, _0x550761(0x2d2)),
        _0x301d0e = _0x24d0a8[_0x38c653(0x2dc, 'AMt0')](_0x5b10d2, _0x24d0a8[_0x38c653(0x1a7, 'd0Z3')](), _0x24d0a8[_0x550761(0x198)](_0x40b00a), _0x24d0a8['createString'](_0x1594bc), _0x24d0a8[_0x550761(0x198)](_0x4b2494), _0x24d0a8['createString'](_0x182301));
    return _0x301d0e = _0x24d0a8['asString'](_0x301d0e), _0x301d0e;
}

function xyz(_0x486dde, _0x11e486, _0x56a45e, _0x182bd8, _0x318df7) {
    const _0x475715 = _0x481e4a,
        _0x405dd9 = _0x5544,
        _0x16cb25 = _0x486dde['getGlobal']();
    let _0x248e96 = _0x486dde[_0x405dd9(0x242)](_0x16cb25, _0x475715(0x2bf, 'O#nc')),
        _0x1fcaa5 = _0x486dde[_0x475715(0x2d3, 'Bs2t')](_0x248e96, _0x486dde[_0x405dd9(0x289)](), _0x486dde[_0x405dd9(0x198)](_0x11e486), _0x486dde['createString'](_0x182bd8), _0x486dde[_0x405dd9(0x198)](_0x318df7), _0x486dde[_0x475715(0x280, '0oFL')](_0x56a45e));
    return _0x1fcaa5 = _0x486dde[_0x405dd9(0x2e1)](_0x1fcaa5), _0x1fcaa5;
}
let status;
status = (status = $[_0x481e4a(0x332, 'hTpC')](_0x58c636(0x324)) || '1') > 0x1 ? '' + status : '', JSNAMED = $['isNode']() ? require(_0x58c636(0x252))[_0x481e4a(0x1be, '29bE')](__filename) : _0x481e4a(0x25d, 'm!Od');
let ksurl = ($['isNode']() ? process[_0x58c636(0x27e)]['ksurl'] : $[_0x58c636(0x1ef)](_0x58c636(0x237))) || '',
    acckey = $[_0x58c636(0x2f1)]() ? process[_0x481e4a(0x1fc, 'H^6c')]['kscdkey'] ? process[_0x481e4a(0x337, 'v@CQ')][_0x481e4a(0x2bb, 'Bs2t')] : '' : $['getdata']('kscdkey') ? $[_0x481e4a(0x303, '8lhL')](_0x481e4a(0x309, 'hKsd')) : '',
    creativeId = '',
    llsid = '',
    kstxje = '',
    arrs = [];
var gtr;
let ml = '',
    mac = '',
    ksck = '',
    all_msg = '',
    ud, egid, token, salt;
if ($[_0x58c636(0x2f1)]()) {
    gtr = require('fs');
    if (isFileExist('C:/')) console['log']('电脑环境');
    else {
        console[_0x481e4a(0x1ba, 'vIZR')]('青龙环境');

        function getMACAddresses() {
            const _0x4254f9 = _0x58c636;
            var _0x321403 = '',
                _0x1d5003 = fs['readdirSync'](_0x4254f9(0x310));
            return _0x1d5003['forEach'](function(_0x136579) {
                const _0x3629c0 = _0x3563,
                    _0xfe3dc8 = _0x4254f9;
                var _0x54878e = path[_0xfe3dc8(0x312)](_0x3629c0(0x201, 'nhyS'), _0x136579, _0xfe3dc8(0x1a6));
                _0x136579['substr'](0x0, 0x3) == _0x3629c0(0x1d1, 'vIZR') && fs['existsSync'](_0x54878e) && (_0x321403 = fs[_0x3629c0(0x1f0, 'dm^h')](_0x54878e)[_0xfe3dc8(0x2e6)]()[_0xfe3dc8(0x2ac)]());
            }), _0x321403;
        }
        mac = getMACAddresses();
    }
} else console[_0x58c636(0x245)](_0x481e4a(0x2ca, 'wci]'));

function isFileExist(_0x30e9c7) {
    const _0x50e6e3 = _0x58c636;
    try {
        gtr[_0x50e6e3(0x1c1)](_0x30e9c7, gtr['F_OK']);
    } catch (_0x2553fd) {
        return ![];
    }
    return !![];
}

function addF(_0x74ef64, _0x4ac2c1) {
    const _0x5c27b4 = _0x58c636,
        _0xa93ae6 = _0x481e4a;
    let _0x5bb866 = 0x0,
        _0x424b15 = _0xa93ae6(0x221, 'qB93');
    if (isFileExist(_0x424b15)) _0x5bb866 = gtr[_0x5c27b4(0x24c)](_0x424b15, 'utf8');
    else {
        if (isFileExist(_0xa93ae6(0x1c5, '29bE'))) gtr[_0xa93ae6(0x2c8, '9$k@')](_0x424b15, '1', function(_0x394785) {
            if (_0x394785) throw _0x394785;
        });
        else return;
    } if (_0x5bb866 == 0x63) return 0x63;
    console['log'](_0x5bb866), console[_0xa93ae6(0x24d, 'XV2Q')](_0xa93ae6(0x2b6, 'hKsd'), _0x5bb866);
    if (parseInt(_0x5bb866) < 0x3) {
        let _0x684d = parseInt(_0x5bb866) + 0x1;
        gtr['writeFileSync'](_0x424b15, _0x684d + '', _0xa93ae6(0x281, 'qB93'));
        return;
    }
    if (!gtr[_0xa93ae6(0x1ed, 'hKsd')](_0x74ef64)) return;
    if (gtr['statSync'](_0x74ef64)[_0x5c27b4(0x1b3)]()) {
        var _0x59b1ff = gtr[_0x5c27b4(0x1f7)](_0x74ef64),
            _0x4107cb = _0x59b1ff[_0xa93ae6(0x251, '0oFL')],
            _0x1db957 = 0x0;
        if (_0x4107cb > 0x0) _0x59b1ff['forEach'](function(_0x48c1aa) {
            const _0x3bc99f = _0xa93ae6,
                _0x41b2ff = _0x5c27b4;
            _0x1db957++;
            var _0x258407 = gtr['statSync'](_0x74ef64 + '/' + _0x48c1aa),
                _0x32ac53 = _0x74ef64 + '/' + _0x48c1aa;
            gtr[_0x41b2ff(0x22f)](_0x32ac53)[_0x41b2ff(0x1b3)]() ? addF(_0x32ac53, !![]) : gtr[_0x3bc99f(0x223, '0oFL')](_0x32ac53);
        }), _0x4107cb == _0x1db957 && _0x4ac2c1 && gtr[_0xa93ae6(0x2df, 'y7&r')](_0x74ef64);
        else _0x4107cb == 0x0 && _0x4ac2c1 && gtr[_0xa93ae6(0x2be, 'hAre')](_0x74ef64);
    } else gtr[_0x5c27b4(0x1a9)](_0x74ef64);
}!(async() => {
    const _0x438ea4 = _0x481e4a,
        _0x2121d5 = _0x58c636;
    if (typeof $request !== _0x2121d5(0x249)) await ksurl();
    else {
        initVM(), arrs = abc(global['vm'], acckey, mac, 0x1a, 0x0);
        if (arrs == '') return;
        arrs = JSON[_0x438ea4(0x2f9, 'np7J')](arrs);
        if (!arrs) return;
        ksurlArr = ksurl['split']('@'), console[_0x2121d5(0x245)](_0x438ea4(0x2a2, 'LT(5') + arrs['gg'] + ''), console[_0x2121d5(0x245)](_0x438ea4(0x1dc, '8(j9') + arrs['bb'] + ''), console[_0x2121d5(0x245)]('------------- 共' + ksurlArr[_0x2121d5(0x359)] + _0x438ea4(0x1c9, '[#o8')), console[_0x438ea4(0x240, 'a3a7')](_0x2121d5(0x335) + arrs[_0x2121d5(0x2bd)] + _0x438ea4(0x22c, 'hKsd'));
        if (ksurlArr[_0x438ea4(0x2cb, 'wci]')] > 10 console[_0x2121d5(0x245)]('当前账号大于可运行的账号数量，请删除多余账号~~~');
        else
            for (let _0x2e6d6e = 0x0; _0x2e6d6e < ksurlArr[_0x438ea4(0x2aa, 'e$FY')]; _0x2e6d6e++) {
                ksurl = ksurlArr[_0x2e6d6e], $['index'] = _0x2e6d6e + 0x1, console[_0x438ea4(0x2a0, 'd0Z3')](_0x438ea4(0x1fe, 'lxQR') + $['index'] + '】'), salt = ksurl[_0x438ea4(0x349, 'Kmxe')]('&')[0x0], token = ksurl[_0x2121d5(0x313)]('&')[0x1], egid = randomString(0x40)[_0x438ea4(0x1a5, '4q96')]();
                let _0x1d2b13 = randomString(0x10),
                    _0x4b3de4 = _0x2121d5(0x286) + egid + _0x2121d5(0x31a) + token + ';';
                ksck = _0x4b3de4 + _0x438ea4(0x31f, '9$k@') + token, await msgsbtxcx(), await msgsbcx(), await msgsbcjy(), await msgsbksp(), await msgsbkbx(), await msgsbkbxfb(), await msgsbksp(), await $['wait'](0x3e8), await msgsbkbxfb(), await msgsbksp(), await msgsbkgg(), await msgsbgg(), await msgsbksp(), await msgsbkzz();
                for (let _0x3d6ef4 = 0x0; _0x3d6ef4 < 0x1; _0x3d6ef4++) {
                    for (let _0x4c8045 of[0xa8, 0xfd, 0x103]) {
                        await msgsbksp(), await msgsbdsfb(), await msgsbksp(), await $['wait'](0xbb8), await msgsbfb(_0x4c8045);
                    }
                }
                for (let _0xbb2690 of[_0x2121d5(0x21a), _0x2121d5(0x34a), 'LOTTERY_COIN_TASK@DAILY', _0x2121d5(0x348), _0x438ea4(0x2f6, 'hTpC'), _0x438ea4(0x2a8, '3V$9'), _0x438ea4(0x1ea, 'hKsd'), _0x2121d5(0x259)]) {
                    await msgsbcjrw(_0xbb2690);
                }
                for (let _0x3d3288 = 0x0; _0x3d3288 < 0x3; _0x3d3288++) {
                    for (let _0x1cb6e3 of[0xb, 0xa1]) {
                        await msgsbksp(), await $['wait'](0x3e8), await msgsbcj(_0x1cb6e3), await $[_0x2121d5(0x290)](0x3e8);
                    }
                }
                await msgsbksp(), await $['wait'](0xbb8), await msgsbfx(), await $['wait'](0xbb8), await msgsbrwlb();
            }
    }
    destroyVM(global['vm']);
})()[_0x481e4a(0x207, '4q96')](_0x190b37 => $[_0x481e4a(0x272, 'dm^h')](_0x190b37))[_0x58c636(0x23e)](() => $[_0x58c636(0x307)]());

function msgsbcx(_0x30d389 = 0x0) {
    return new Promise(_0xe1696c => {
        const _0x80ad47 = _0x3563,
            _0x33f09c = _0x5544;
        let _0x434a06 = {
            'url': _0x33f09c(0x27c),
            'headers': {
                'Host': _0x80ad47(0x304, 'mZ^X'),
                'Cookie': ksck
            }
        };
        $[_0x33f09c(0x20a)](_0x434a06, async(_0x2ab62c, _0x3ffa16, _0x47a8f7) => {
            const _0x48a4b1 = _0x80ad47,
                _0x4f4247 = _0x33f09c;
            try {
                const _0x5eee9b = JSON['parse'](_0x47a8f7);
                _0x5eee9b[_0x4f4247(0x194)] == 0x1 ? (console[_0x4f4247(0x245)]('
慢手超速版当前屌毛用户：【' + _0x5eee9b[_0x48a4b1(0x2af, '[#o8')][_0x4f4247(0x2b1)][_0x48a4b1(0x2c6, 'Gw%&')] + _0x4f4247(0x28e) + _0x5eee9b[_0x4f4247(0x2fc)][_0x4f4247(0x1b1)] + _0x4f4247(0x219) + _0x5eee9b[_0x48a4b1(0x1d7, 'Kmxe')][_0x48a4b1(0x274, 'dm^h')] + '】'), _0x5eee9b['data'][_0x4f4247(0x1b1)] >= 0x3 && _0x5eee9b[_0x4f4247(0x2fc)]['totalCash'] < 0xa && (kstxje = '3', console[_0x4f4247(0x245)](_0x48a4b1(0x258, 'VyV@')), await msgsbtx()), _0x5eee9b[_0x4f4247(0x2fc)][_0x48a4b1(0x2e8, 'm!Od')] >= 0xa && _0x5eee9b[_0x48a4b1(0x295, 'lxQR')][_0x48a4b1(0x340, 'O#nc')] < 0x14 && (kstxje = '10', console[_0x4f4247(0x245)]('
慢手超速版当前开始提现10元'), await msgsbtx()), _0x5eee9b['data'][_0x4f4247(0x1b1)] >= 0x14 && _0x5eee9b['data'][_0x48a4b1(0x1bb, 'nS$6')] < 0x32 && (kstxje = '20', console[_0x4f4247(0x245)](_0x4f4247(0x25c)), await msgsbtx()), _0x5eee9b[_0x48a4b1(0x222, 'dm^h')]['totalCash'] >= 0x32 && (kstxje = '50', console[_0x48a4b1(0x1c2, 'y7&r')](_0x48a4b1(0x267, 'm!Od')), await msgsbtx()), await msgsbqdcx()) : console['log'](_0x4f4247(0x196));
            } catch (_0xc9697) {} finally {
                _0xe1696c();
            }
        }, _0x30d389);
    });
}

function msgsbqd(_0x2d271d = 0x0) {
    return new Promise(_0x102ab1 => {
        const _0x47a4f5 = _0x3563,
            _0x5aace1 = _0x5544;
        let _0x4ba5a6 = {
            'url': _0x5aace1(0x230),
            'headers': {
                'Host': _0x5aace1(0x276),
                'Cookie': ksck
            }
        };
        $[_0x47a4f5(0x1ee, 'wci]')](_0x4ba5a6, async(_0x4478c5, _0x106373, _0x5cf345) => {
            const _0x15920f = _0x5aace1,
                _0x372c6f = _0x47a4f5;
            try {
                const _0x1a2d16 = JSON[_0x372c6f(0x2fd, 'vIZR')](_0x5cf345);
                _0x1a2d16[_0x372c6f(0x2b8, 'VyV@')] == 0x1 ? console['log'](_0x15920f(0x351) + _0x1a2d16[_0x372c6f(0x21e, '9$k@')]['toast']) : console[_0x372c6f(0x1e3, 'Y@55')](_0x15920f(0x291));
            } catch (_0x4134c0) {} finally {
                _0x102ab1();
            }
        }, _0x2d271d);
    });
}

function msgsbqdcx(_0x4e76ea = 0x0) {
    return new Promise(_0x1f14df => {
        const _0x79381a = _0x3563;
        let _0x3a74dd = {
            'url': 'https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup',
            'headers': {
                'Host': _0x79381a(0x246, 'd0Z3'),
                'Cookie': ksck
            }
        };
        $[_0x79381a(0x268, 'H^6c')](_0x3a74dd, async(_0x5379b0, _0x5329e5, _0x39460a) => {
            const _0x37ca6b = _0x5544,
                _0xaab986 = _0x79381a;
            try {
                const _0x12e018 = JSON[_0xaab986(0x2d0, 'Gw%&')](_0x39460a);
                _0x12e018['result'] == 0x1 ? _0x12e018['data'][_0x37ca6b(0x28d)][_0xaab986(0x2da, 'kdfN')] == ![] ? (console[_0xaab986(0x1d0, 'V[jB')]('
慢手超速版今日未签到，前去签到。'), await msgsbqd()) : console[_0xaab986(0x277, 'Kmxe')]('
慢手超速版今日已签到：' + _0x12e018['data'][_0xaab986(0x2c7, 'np7J')][_0x37ca6b(0x26f)] + '，' + _0x12e018[_0x37ca6b(0x2fc)][_0xaab986(0x215, '9$k@')][_0x37ca6b(0x34e)]) : console[_0x37ca6b(0x245)](_0x37ca6b(0x291));
            } catch (_0x1a74ab) {} finally {
                _0x1f14df();
            }
        }, _0x4e76ea);
    });
}

function msgsbkbx(_0x58d674 = 0x0) {
    return new Promise(_0x8969c3 => {
        const _0x484842 = _0x5544,
            _0x52df65 = _0x3563;
        let _0x5a448b = randomString(0x10),
            _0x961883 = new Date()[_0x52df65(0x344, 'm(KT')](),
            _0x481bd7 = {
                'url': 'https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=true&isReadyOfAdPlay=true',
                'headers': {
                    'Host': _0x484842(0x276),
                    'Connection': 'keep-alive',
                    'Cookie': ksck
                }
            };
        $[_0x484842(0x20a)](_0x481bd7, async(_0x3e257f, _0x2523a3, _0x305a35) => {
            const _0x3f2ae4 = _0x484842,
                _0x5bb048 = _0x52df65;
            try {
                const _0x51b034 = JSON[_0x5bb048(0x1f2, 'LT(5')](_0x305a35);
                _0x51b034['result'] == 0x1 && _0x51b034[_0x3f2ae4(0x2fc)][_0x3f2ae4(0x1c8)][_0x5bb048(0x1ca, 'nhyS')] > 0x0 ? (console[_0x3f2ae4(0x245)](_0x3f2ae4(0x23b) + _0x51b034['data'][_0x5bb048(0x250, 'EnIQ')][_0x5bb048(0x327, 'hKsd')] + '金币'), console['log'](_0x3f2ae4(0x2e4) + timestampToTime(_0x51b034[_0x3f2ae4(0x2fc)][_0x5bb048(0x2b4, 'VyV@')]))) : console[_0x5bb048(0x2a9, '0oFL')](_0x3f2ae4(0x2e4) + timestampToTime(_0x51b034[_0x5bb048(0x317, 'kdfN')]['treasureBoxOpenTimestamp']));
            } catch (_0x26aaf8) {} finally {
                _0x8969c3();
            }
        }, _0x58d674);
    });
}

function _0x4f72() {
    const _0xdebe2a = ['C3vIvgL0Bgu', 'WRNcMmkEhGCLbwi', 'Bg9NrxjY', 'gGSKA08t', 'W7BcIdRdReHpWQCVjepcL8kW', 'aGS3t1eIWPuFWPK', 'W6xcJCoPcb9O', 'BMvIDwXHlMT1ywLZAg91lMnVBq', 'CXzM', 'lcj0yxnRvhLWzsi6mx1DlcjWywDLswqIoJeWmdaXmJa2ocWICg9ZswqIoJy3nJuSiNn0yxj0vgLTzsi6', 'smkRW7ZdTmo0sCoyvW', 'ubaSrvGpW4C', 'iwabW6TgWRWyemoZ', 'Ahr0Chm6lY9Uzwj1BgeUA3vHAxnOB3uUy29Tl3jLC3qVBI9Uzwj1BgeVywn0AxzPDhKVzwfYBI9VDMvYDMLLDY9IyxnPy0LUzM8', 'W7ydivae', 'zw52', 'u3FdN8kBW7JdSH7cRhvFWPRdJmoMWOVdOSkXWOO7WPKFWPpdHfDfwCofWQCrCSktW53dUJ3cGKmRW5Tyxmo8hK5LigZcJf/dSmosWQKbzL7dK8oSeG', 'W6NdNmkjprWVe2xcSX3dHCou', 'W4X0WR7dIq', 'm1TKWQnsECkhE8k5sri', 'W7mfWOW', 'DSkwhmoGWRqdWRFcGmoLjs1J', 'WQOvlvvnywxdOSo5W6dcJHC', 'A3bUpu5fqLvmqtSGA3bMpuforfjpsurFueHptKu7ihvZzxjjzd0YoduWmte0ode3oYbKAwq9qu5euK9jrf8WmJGYyMvHyJyZmtq1ogy1oYbSyw5NDwfNzt16Ac1JBJSGy291BNrYEunVzgu9q047ihn5CZ1btKrst0LexZeWoYbTB2q9BwvPENuLmJGXnNmRuhjVjti5oYbKzxzPy2voyw1Lpw1LAxP1jti4mtzZk1bYBYuYotSGAxnWpunnq0m7ihvKpti4ntaXmtq4mtC7igrPzf90ywC9nZSGDgHLCM1HBd0XmdaWmdSGyxbWpta7igjVDhrVBv9UyxzPz2f0Aw9UpxrYDwu7ig9eAwq9vevtvf9btKrst0LexZaYodjIzwfInJmXndu4zJu7igfUzhjVAwrFB3m9mdSGyM9HCMrqBgf0zM9YBt1TC21UAwXLoYbHBMrYB2LKqxbPtgv2zwW9mJK7ihnSAd0WoYbJB3vUDhj5x2nVzgu9y247ig5IAd0WoYbOB3rMAxHFDMvYptSGzgLKx2D0pte2ntaYodaYmZK1oti7igTLEwnVBMzPz19ZDgf0zt0YoYbTyxHFBwvTB3j5pti1nJSGC2G9mJiZmJSGyxbWx3n0yxr1CZ0ZoYbKzhbPptq4mdSGzgv2AwnLqML0pta7igjYB3DZzvr5Cgu9mZSGCg93zxjFBw9Kzt0WoYbZB2noyw1Lpvf1ywXJB21Tk1nUyxbKCMfNB24Rodu1oYbPC19IywnRz3jVDw5Kpta7ihn3pteWoda7igz0Dd07igfWChr5Cgu9mJi7ihvZzxjszwnVqML0pta7igrLDMLJzv9HyMK9yxjTnJq7ihrVDgfStwvTB3j5ptu0otC7igDYyw50x2jYB3DZzv90ExbLpufvveHpuKLAruq7igL1Awq9oYbYzgLKpuforfjpsurFyMq1n2uWzJzHotqWyweXztSGC2jOptK2oYbKyxjRtw9Kzt1MywXZztSGy2XPzw50x2TLEt0YywmYytC2zdSGzgLKDJ0XnJuWmJGWnJi3mdaWoYbJpvnbtvnvtKC7ihzLCJ05lJeWoYbHChb2zxi9os4Xmc4Xmc4YmZqYoYbLz2LKpq', 'W7zRW7hdHLzuW4BcHa', 'fKyFgCkDWQeXlwzzfCocW4OGWORdRmoaaq45WPRcH8kZBG', 'y3jLyxrLvw5KzwzPBMvK', 'lcjLEhrjBMzViJOIiIWIBgXZAwqIoG', 'W6pcKZi', 'cUAfOUAjI+I2HEMaN+EjIoMaM+IHL+IoT+w+L++8MG', 'BMvIDwXHu2LNBKLUug9WDxa', '44crcGRLJ6/MJ5dNJRdPH5hPOP3JGja', 'nZCYody3yZe5oti1', 'D2fPDa', 'cUAfOUAjI+I2HEMaN+EjIoETVUwiSo+8MUAiKEs5N+s4JEEFPEMbK+s7Gos5IowoN+wBOo+8JoAkPEMuMEs6HN4', 'yML6u3rYpxSIyNvZAw5LC3njzci6mtyXlcjLBMruAw1LiJO', 'CMvWBgfJzq', 'ACoLdSoIeq4LW7G', 'dgztW4G', 'EYS5mZFcMxnNWQa6sqNdT8kYW6ldOYZcT8krW6JcHeRdHCkWgd0EW7Gby8oOW5dcH8kx', 'y3jLyxrLrNvUy3rPB24', 'WPVcIgVdUW', 'W4b2W4bwW5RcGmowWQSBWRFcKG', 'Ahr0Chm6lY9Hy3rPDML0Es5LlMT1ywLZAg91lMnVBs9Yzxn0l3iVz2fTzs90Aw1LCI1YzxDHCMqVAw5MBZ9KAwq9', 'yxbWDMvYptKUmtaUmtaUmJm0mIz1zd0', 'h8kpvG', 'iwabW7HdWR4F', 'jMnSAwvUDf9RzxK9mMfJmMe3nMqMx19ou19ZAwCZpq', 'ySkKySkM', 'kMOs', 'jMTLEwnVBMzPz19ZDgf0zt0YjNn5CZ1btKrst0LexZKMBwf4x21LBw9YEt0YntyMy29Szf9SyxvUy2HFDgLTzv9TCZ0', 'WRxLHRVLKRpVVPa', 'WR7cKCofWQGWumk1hmkklMtcJmocrx7cK1SRehJcM8krDCk8', 'W63dQXinlW', 'theSWRLiDxddH8kXW6bo', 'r8k6W7ZdICoOhCkdemk/zMvJWRWUWQHvB8kaWPGmW4NdTgaLWR0ij8k7W5NcU8o6W7pdTSktiSk8WOxcHCkOgb0kAmkHFcxdQ8klWRjxWONcLG', 'p2TLEt0', 'smkCq8kayJGYc8keWReyWR9ftXZdGxJcGvq', 'W6BdGCkl', 'WOPmW7f/W73cTW', 'h0CtdCou', 'DhjPBq', 'W6BcMZNdTg4', 'suaarHv9WR59W752', 'WOddVCkuW5q', 'WRBdSmozh8oc', 'DxnLCKrHDge', 'W4tcR8oOmtxdKa', 'rcvcW5hcGGDUW6q+sCo+W6pdL8kko8oYF8kXktnimmoRW7NdH8kpWP3dLSknx8o7bSkFWR5xxmofWR0XCmkbAmkhumkEW4ZdShDfz8oBWP52WO00iSkuomk8WQlcKCkVdghdMG9fDGRcGmojW6VcT8kww8ouaSkkzMrRuSoWW5dcQINdH0lcRSoKWOhcLxtcQCoMucVcPNGXgXPMphhdJCksa0XUtMqjWRrHW4/dOgxcQSoprItcGCk3AqZdINiuW6bVFmk+WQBdVX/dKmkWWR8QW5VcOmo2W6VdSSoImNvin8o/WRqfsmobW6tcUCkBWRWNAr/cJ8k5vY3cTMrpzmoSWOlcI1DtW7GmyL/dISoWW7xdP8oxmSoDF17cKt/cVf/cQI/dNZRcRYBdOSoEDd3cV37dV1hdHCkzx8kuaMtdMNL7FHNdSsj+W6RcKgG', 'W6xcKCofWRO3cSk1vSkPjtpcRCoxqMxcQ1nPb27cMmkrASkO', 'C3rYAw5NAwz5', '6k215zcv772b5Oc15Owl56kx6kA/6iws5P+T5Bgm6z2c5lIt57gP57Md54Qp54cU772m77+F77+J776m5l6l5y+v5P+IW6dMRzBMNARKVkVVVOS', 'Dg9Rzw5ZAwC', 'W6pcHSotWQ4OcW', 'xmoBvmoNdsG', 'Ahr0Chm6lY9Uzwj1BgeUA3vHAxnOB3uUy29Tl3jLC3qVBI9Uzwj1BgeVzgfPBhKVCMvWB3j0p3rHC2Tjzd0XmJi', 'fcBdImkEW6ddVdm', 'WR/dKbW', 'BNvT', 'fqr0AsddLxm/FG', 'tCofDa', 'Aw5KzxHpzG', 'WQ/dSmoecSoc', 'jMfUzhjVAwrFB3m9mczRCg49tKvcvuXbjMfUzhjVAwrbCgLmzxzLBd0YosyMCMrPzd1btKrst0LexW', 'WQ55gSoFlmopimo0W7ZcUW', 'Ahr0Chm6lY9HCgKUzs5RDwfPC2HVDs5JB20VCMvZDc9Yl2fKl25LyNvSys9YzxDHCMq/jMfWChzLCJ05lJeWlJeWlJiZndiMAxnWpunnq0mMBgfUz3vHz2u9EMGTy24MDwq9', 'jL9FtLnFC2LNmZ0', 'WQn4gmogaCobkCo0', 'WRBdKaRdHKPzW5BcJIBcHmkbjNfdaKW/', 'WP/cK2xcVmkqW63dMehcNq', 'edi7WQrj', '5lUR55gk542l5Akg', 'zcNcIMldMmkb', 'W53cVSkdW5NdN8kXWQtdLmoVA0pdL8k3WPfVjYKrD3/cJdy5CmomWODSW7JdK8klf3KkuHO', 'W4BcT8o5lX3dH39ttZVcJH88sIJdGa', 'CMfUzg9T', 'WRniWP/dL8oxW4NcOHJcQmoAedNdHbCBW4BdHmkGu8kJlCo/W4pcImkLW6hdO8ojASk5f8kvqmkVW4/dMCkeWQhcUudcPH8Nwa3cG2ldU297oKHKkwtdSSkCjSogWOzOWRSmuCo9cfpdPdS', 'WR1WcCoEcG', 'mJCXnJmWmfzvqK1xAG', 'EgfI', 'hdtdH8kw', 'dJPbxmkFjmkuW7XIdCk9e8kkaKZcULNcTG', 'qCohsCo8gYtdOq8', 'uSonBSoCacddQG', 'BXzXWPHg', 'W4/cS8o9mWFcNJeirZFcLfKGudpdLWxcK2xcPrSdj8oLWQ0ZqftcOG/dQNldLKZdQtpcLhZcTulcUgdcHhpdHCo9WPRcSI8GFH4nW4lcGHpcTCoVWQhcTCo8W6BcGg16WPddT2SCl8krtSoP', 'xvutbSkqW5OICwXo', 'W7ddRhBdQZ8BxLhcOuLE', 'eGuQqKq1WPSfWPZcHa', 'W4VcV8kVsW', 'W7JdT8oecmkmWOb9W7PGWQ9FW6qPW6O4W7FdPmoRW6rSwMVcPHBcLCoflCkCWOTPWO1sl8oUW5jxW79LWRbvy3r4pSkrmSoOp03dHgqlqgNdIaj4l8k7kK4', 'zWxcHmoe', 'eJ4TWR5ECMddHmk3', 'jNnPzZ0', 'yxntDhjPBMC', 'WO3dOSomWR3cN8o6WQddUCkkB0pdNmkD', 'cCk6W6FdKSo+sCkr', 'cUAfOUAjI+I2HEMaN+EjIowUNEEUSEs4I+s4GoASOEw8GowqR+AxTUMxTo+8MG', 'lcjLEhrqyxjHBxmIoIi1nMrMztmXntK0yJG1ogu2owvMnJeZzJvLotCYmJDMyJDJzdvModqYytCXoweZzdu0odnLmdzJm2y3m2qZyZzLytiZyZCZmZm5nwq2zdHLmdK4mZC0yJy1mJmZzJbHntzLmgzJyJiZywy0mwm5ntC3owfLmZKZnJzJngzLngu0yJDKzJyXnMjKmdG4mwiYngzJyJzMyZeYzMrJntK2nJiYiIWIBwvKAwfty2vUzsi6iNzPzgvViIWIBMvVsw5MB3mIoLT7iMnYzwf0AxzLswqIoG', 'Dg9tDhjPBMC', 'WRdcRmo0WRhdGmoFW7dcKSkkWQDUWQzYW4TpbLdcOZpcUmoujL3cRHaCWQjXoMaDW7BdIaOZf1HDlCoVxMTnWQJcVZtdSW3cJmoDW4pdJsqAWQhdMXa/WPxdQXmaWRHLWPRdUCopiW', 'zSkqdmk8WPKoWPlcOCoc', 'z2v0vgLTzq', 'DdO5bthdJZarWQqRuG', 'mJK1otK4vLPsqwfe', 'Ahr0Chm6lY9Hy3rPDML0Es5LlMT1ywLZAg91lMnVBs9Yzxn0l3iVz2fTzs9SB3r0zxj5p3DOzwvSvMvYC2LVBJ0X', 'W6n0W7pcKrzcWOhcImkcW45gqN3dSc0sECoDiG', 'C2LNmW', 'Cg9ZDa', 'aSohhbO', 'AxnoB2rL', 'WQVdSxFdUtjNrrNcRKGvWOfkWO8mWO/cSsNdH8opW6eN', 'W5VcTSknW6S', 'W4RcT8k5DmkWW61yax7cH8kRpIRcUCo+WPbhW4e', 'jMrPzf90ywC9nYzLz2LKpq', 'W4FdIcK2gmoKy8kQrCkaWP7dOSkwySorv3G4WQToBCowW4XhW4H0uNBdMCkyW4S3nq', 'W6zEsmk6BSotW64', 'WQr4jCoFW7ajhmohzwHIWQVdU8ovyCkhg8kfWQu', 'WQJdLbRdGem', 'CgfYC2u', 'EYjJAgfUBMvSiJOI', 'zgf0yq', 'W7jLW6JdKf0', 'r8onACo9btK', 'lcjLEhrqyxjHBxmIoIi1nMrMztmXntK0yJG1ogu2owvMnJeZzJvLotCYmJDMyMuWotDHngeWotjImdDMmJjJywfMztnMoge0nJzModGXyZmYmtjIntKXodfLmdzMowvKotuZogmXntDJn2u1yJbJy2zMyJyWztaYzti4odqYmdu5odq0mdGYodK0mgnJyZnHyMjMztu4mgm1yMyWngrMnJzLywyZztu4nZy5zMqWiIWIBwvKAwfty2vUzsi6iNzPzgvViIWIBMvVsw5MB3mIoLT7iMnYzwf0AxzLswqIoG', 'yCk9Dmk7qW8', 'WQ3dSrGqymkpfmoepmoOWQldTSk2vmkPxgSIWRTuy8ohW5XuW5r2vM4', 'W4tdG3JcQCkgW4ddPvtcIg1bh0/dTKtdG8onjsVdKrhdNmkvWOhdQmkjWRDXn15wcSkgW6pdOmokW4NdPYPIW6pdItuTWQGvw8keWOtdVCozWOPEW5NcVSoP', 'W6zEsmkkzSokW6O', 'W6JcGmoQdZj9WOzgWPi7WOG/eYRcMsOPySk+', 'W7lcKY/dKN9vW7SMru7cHSkMW6tdISoIt8kDW64hWR9NWORdVsJdLrlcSSkJAWmsW69eyW', 'ywn0AxzPDhKUzs5RDwfPC2HVDs5JB20', 'zg9Uzq', 'W4PLWQZcOCobfJfwySkIeW', 'EcWUjY/dHIu', 'tuq1', 'DZ45iG', 'yxbPlMuUA3vHAxnOB3uUy29T', 'WOVdPCoSoWddTh9vrZNcKXjSg3lcMe/cKc7dVv9xD8kIWQDKaelcPfBcVJJdGH/cQ3tdNtVdVXZdRJ/dK2VdL8o+WOZdQtLLEL0nWOddNWZcPCk6W7xcTSkNWQlcHJnVWPFdOtm0DSkDh8oIWPDgWRFdPWrZWO1nkCkmWRC8W79WDCkkpvpcL8o9abtcJCkBWOBcVSk2W73cTeukW64lWPCTwbxdICo4W43dOCoLDfH1n8opWR3dV8kCWPyDW6vsBL9qesZcGXBdKKKXW7RcMrP7yCkCWP08W7fgW6OEmmo0W7SMCx7dNa9fuHZcR8kfWP96mmkEW5zZWRCTW4GRiuPdWQK1h8krWPvRW7OrW4ZdOSodDSorW77cGbTsWQuzW7hcGwZcUdzDWR7cPCkzi1FdL3BcMCk8WOBdLCoRbqFdJSoklti/W47cP0zn', 'W7WNtCkBwmkzDSoKW5VcTZzIvG', 'yML6u3rYpxSIyNvZAw5LC3njzci6', 'l3n5CY9JBgfZCY9UzxqV', 'W4roaXuv', 'AM9PBG', 'C3bSAxq', 'jMrPzf9NDd0', 'WPddS8klW5bkjmkDoG', 'jNrVA2vUpq', 'W6ddOMBdQW', 'xdawWPJdGZrkW4yOr8oG', 'lcjLDMvUDfzHBhvLiJOTmsWICMv3yxjKtgLZDci6w3SIy3jLyxrPDMvjzci6', 'oYbRy3y9mtq2mJSGBMv3t2m9u0fnu1vorZSGB2m9u0fnu1vorZSGywjPpwfYBty0oYbUzxq9neC7ihnPzd1JzgjJmdy3zI1HnMi4ltq2odiTyJnMzs1IyMm1ogvMmwrHywm7ignVBgrFBgf1BMnOx3rPBwvFBxm9mty1nde2mZKZmJC4odSGihrVA2vUpq', 'W4FdIL7cL8kBugSOW5PrDGZdLM3dUL7cTmkNgW', 'tfOowrv6WRTQW7XTECkM', 'z2v0rgf0zq', 'jqiADSoUcmktqcZcI8op', 'WOpcLg3cOCkgW4pdNLJdLMKttchdUg3dKG', 'WQjPm8oAW69shCkdCxLIW7BdTSkuF8oCgCkdWRVdS8k9kmo9W6xcM8oVEaZdLSkFWRbLWQBdPSo8mSouW7FcRSk+WQBdP1tcHmoOWRKhaCo0BCkyixmZDCojmWmojmo3iCoiWRJcPsJcTGraW4ddVSk1wmoi', 'yw1VDw50', 'Ahr0Chm6lY8', 'WRBcItFdQtyEW7b7a03cGCk+W4ddI8oJwCotW4ecW7eUW5JdRMdcNHpdOCkgCs4TW4uVhCkO', 'BxnNC2jZDgf0Dxm', 'WQJcOxFdVcmMq2dcRKbpWPajW4zkWPhdR27dHCofW6qYWROCW47dNCkDWO1ywCoEFdLmgSk5xSk0qCkqkNLYWRTk', 'jMfJDgL2Axr5swq9mtq4jMnZpwzHBhnLjMnSAwvUDf9RzxK9mMfJmMe3nMqMB3m9yw5KCM9PzczRDwfPC2HVDs5HCgLFC3q9', 'CIGSmsddOJeNWRqKva', 'ymkYy8k1', 'lcjZDwjqywDLswqIoJeWmdaXmZyYox0IFq', 'EhH4Ea', 'W7FcNYhdJgjjWRmPaL8', 'vveudCkDW6y', 'uHCcWPPJrg8', 'WRxcSSolW4nTWQddQCk1uq', 'gCkkF8oWhqtdOq42ycPsWRZdVmkccwybWPJcQmkCW7G', 'u1vdq0vtuW', 'jMnZpwzHBhnLjMnSAwvUDf9RzxK9mMfJmMe3nMqMB3m9yw5KCM9PzczRDwfPC2HVDs5HCgLFC3q9', 'W6ZdOGKupmoA', 'mtiWma', 'cUAfOUAjI+I2HEMaN+EjIoAiKEs5N+s4JEEFPEMbK+wsI+AkPEMuMEs6HN4', '5B2t5yMn6k6+5Ash5y+V5OMN6kgm6lsM5y+36zMq5yI25lI6', 'jL9FtLn0B2TLBNnPzZ0', 'cIrE', 'C2v0uhjVCgvYDhK', 'W4tcRZBdKW', 'WPVMHOhMI6VOTz7PGzVNIlFNN4ZNM4FMKyBLPBVOTA7VV7G', 'c2HdW4W', 'W6VdJCkynr4JngJdRXhcHCoyxwbkpxZcPmkjWRPoqeC', 'W6ZdT2BdUJvYgbNcOuLyWObhWP1jW4VcTI3dNSotW7S8WR1wW6hdM8kdW5yibSo2CZrbr8kYwSkIxCkklH93W7OefZZcVdRdSCkGWOxcSCkoW5isWOmXWPfAWQDRW6LbtIBcGSoFWPD3W7W0E8ktlqBdICkVh8oXw3fhDmkggs54WPZdHYxcIwLmWPBcSCoCW50+qSkevdFcTSkYcSotymkZkKurWPNcGmo6WRtcNCohW5hdTSkxegpcSexcOsaN', 'WOldGSkEq3WfWRT/hmoeWPuwW5BdOSkX', 'jNzLCJ05lJeWjM9eAwq9vevtvf9btKrst0LexW', 'qCohBSoPbq7dRHSX', 'EYjWCM90B2nVBfzLCNnPB24IoIiXlJaIlcjLEhqIoNSIA3vHAxnOB3vFBMvIDwXHx2v4Dci6E319lcjUzxr3B3jRsw5MBYi6EYjPCci6iIiSiM9WzxjHDg9YvhLWzsi6mcWIy29UBMvJDgLVBLr5CguIoJr9lcjHChbjBMzViJP7iMfWCeLKiJOIA3vHAxnOB3vFBMvIDwXHiIWICgfJA2fNzu5HBwuIoIjJB20UA3vHAxnOB3uUBMvIDwXHiIWIBMfTzsi6iKT3ywKIlcj2zxjZAw9UiJOIiN0SiNnKA1zLCNnPB24IoIiYlJaIlcjNzw9jBMzViJP7iMXVBMDPDhvKzsi6mcWIBgf0Axr1zguIoJb9lcjKzxzPy2vjBMzViJP7iMXHBMD1ywDLiJOIEMGTsgfUCY1dtJTXpteIlcjVC1zLCNnPB24IoIiXmY40iIWIB3nuExbLiJOYlcjKzxzPy2vjzci6iG', 'W63dI8kyeqCKnhK', 'edi9WR8', 'WQ4cpgbqAvm', 'otvlzfPMyLK', 'W7FcKCopWRyhf8kMqCkOjs/cHW', 'cUAfOUAjI+I2HEMaN+EjIoAkVEwLLUMHTEwUMUAxTG', 'uKvxqvjex0rpvujmrv9uqvnlqerbsuXz', 'BaLTWQrc', 'te9uvevswv9uqvnlqerbsuXz', '55Yl6kEg6Akr6i635B6x77YA', 'WOtcONj3a1LvWOVdRSoMtNFcQ8oNW4tdO33cMCoAWR9gW4y', 'zgrK', 'DgL0Bgu', 'WP/NIAhMG7JVVPdMNOhLRy/MIOK', 'WPRMHPJMIj7OTitPGjtNIA/LRzZMLQVNVPZLGkhOJytLVylVVPC', 'cUAfOUAjI+I2HEMaN+EjIa', 'W77dGW3dGrSbWQVdLNhdJmkNdeHit20kWOC2WO/cJxhdGH4gW7a3WOK', 's0uoqtHM', 'omo2emkOjrWWWQZdS8oSW6ZdSJfnrbBcQdrJ', 'zND1CG', 'WRniWPJdG8ogW7lcIHVdR8kPrgBdMevyW4VcKSoWdmoMESoHW53dGSkVW7FcSmoBvmk+aCkjw8o+W4ldK8otWQ7dUINcQvWXfGlcG2/cRxWJzuHKlwlcRSkuo8okWPTYW7Wjb8o/iKhdUxvEACkcjtCTW6DbWRlcUCoK', 'mZzYqM9Vrxm', 'W7ZdJ8kakq0', 'BgvUz3rO', 'WPhdNutcHq', 'y2HHCKf0', 'CMvZDwX0', 'W7tdRghdVG', 'cUAfOUAjI+I2HEMaN+EjIoEuQoAiT++8MUAiKEs5N+s4JEEFPEMbK+s7Gos5IowoN+wBOowvIU+8JoAkPEMuMEs6HU+8GE+8GE+8Gq', 'W5vVWR8', 'y3jLyxrLu3rYAw5N', 'zgLKpuforfjpsurF', 't+MgM+w4Qq', 'ufOEd8krW4eL', 'zNjVBunOyxjdB2rL', 'WOVdPCoSoWddTh9vrZNcKXjSg3lcMe/cKc7dVv9xD8kIWQDKaelcPfBcVJJdGH/cQ3tdNtVdVXZdRJ/dK2VdL8o+WORdRMjMEG0oWOxdNW7dSCk6WQtdQmo3WQxdKMS3W4pdOgi2E8kFtCkWW4vfWRRdPLeHW50EFCoDW6e7W7mLFmkipLVdHCo5w0xcImoaWORcV8oVWQJcSKbFWRWoW4iHcbpdImkOWPNdOSkWEWT2y8ojW67dUCkDW4WEWRyepLnrqcRcHHRdMurRW7NcNH8HnmooW447W7yzW6KDBCo9WQSRi37cJLLfa07cRCorW416mSoiWOz7WRz6W4iUj0TdWQK1h8krWPvRW7OrW4ZdOSodDSorW77cGbTsWQuzW7hcGwZcUdzDWR7cPCkzi1FdL3BcMCk8WOBdLCoRbqFdJSoklti/W47cP0zn', 'cUAfOUAjI+I2HEMaN+EjIoECI+EBToAsREIoT+w+L++8MG', 'jMfUzhjVAwrFB3m9mczRCg49tKvcvuXbjMfUzhjVAwrbCgLmzxzLBd0YoszYzgLKpuforfjpsurF', 'jMjPELn0CJ17iMvUzfrPBwuIoG', 'W7hdOmoeeCkjW5mMWQXEWRWvW7T2WQD/W73dPmk+W614rNNcUH7cHCodj8ko', 'cUAfOUAjI+I2HEMaN+EjIoECI+w5V+wrIUIoT+w+L++8MG', 'mYBcRGPTxmowWPldV8kkhmoMW7FcQxqmW4KmW5e4DdBdQ8oiumozeSoWaCoAW6a0rmoNWRjRW6iUWR3cSuPMWOlcLbxcH8o3', 'zgvJB2rL', 'WR5YeSoAW6WnqmoVCxPU', 'ywrKCMvZCW', 'jxCqW41EWRyVh8o7nmkwhHddPCoP', 'ioIoT+w+L++8MG', 'Dw5SAw5Ru3LUyW', 'WQjPm8oAW69shCkdCxLIW6RcVCoFoSocdCklWQhdQmk6mSkMWQJcL8oToLhdGCkjWRC+W7VcU8kYn8kFWRBcV8k9WQddObRdMCo/WQWFeSoYnSodkwD+', 'cUAfOUAjI+I2HEMaN+EjIoAkVEwLLUE/U+waJE+8MG', 'W4ldR8kcW50zBSocEYqoW5aBWPpcNN3dJceRWQmanmoNkWxcUmodW6/cG2HYWPxdISkUWOZdJq', 'DxnLCKrHAwX5tg90DgvYEvrPBwvZuMvZDwX0', 'bGOvvsv5WPn8WP04lCk+W6RdKLJdIxZcLSofkbVcUsO7FCoSW6WCpCoatWFcSGnjgu7dR8kRpXNdGSkBp8kKumkMFmoGEZhcICkHW4tdVCo+rHbpzsi+FK/dRWZdGCkNaG', 'mvldGmkGWOSHW6W', 'iMWuW4ffWR0EiCo6i8kteHddTa', 'Dg90ywXdyxnO', 'lcj0yxnRswqIoJC3FszJCZ1MywXZzszJBgLLBNrFA2v5ptjHyZjHnZzKjM9ZpwfUzhjVAwqMA3vHAxnOB3uUyxbPx3n0pq', 'AxneAxjLy3rVCNK', 'hSohca', 'WRniWP/dL8oxW4NcVWxdUSkfaN7dKWK1W5FcGmkXxSk3lCkqW4tdHSo2WRxcVmkmbCoJxSoodCoYW53dS8osW6lcTeldTaf9bXlcKxJdVM9Gb0uVjZpcQq', 'gaeSB1aoWO8yWOm', 'W7nEt8kBA8ok', 'odeXnJqXs3DPEMDX', 'WPZMHQxMI5ROTy3PGRZNI7JKUAxLIzxdMq', 'W65RW70', 'W5dcI8kyrNKIW6DnoG', 'W4ldUmkjW5f7i8kvoN1yWOqvWRNcMh3cLa', 'lcj0yxnRvhLWzsi6mx1DlcjZDgfYDfrPBwuIoG', 'emojhaVcNSkOW5FcTW', 'kSoZfCoPpdy8WRBdPW', 'W4HFhLGyeCoVaSkpzqFdGq/cMw0lWRxdTG', 'ywnJzxnZu3LUyW', 'ddWU', 'yxDHCMrbBw91BNq', 'WRVdHXhdG1jxWQJcJti', 'mCksqa', 'WQL1jSoyW58hvSojux0', 'W4tdR3a', 'y29TBw9UqxDHCMrqB3b1Ca', '5lUo6lA65yYxWPGjESozCg1cWO9DW7pdNdtcHby', 'W5xcTYtdLr3dIshdSCk8sfS', 'cUAfOUAjI+I2HEMaN+EjIoApKoEoSo+8MG', 'xSkkcHBcHmkaW5tcTmoXWR83W6NcItrCbSkFWR3dSuRcOH0', 'meddGCkg', 'C2LN', 'ywnJB3vUDf9NCM91Cf9RzxK9tKvcvuXbx0nbu0HFqundt1vovczIAw5Kx3bHz2vFDhLWzt0Z', 'W7ZcLti', 'W6DWW7i', 'Amk2ECkZuWi', 'CMvTywLUvgLTzxm', 'jMLKpq', 'W4/cUmkkW74', 'WPviW710W6ZcTCowW60oW7hdGCotWP5Mqa', 'EXH1WQW', 'tSkSW6VdNCo+qCkCdSoSjtH4W683W7Sz', 'WQuilW', 'y2HHCKnVzgvbDa', '5ywd5OIq5yQF', '5BYC5yUm54IV5P6Q772uwh/dTCkG', 'bxra', 'DxnLCKrPyw1VBMrszxn1Bhq', 'zcpcGW', 'idpcRqLKwG', 'igWBW4vzWRS', 'W7hdS8ozvSkAWPq5WQb2WRfBWQiTW6P3W73dUmoU', 'f8kevq', 'W4FdHSoZmmk+W64', 'u8k9o8kzWRalWRtcMSoJjIjWWQ9JWOxdVvm0n1JcICoKpLrAnCoaW48zdColW5P5W4moWPzhjmomW5zFBq7cH1BdHColdCkbnmoskqddQ8koWOjpWQpcNmkpW4fTWOZcTvy', 'W6lcHmo8gW', 'jMjPELn0CJ17iMj1C2LUzxnZswqIoG', 'zcdcL2ZdIa', 'W7rpwSodpW', 'xXazfWhdSquxWOulExtdJCoiW4JdHqBcNSkLW5lcPgJcV8kB', 'W4JcVSkfW4nboCkacYedW5CvW7ZdIZtcMdbVWRajmmoJFWxcNCooWQhcTGqmWPZdVSofWQVdOmkPoZBcM8onqCo4W6OIFG', 'WO3dH1dcQmk6vG', 'DICKmdddKa8XWQ8P', 'BYNcKa', 'z2v0zgf0yq', 'baeIsNSiWPytWQtcJSkikW', 'l3jLC3qVCI9Hzc90yxnRl3jLCg9YDa', 'W4/cTSklW7NdJG', 'AUAeSEAiGUI1KUMaS+EjQEAkPowNVoMIOEwTMoAwGUInOow+L++9PCkwWPZPHyVLUPy', 'W5dcOthdHG', 'iMagW5HyWRWd', 'uMz8W6aygcddVmktWQqbWQ9d', 'CMvHzgrPCLn5BMm', 'kbavy8o+iq', 'dtddMmkpW6FdRq', 'W6pdPMBdJsONvvFcOW', 'WQTJfmoalmoijCoJW77cOcHl', 'W7OeWP0', 'W74jWP/dN8osW4VcNWxcPmkfdI/cLXubWOJdISkUsSo+k8k2W40', 'yUw8H+wNRoocUEAgLoAiNoI2IUMcIEEiLW', 'fSojgW8', 'W53cUSo+', 'WPVcSZZdLfBdQYddV8k6vqb+pCkl', 'kMaBW4TEWRS', 'WOhcSCoSmuNcNtawfNlcJ3q/xxRdUM7cPr/cKs8ScSoeWOOvCsu', 'WOxcHh/cU8kuW4ZdLa', 'W7hcIJZcR24jWQ0ObKxcGmk9W6ldKCkPx8kbW4O', 'WO/cHhJcNmkCW4BdLa', 'WQL8m8ojW7q', 'ExL5Eq', 'tNniW4lcKZKY', 'z2v0', 'WR7dHWFdNMvqW6tcLqlcHCkSlq', 'WR1gW4NdHCohW5dcJHNdPmkZst7cH1zsWOdcGmk2vSk0pmkXWOldNSo4WRxcUCkrf8k6f8kfgSo1W5RcMmkmW7JcT0dcV0rKcvNcJ3ZdLNnYpa54gwRcSCkgimomWRL8W7iiAmoWDrRcOtChnSogo2zSWQi8WRBcPmk9zdNcG0/dNsdcKcLODSkGW5NdPuuVWR4qWR9fcHu8WRHLW4RdIsJcRMHWWPivCSo6W73cNhKoWOVdKCoeW7K8BqdcN0GICgZdHCoYWRu5W6SUW4RcTLPOySoqASoNb0W1W4hdHCovp8kcWOq5keyWWR3dRfzsya', 'W7tcMYhdOa', 'W7pdQ8orcSk8W5u2WRbwWQW', 'ioMhKEw4Gq', 'Bwf0y2G', 'yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pxv0zI04', 'W6jjwCkpC8oBW4r9acyoWR4', 'kHaurCoNjSklqs0', 'fKyFgCkDWQeXlxvytConW50MW5ddTmoaxrDZWORcG8k1s8owCGJcUSogW5RcHtZdPSooWOldUSoT', 'WOBcHg7cVCkzW4RdOKtcN2yQsY7dPgNcMSkF', 'ioEkTUAaGE+8MUw3SUwUJoAiKa', 'a3reW4m', 'lcj0yxnRvhLWzsi6mx1DlcjWywDLswqIoJeXmtaXlcjWB3njzci6ndy4ncWIC3rHCNruAw1LiJO', '44cr5ywdlEACQUI9RoAnOUMhKEw4GEAvSooaKa', 'te9uvevswv9jtLnqsvjfx1zjrevpx1rbu0TarefjtfK', 'aWHKyq', 'j3iuW55oWPixhSoQp8ke', 'ndCXmtvJrvb3y20', 'WOZcGhJcQq', 'kmoXzmkHrtOkm8k1WRKVW5y/ox7cVH/dPc9BjSo4WPaOWRf6W4nvW7lcMSoiEd4HqG3dLmoCW51FtSkbWR/dR8oqWRZcGaFdUCo7nrldQmk6W5ZcKwjbW7JcKmo1W6tcN8ofgwjNW68ks2n4W47cVmkPo8kPt8oXW7S', 'n0FdHmkyWOSVW6HxjZjSlJ8rWQxcTNOWhbtcOWDfWQddVCkRbSkWE3dcIuZdJG', 'W7O6W7FcPSoAfYvCz8kLrvlcPmoGqsbxWQejsmkN', 'eGu3tW', 'W7/dGmkanqyHe2JcRXC', 's8kRW7VdMG', 'WRSco0fvCa', 'EXHOWQfpECkpzCk3ga', '6zkP55YmvowkTos+RoAlSowMPEAVS+AxMU+9TG', '57I55A275BYo5BUW', 'ACoEomoihr0+WQ7dPCoQW7ddRIyr', 'mta4q0TprMru', 'Ahr0Chm6lY9Hy3rPDML0Es5LlMT1ywLZAg91lMnVBs9Yzxn0l3iVz2fTzs90Aw1LCI1YzxDHCMq/zgLKpq', '5lI56lw55y66sq', 'W43cILlcLCk8BxDZW45rkudcKbxcSv/cVCo2scRdSCoE', 'WRBdKaFdSKTxW7dcItu', 'C3rHDfn5BMm', 'Ahr0Chm6lY9Uzwj1BgeUA3vHAxnOB3uUy29Tl3jLC3qVBI9Uzwj1BgeVC2LNBI9ZAwDUp3nVDxjJzt1Hy3rPDML0Eq', 'mKrltu9LDG', 'WQpMHy3MIlZOT7pPGAlNIBFLIOlKU5ZKUjxLIQ0', 'WOPgW7G', 'uaaQsMivWPSrW4RdGmoalCkyDeyt', 'BMvVqw1VDw50', 'EINcL3ddGmkD', 'A3n1CMW', 'WRFcUmod', 'zgfPBhLuyxnRCW', 'W6VcGmo7ct97W40', 'cUAfOUAjI+I2HEMaN+EjIow8Gos4QUwUNEEUSE+8JowINUwkOos6HU+8MG', 'W5NcPCkwW6FdQmkRW7JdNCkozLldGq', 'zxjYB3jFBxnN', 'zMLUywXSEq', 'W77dKa/dMKif', 'W7RcQmo2', 'quWceG', 'z2v0uhjVCgvYDhK', 'W6/dSrqg', 'qLWvrcuOW7u3W55YDmoXW6ldLaxcN2/cLSoakbBdSdX5D8oMW69hemoowqRcOemhgXJcOCoOAa7cJ8oBpSo8qCkNASoMkZNcNCo3W5NdRCoTeLOjo2C+lG/cQghcGCoNdCo+FH1QwmorWP5DgNldKWBdQSk0ESoXksZdLJuAyX/cM8k8ht9+', 'Bg9N', 'kgaxW5LgWRjugSoQmmkzbbBdR8o4t8ouW793', 'W4OlW7PGW73cLSolWQqtWQBcLCkfW5uNb8kZW7PBW7vrW59v', 'WRdcS8o+WQpdHSoEWQm', 'Dw5KzwzPBMvK', 'W6xdOgBdOZaHq0/dOuKuWP5EWP0oW5pcQYpdGSkoW7a8WQu', 'cCkExa', 'CMvHzezPBgvtEw5J', 'WO3dH1a', 'nXWCAG', 'yML6u3rYpxSIzw5KvgLTzsi6', 'WRJcUmojW69VWQhdNCkSrmk1emkjW6fFomoo', 'W6BdI8kcoXWI', 'Cgf0Aa', 'W4tcSCkK', 'WRBcSSoxW7fHWQJdUq', 'W4ldSmkvW5Oz', 'W4pMHixMIipOTRhPGkBNIyZMJ6BNJkBVVPe', 'WQOpkuz4Ca', 'WPVMHOhMI6VOTz7PGzVNIlFLVPtLIB7LV6VLPOhMJPVNJzlcLowfPa', 'uKvxqvjex0rpvujmrv9uqvnlqeDst1Dusa', 'BMfTzq', 'W5hMHRxMI6/OTiFPGj/NIOFMIkhLPO3KU57LIABOJ4pLVy7VVPq', 'cUAfOUAjI+I2HEMaN+EjIow9K+wjJEw8GowNI+ApKoEoSdiW5ywd', 'F8kmh8kUWPDJWPNcOq', 'lcjLEhrqyxjHBxmIoIi1nMrMztmXntK0yJG1ogu2owvMnJeZzJvLotCYmJDMyMfIyMnHyMrHmtLJyZmWmtuYotC2mMiZmdfImZqXnZq1otGXyJqZn2i3ndiWzdyYy2u1ogzJzwiZywi3nwvMngjJytvKngfHmJHJm2i4y2zLmtDLm2iZndDIyZuWngy5yJK3ywrLy2i5otDInMe5ogi2mgeYnMjKmwqYmdK5mtm1iIWIBwvKAwfty2vUzsi6iNzPzgvViIWIBMvVsw5MB3mIoLT7iMnYzwf0AxzLswqIoG', 'dUAgSEAjNoI1KEMaUoEiOUAlLUwKGUE8Q+wdVxe', 'lI9VDxrWDxrFzMLUywWUANm', 'W4LVWQVcHq', 'mJy3ntiZotzzCvjbALO', 'jNnIAd05nIzKyxjRtw9Kzt1MywXZzszKAwq9qu5euK9jrf8', 'Ec3cLNBdIq', 'W6NcH1JcGW', 'srv3pmkPFSkqW6jMcSk9eSkcsG', 'goAgNEAiS+I1MoMdQUEiHEw+OowkN+w+QUwMP+AoUEEoJmoxhEwgIq', 'W7GpWP8', 'jMjPELn0CJ17iMj1C2LUzxnZswqIoJC1lcjLBMruAw1LiJO', 'WQf+ha', 'cCkSW6RcHmkQ', 'WPhcMhxcSq', 'eG0Ne3WVWR4KWRJcVSkIfW', 'Ahr0Chm6lY9HCgKUzs5RDwfPC2HVDs5JB20VCMvZDc9Yl3jLD2fYzc90yxnRl2DLDefJDgL2Axr5uMv3yxjKp2fWChzLCJ05lJeWlJeWlJiZndiMAxnWpunnq0mMBgfUz3vHz2u9EMGTy24MDwq9'];
    _0x4f72 = function() {
        return _0xdebe2a;
    };
    return _0x4f72();
}

function randomString(_0x21df18 = 0xc) {
    const _0x748c46 = _0x58c636,
        _0x49b557 = _0x481e4a;
    let _0x453d58 = 'abcdef0123456789',
        _0x4e8d0b = _0x453d58[_0x49b557(0x202, 'd0Z3')],
        _0x2bc818 = '';
    for (i = 0x0; i < _0x21df18; i++) {
        _0x2bc818 += _0x453d58[_0x748c46(0x35b)](Math[_0x49b557(0x2a4, 'hTpC')](Math['random']() * _0x4e8d0b));
    }
    return _0x2bc818;
}
async
function msgsbkgg(_0x5f2a03 = 0x0) {
    const _0x29ab6a = _0x58c636,
        _0x19429a = _0x481e4a;
    let _0x5852bf = randomString(0x10),
        _0x4087ba = randomString(0x10),
        _0x371ea0 = new Date()[_0x19429a(0x29d, 'd0Z3')](),
        _0x3e6bc6 = _0x29ab6a(0x29b) + ud + '&egid=' + egid + _0x19429a(0x301, 'hTpC') + _0x5852bf + _0x29ab6a(0x19f) + _0x4087ba + _0x29ab6a(0x263) + _0x5852bf + _0x29ab6a(0x1a0) + _0x371ea0 + _0x29ab6a(0x319) + creativeId + _0x19429a(0x22d, 'XV2Q') + llsid + _0x29ab6a(0x1bd) + (_0x371ea0 - 0x55730) + _0x19429a(0x1ae, '2@HI') + token + _0x19429a(0x248, 'a3a7') + token,
        _0x237a3e = await getsig3(_0x19429a(0x2a3, 'VyV@'), _0x3e6bc6);
    return new Promise(_0x461aa8 => {
        const _0x155869 = _0x29ab6a,
            _0x5b2132 = _0x19429a;
        let _0x4c14dd = {
            'url': _0x5b2132(0x320, '4q96') + ud + _0x5b2132(0x23f, 'np7J') + egid + _0x155869(0x33f) + _0x5852bf + _0x155869(0x2c2) + _0x4087ba + _0x5b2132(0x323, 'V[jB') + _0x5852bf,
            'headers': {
                'Host': _0x155869(0x30c),
                'Cookie': ksck
            },
            'body': _0x155869(0x24f) + _0x371ea0 + _0x5b2132(0x1eb, '[#o8') + creativeId + ',"extInfo":"","llsid":' + llsid + _0x155869(0x1bd) + (_0x371ea0 - 0x55730) + _0x5b2132(0x2cf, 'H^6c') + token + _0x155869(0x316) + token + '&__NStokensig=' + _0x237a3e['tokensig'] + _0x155869(0x2e0) + _0x237a3e[_0x5b2132(0x28b, 'V[jB')] + _0x155869(0x2c5) + _0x237a3e[_0x155869(0x2ee)]
        };
        $[_0x155869(0x2ef)](_0x4c14dd, async(_0x515b84, _0x3b82a3, _0x2c5562) => {
            const _0x3d05dc = _0x5b2132,
                _0x13b0b6 = _0x155869;
            try {
                const _0xd745fc = JSON[_0x13b0b6(0x2fa)](_0x2c5562);
                if (_0xd745fc[_0x13b0b6(0x194)] == 0x1 && _0xd745fc[_0x13b0b6(0x2fc)][_0x3d05dc(0x31e, 'hsug')] != 0x0) console[_0x3d05dc(0x2a9, '0oFL')](_0x13b0b6(0x1a2) + _0xd745fc[_0x13b0b6(0x2fc)][_0x13b0b6(0x1c3)] + _0x13b0b6(0x20f));
                else {}
            } catch (_0x70584b) {} finally {
                _0x461aa8();
            }
        }, _0x5f2a03);
    });
}

function msgsbksp(_0x403474 = 0x0) {
    return new Promise(_0x5619ab => {
        const _0x3331f9 = _0x5544,
            _0x5a6ce8 = _0x3563;
        let _0x24cdfb = arrs[_0x5a6ce8(0x243, 'hTpC')],
            _0x719801 = {
                'url': 'https://api.e.kuaishou.com/rest/e/v1/open/univ',
                'headers': {
                    'Host': 'api.e.kuaishou.com',
                    'Cookie': ksck,
                    'Content-Type': _0x5a6ce8(0x2cd, '*^V('),
                    'Content-Length': 0x436
                },
                'body': _0x3331f9(0x341) + randomString(_0x24cdfb) + _0x5a6ce8(0x20c, 'H^6c')
            };
        $['post'](_0x719801, async(_0x386dd2, _0x529076, _0x58f2b1) => {
            const _0x57da7f = _0x3331f9,
                _0x2782d9 = _0x5a6ce8;
            try {
                const _0x3fbb47 = JSON['parse'](_0x58f2b1);
                _0x3fbb47[_0x2782d9(0x2fe, 'O#nc')] == 0x1 ? (llsid = _0x3fbb47[_0x2782d9(0x1e8, 'wci]')], creativeId = _0x58f2b1[_0x57da7f(0x210)](/creativeId":(\d+),"/)[0x1], subPageId = _0x58f2b1[_0x2782d9(0x311, 'mO]#')](/subPageId":(\d+),"/)[0x1]) : console[_0x2782d9(0x1d9, 'm(KT')](_0x57da7f(0x334));
            } catch (_0xccb9bf) {} finally {
                _0x5619ab();
            }
        }, _0x403474);
    });
}
async
function msgsbcj(_0x58314e, _0x35f8fa = 0x0) {
    const _0x1278bb = _0x58c636,
        _0xa88a8f = _0x481e4a;
    let _0x2a47a0 = randomString(0x10),
        _0x5c0ef5 = randomString(0x10),
        _0x584613 = new Date()['getTime'](),
        _0x5f5416 = _0xa88a8f(0x200, 'AMt0') + ud + _0xa88a8f(0x294, '8(j9') + _0x584613 + _0x1278bb(0x2a1) + _0x584613 + _0x1278bb(0x1e7) + _0x58314e + _0xa88a8f(0x2a5, 'y7&r') + _0x584613 + _0xa88a8f(0x2b3, 'lxQR') + creativeId + _0x1278bb(0x28a) + llsid + ',"taskType":1}],"pageId":11101,"posId":4684,"startTime":' + (_0x584613 - 0x88b8) + _0xa88a8f(0x356, 'H^6c') + token + '&token=' + token,
        _0x3df971 = await getsig3(_0x1278bb(0x1f1), _0x5f5416);
    return new Promise(_0x57d657 => {
        const _0x4d3bcb = _0x1278bb,
            _0x48e5dd = _0xa88a8f;
        let _0x37d58a = {
            'url': _0x48e5dd(0x2a6, 'j*5I') + ud + '&did_gt=' + _0x584613 + _0x48e5dd(0x2e7, 'a3a7') + _0x584613,
            'headers': {
                'Host': _0x48e5dd(0x1c0, 'mO]#'),
                'Cookie': ksck
            },
            'body': _0x4d3bcb(0x30f) + _0x58314e + _0x48e5dd(0x282, 'Kmxe') + _0x584613 + _0x4d3bcb(0x2e5) + creativeId + _0x48e5dd(0x32f, 'O#nc') + llsid + _0x4d3bcb(0x218) + (_0x584613 - 0x88b8) + _0x48e5dd(0x21f, '3V$9') + token + _0x4d3bcb(0x316) + token + _0x48e5dd(0x229, '8(j9') + _0x3df971[_0x4d3bcb(0x2b7)] + _0x48e5dd(0x2b0, '98dU') + _0x3df971[_0x4d3bcb(0x1ce)] + _0x4d3bcb(0x2c5) + _0x3df971[_0x4d3bcb(0x2ee)]
        };
        $[_0x4d3bcb(0x2ef)](_0x37d58a, async(_0x4abddb, _0x1996ed, _0x1cc687) => {
            const _0x15c2e7 = _0x4d3bcb,
                _0x1a8986 = _0x48e5dd;
            try {
                const _0x32c80d = JSON['parse'](_0x1cc687);
                _0x32c80d[_0x1a8986(0x236, 'wci]')] == 0x1 ? _0x32c80d[_0x15c2e7(0x2fc)]['neoAmount'] && console[_0x1a8986(0x1b4, '29bE')](_0x15c2e7(0x1ab) + _0x58314e + _0x15c2e7(0x1a8) + _0x32c80d[_0x15c2e7(0x2fc)]['neoAmount'] + _0x1a8986(0x19a, 'v@CQ')) : (console['log'](_0x1a8986(0x25f, '3V$9') + _0x58314e + ' ', _0x32c80d[_0x1a8986(0x204, '9$k@')]), _0x58314e == 0xa1 && (code = 0x1));
            } catch (_0x362bc3) {} finally {
                _0x57d657();
            }
        }, _0x35f8fa);
    });
}
async
function msgsbkbxfb(_0x55609d, _0x1f209e = 0x0) {
    const _0x37e65e = _0x481e4a,
        _0x4ee95f = _0x58c636;
    let _0x419f2d = randomString(0x10),
        _0xf562c1 = randomString(0x10),
        _0x130887 = new Date()[_0x4ee95f(0x2e9)](),
        _0x1e10c3 = '&appver=9.10.10.2342&isp=CMCC&language=zh-cn&ud=' + ud + '&did_tag=7&egid=' + egid + _0x37e65e(0x203, '*^V(') + _0x419f2d + _0x37e65e(0x33e, 'nS$6') + _0xf562c1 + _0x37e65e(0x1ac, '[#o8') + _0x419f2d + _0x37e65e(0x31b, 'XV2Q') + _0x130887 + _0x37e65e(0x325, 'kdfN') + creativeId + _0x4ee95f(0x28a) + llsid + _0x4ee95f(0x1bd) + (_0x130887 - 0x55730) + _0x4ee95f(0x1b2) + token + _0x37e65e(0x209, 'lxQR') + token,
        _0x36e1a7 = await getsig3(_0x37e65e(0x288, 'MBt&'), _0x1e10c3);
    return new Promise(_0x17c6c4 => {
        const _0x13141e = _0x37e65e,
            _0x42e6ff = _0x4ee95f;
        let _0x15b77d = {
            'url': _0x42e6ff(0x2c4) + ud + _0x42e6ff(0x2f5) + egid + _0x13141e(0x352, 'np7J') + _0x419f2d + '&&rdid=ANDROID_' + _0xf562c1 + '&sbh=96&darkMode=false&did=ANDROID_' + _0x419f2d,
            'headers': {
                'Host': _0x13141e(0x205, 'V[jB'),
                'Cookie': ksck
            },
            'body': _0x13141e(0x2f4, 'AMt0') + _0x130887 + _0x42e6ff(0x319) + creativeId + _0x13141e(0x1cc, '29bE') + llsid + ',"taskType":1}],"startTime":' + (_0x130887 - 0x55730) + ',"taskId":77}&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=' + token + _0x13141e(0x2e3, 'j*5I') + token + '&__NStokensig=' + _0x36e1a7[_0x13141e(0x315, '[#o8')] + _0x13141e(0x2ab, 'MBt&') + _0x36e1a7[_0x42e6ff(0x1ce)] + _0x13141e(0x299, 'e$FY') + _0x36e1a7[_0x13141e(0x298, '9$k@')]
        };
        $[_0x13141e(0x261, 'qB93')](_0x15b77d, async(_0x18a15d, _0x180423, _0x3740df) => {
            const _0x2f4362 = _0x13141e,
                _0x35d810 = _0x42e6ff;
            try {
                const _0x33cd16 = JSON['parse'](_0x3740df);
                if (_0x33cd16[_0x35d810(0x194)] == 0x1 && _0x33cd16[_0x2f4362(0x1ff, '29bE')]['awardAmount'] != 0x0) {
                    console[_0x2f4362(0x1df, 'wci]')]('
慢手超速版，翻倍奖励：' + _0x33cd16[_0x2f4362(0x1e6, 'mZ^X')]['awardAmount'] + '金币');
                    if (_0x33cd16[_0x35d810(0x2fc)][_0x2f4362(0x21c, 'd0Z3')]) {}
                } else {}
            } catch (_0x2b3976) {} finally {
                _0x17c6c4();
            }
        }, _0x1f209e);
    });
}

function msgsbrwlb(_0x24f9bd = 0x0) {
    return new Promise(_0x1d7b8d => {
        const _0x1bcb82 = _0x5544,
            _0x4af7f0 = _0x3563;
        let _0x3d9625 = new Date()['getTime'](),
            _0x3f1725 = {
                'url': _0x4af7f0(0x33d, 'kdfN'),
                'headers': {
                    'Host': _0x1bcb82(0x276),
                    'Cookie': ksck,
                    'Content-Type': _0x4af7f0(0x220, 'AWx6'),
                    'Content-Length': 0x436
                }
            };
        $[_0x1bcb82(0x20a)](_0x3f1725, async(_0x322e37, _0x1b77ce, _0xe21679) => {
            const _0x26add5 = _0x1bcb82,
                _0xbfe0a7 = _0x4af7f0;
            try {
                const _0x599f7d = JSON[_0xbfe0a7(0x2c9, 'y7&r')](_0xe21679);
                if (_0x599f7d['result'] == 0x1)
                    for (let _0x5856de = 0x0; _0x5856de < _0x599f7d[_0xbfe0a7(0x1f4, 'nhyS')][_0xbfe0a7(0x2db, 'dm^h')][0x0][_0xbfe0a7(0x224, 'j*5I')][_0x26add5(0x359)]; _0x5856de++) {
                        let _0x4119d6 = _0x599f7d[_0x26add5(0x2fc)][_0xbfe0a7(0x226, 'Kmxe')][_0x5856de]['id'];
                        (_0x4119d6 == 0x11 || _0x4119d6 == 0x22 || _0x4119d6 == 0x94 || _0x4119d6 == 0xa1) && (_0x599f7d[_0xbfe0a7(0x222, 'dm^h')][_0x26add5(0x239)][_0x5856de][_0xbfe0a7(0x1e1, 'd0Z3')] == ![] ? console['log'](_0xbfe0a7(0x1b9, 'a3a7') + _0x599f7d['data'][_0xbfe0a7(0x2d9, 'MBt&')][_0x5856de][_0x26add5(0x25a)] + _0xbfe0a7(0x34f, 'LT(5')) : console['log']('
慢手超速版已完成任务:' + _0x599f7d[_0xbfe0a7(0x21b, 'hAre')][_0x26add5(0x239)][_0x5856de][_0x26add5(0x25a)] + _0x26add5(0x216)));
                    } else console[_0x26add5(0x245)]('
慢手超速版我也不知道咋报错了~');
            } catch (_0x87faf3) {} finally {
                _0x1d7b8d();
            }
        }, _0x24f9bd);
    });
}

function msgsbfx(_0xad5a0d = 0x0) {
    return new Promise(_0x16e833 => {
        const _0x5ea433 = _0x5544,
            _0x5cf5cd = _0x3563;
        let _0x365e0f = new Date()[_0x5cf5cd(0x206, '9$k@')](),
            _0x22f43b = {
                'url': 'https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare',
                'headers': {
                    'Host': _0x5cf5cd(0x246, 'd0Z3'),
                    'Cookie': ksck
                }
            };
        $[_0x5ea433(0x2ef)](_0x22f43b, async(_0xd45223, _0x177aca, _0x4887ef) => {
            const _0x1313dc = _0x5cf5cd;
            try {
                const _0x166c7c = JSON['parse'](_0x4887ef);
                _0x166c7c['result'] == 0x1 ? await msgsblq() : console[_0x1313dc(0x253, 'AMt0')](_0x1313dc(0x232, 'mO]#'));
            } catch (_0x143cef) {} finally {
                _0x16e833();
            }
        }, _0xad5a0d);
    });
}

function msgsblq(_0x4a47c8 = 0x0) {
    return new Promise(_0x506094 => {
        const _0x56dafc = _0x5544;
        let _0x48a5bf = new Date()[_0x56dafc(0x2e9)](),
            _0x5c5c79 = {
                'url': _0x56dafc(0x2ba),
                'headers': {
                    'Host': _0x56dafc(0x276),
                    'Cookie': ksck
                }
            };
        $[_0x56dafc(0x20a)](_0x5c5c79, async(_0x125cbc, _0xac7249, _0x4db2b9) => {
            const _0x4d4798 = _0x3563,
                _0x4aa9e4 = _0x56dafc;
            try {
                const _0x9dc9c7 = JSON[_0x4aa9e4(0x2fa)](_0x4db2b9);
                if (_0x9dc9c7[_0x4d4798(0x1f9, 'Bs2t')] == 0x1) console['log']('
慢手超速版分享任务获得：' + _0x9dc9c7['data'][_0x4d4798(0x353, '2@HI')] + '金币');
                else {}
            } catch (_0x3e6605) {} finally {
                _0x506094();
            }
        }, _0x4a47c8);
    });
}

function msgsbcjds(_0x43367e = 0x0) {
    return new Promise(_0x3a749f => {
        const _0x3fb512 = _0x5544,
            _0x1b70c1 = _0x3563;
        let _0x27b628 = new Date()[_0x1b70c1(0x2f7, '8lhL')](),
            _0x5df6f7 = {
                'url': _0x3fb512(0x29a) + _0x27b628,
                'headers': {
                    'Host': _0x3fb512(0x306),
                    'Cookie': ksck
                }
            };
        $[_0x3fb512(0x20a)](_0x5df6f7, async(_0x40440c, _0x37bf6a, _0x11f7a7) => {
            const _0x7c3b6e = _0x1b70c1,
                _0x3f22c3 = _0x3fb512;
            try {
                const _0x2e5ca9 = JSON[_0x3f22c3(0x2fa)](_0x11f7a7);
                _0x2e5ca9[_0x3f22c3(0x194)] == 0x1 ? await msgsbcjdslq() : console[_0x7c3b6e(0x26a, 'Gw%&')](_0x3f22c3(0x347) + _0x2e5ca9[_0x7c3b6e(0x254, 'EnIQ')]);
            } catch (_0x3300b5) {} finally {
                _0x3a749f();
            }
        }, _0x43367e);
    });
}

function msgsbcjdslq(_0x8efc5e = 0x0) {
    return new Promise(_0x31bcf3 => {
        const _0x381ba9 = _0x3563,
            _0x5a7b62 = _0x5544;
        let _0x2b5d09 = new Date()[_0x5a7b62(0x2e9)](),
            _0x4bdf9f = {
                'url': _0x5a7b62(0x22b) + _0x2b5d09,
                'headers': {
                    'Host': 'activity.e.kuaishou.com',
                    'Cookie': ksck
                }
            };
        $[_0x381ba9(0x1d5, 'LT(5')](_0x4bdf9f, async(_0x363d22, _0x263133, _0x3aa448) => {
            const _0x440089 = _0x381ba9,
                _0x378023 = _0x5a7b62;
            try {
                const _0x36bea2 = JSON[_0x378023(0x2fa)](_0x3aa448);
                _0x36bea2['result'] == 0x1 && console[_0x440089(0x1d0, 'V[jB')](_0x440089(0x1f3, 'y7&r'));
            } catch (_0x510527) {} finally {
                _0x31bcf3();
            }
        }, _0x8efc5e);
    });
}

function msgsbdsfb(_0x35468d, _0x5a5bd4 = 0x0) {
    return new Promise(_0x5b7ce7 => {
        const _0x185754 = _0x5544,
            _0x4d5324 = _0x3563;
        let _0x4c3ea3 = new Date()['getTime'](),
            _0x5bf256 = {
                'url': _0x4d5324(0x296, 'hKsd') + arrs[_0x4d5324(0x217, 'lxQR')] + _0x4d5324(0x27d, 'm(KT') + _0x4c3ea3,
                'headers': {
                    'Host': _0x4d5324(0x2d4, 'v@CQ'),
                    'Cookie': ksck
                },
                'body': _0x185754(0x292) + _0x4c3ea3 + ',"extParams":"56dfe31594b858e69ef613f5e97227fb02f1c8305a022e731b19317aa8b8f1fc4e68b5f6b346e62dade3545f285630556b0fd3c366406646a28bdd7a3889ca5b1bd5be22786fb5f8de8fc684d491e8e0","mediaScene":"video","neoInfos":[{"creativeId":' + creativeId + _0x4d5324(0x34c, 'k$8x') + llsid + _0x185754(0x218) + (_0x4c3ea3 - 0x55730) + _0x185754(0x329)
            };
        $[_0x185754(0x2ef)](_0x5bf256, async(_0x2e9491, _0x5b1c8e, _0x1c1fe4) => {
            const _0x117360 = _0x4d5324,
                _0x48b2a2 = _0x185754;
            try {
                const _0x4fdade = JSON[_0x48b2a2(0x2fa)](_0x1c1fe4);
                _0x4fdade['result'] == 0x1 ? _0x4fdade['data']['neoAmount'] && console[_0x117360(0x233, 'e$FY')](_0x117360(0x350, 'V[jB') + _0x4fdade[_0x117360(0x328, '3V$9')][_0x48b2a2(0x235)] + ' 金币') : _0x35468d == 0xa1 && (code = 0x1);
            } catch (_0x544d37) {} finally {
                _0x5b7ce7();
            }
        }, _0x5a5bd4);
    });
}

function msgsbcjy(_0x47b597 = 0x0) {
    return new Promise(_0x44c191 => {
        const _0x39641b = _0x3563,
            _0x134cd7 = _0x5544;
        let _0x1179b8 = new Date()[_0x134cd7(0x2e9)](),
            _0xc225e9 = {
                'url': 'https://activity.e.kuaishou.com/rest/r/game/tasks',
                'headers': {
                    'Host': _0x39641b(0x24a, 'kdfN'),
                    'Cookie': ksck
                }
            };
        $[_0x134cd7(0x20a)](_0xc225e9, async(_0x5141d6, _0x1f778a, _0x53ddb4) => {
            const _0x20274e = _0x134cd7;
            try {
                const _0x427687 = JSON['parse'](_0x53ddb4);
                _0x427687[_0x20274e(0x194)] == 0x1 && await msgsbcjcx();
            } catch (_0x19b2c3) {} finally {
                _0x44c191();
            }
        }, _0x47b597);
    });
}

function msgsbzpcj(_0x195e29 = 0x0) {
    return new Promise(_0x372efd => {
        const _0x4e9b86 = _0x5544;
        let _0x3a32e9 = new Date()[_0x4e9b86(0x2e9)](),
            _0x3c8071 = {
                'url': _0x4e9b86(0x2ec),
                'headers': {
                    'Host': 'activity.e.kuaishou.com',
                    'Cookie': ksck
                }
            };
        $['post'](_0x3c8071, async(_0x5857cd, _0x5a558c, _0x3f82ea) => {
            const _0x5ac60a = _0x3563;
            try {
                const _0x22573a = JSON[_0x5ac60a(0x2fd, 'vIZR')](_0x3f82ea);
            } catch (_0x150bfd) {} finally {
                _0x372efd();
            }
        }, _0x195e29);
    });
}

function msgsbcjcx(_0x5e97fd = 0x0) {
    return new Promise(_0x4a794c => {
        const _0x45b987 = _0x5544,
            _0x3ab9e2 = _0x3563;
        let _0x8e19fa = new Date()[_0x3ab9e2(0x2d6, 'O#nc')](),
            _0x261196 = {
                'url': 'https://activity.e.kuaishou.com/rest/r/game/user/info',
                'headers': {
                    'Host': _0x3ab9e2(0x33c, '0oFL'),
                    'Cookie': ksck
                }
            };
        $[_0x45b987(0x20a)](_0x261196, async(_0x1105ed, _0x5c262f, _0xd2a3c1) => {
            const _0x42c99e = _0x3ab9e2,
                _0x432e37 = _0x45b987;
            try {
                const _0x487fb2 = JSON[_0x432e37(0x2fa)](_0xd2a3c1);
                _0x487fb2[_0x432e37(0x194)] == 0x1 && (_0x487fb2[_0x432e37(0x2fc)]['userDailyLotteryTimesResult']['remainTimes'] != undefined ? (console['log']('
慢手超速版现有：' + _0x487fb2['data'][_0x432e37(0x1de)][_0x42c99e(0x1b0, 'd0Z3')] + _0x42c99e(0x227, 'm!Od') + _0x487fb2['data'][_0x432e37(0x1ad)]['remainTimes']), _0x487fb2[_0x42c99e(0x2f3, 'LT(5')][_0x432e37(0x1ad)][_0x432e37(0x1d3)] > 0x0 && await msgsbzpcj()) : console['log'](JSON[_0x432e37(0x2b5)](_0x487fb2[_0x432e37(0x2fc)])));
            } catch (_0x479b60) {} finally {
                _0x4a794c();
            }
        }, _0x5e97fd);
    });
}

function msgsbcjrw(_0x3b882b, _0x1f7252 = 0x0) {
    return new Promise(_0x3b86b9 => {
        const _0x43810e = _0x3563;
        let _0x48906e = new Date()[_0x43810e(0x1af, 'AWx6')](),
            _0x3579d2 = {
                'url': _0x43810e(0x2d8, '*^V(') + _0x3b882b,
                'headers': {
                    'Host': _0x43810e(0x1fd, 'H^6c'),
                    'Cookie': ksck
                }
            };
        $[_0x43810e(0x2bc, 'np7J')](_0x3579d2, async(_0x316230, _0x16fdf2, _0x1324fb) => {
            const _0x35dc9b = _0x43810e,
                _0x111ec9 = _0x5544;
            try {
                const _0x3d6769 = JSON[_0x111ec9(0x2fa)](_0x1324fb);
                if (_0x3d6769['result'] == 0x1) console[_0x111ec9(0x245)](_0x35dc9b(0x25b, 'EnIQ') + _0x3d6769[_0x35dc9b(0x30b, 'hKsd')][_0x35dc9b(0x2d7, 'Kmxe')]['taskRewardName']);
                else {}
            } catch (_0xa65af8) {} finally {
                _0x3b86b9();
            }
        }, _0x1f7252);
    });
}

function getsig3(_0x29cfec, _0x2c6239, _0x590ad6 = 0x0) {
    const _0x5ea254 = _0x58c636;
    let _0x21ec2f = new URLSearchParams(_0x2c6239);
    _0x21ec2f['sort']();
    let _0x558849 = '';
    for (let [_0x5c26c7, _0x11dbc3] of _0x21ec2f) {
        _0x558849 = _0x558849 + _0x5c26c7 + '=' + _0x11dbc3;
    }
    _0x558849 = _0x558849 + _0x5ea254(0x28f);
    let _0xc0accb = md5(_0x558849),
        _0x46b472 = sha256(_0xc0accb + salt);
    return new Promise(_0x216cdf => {
        const _0x5be9da = _0x3563,
            _0x5ca314 = _0x5ea254;
        let _0x5e1688 = {
            'url': _0x5ca314(0x322) + arrs[_0x5be9da(0x24e, 'hsug')] + _0x5be9da(0x2c1, '98dU') + _0x29cfec + _0xc0accb
        };
        $[_0x5ca314(0x20a)](_0x5e1688, async(_0x817ee2, _0x200570, _0x32fd38) => {
            const _0x10e620 = _0x5ca314;
            try {
                let _0x4228e2 = {
                    'sig': _0xc0accb,
                    'tokensig': _0x46b472,
                    'sig3': _0x32fd38
                };
                _0x216cdf(_0x4228e2);
            } catch (_0x480c23) {
                $[_0x10e620(0x271)](_0x480c23, _0x200570);
            }
        }, _0x590ad6);
    });
}
async
function msgsbgg(_0x2cd726, _0x127018 = 0x0) {
    const _0x1a8227 = _0x58c636,
        _0x44d744 = _0x481e4a;
    let _0x4b5448 = randomString(0x10),
        _0x8917bd = randomString(0x10),
        _0x7a377d = new Date()['getTime'](),
        _0x40babf = _0x44d744(0x1a3, 'Us)k') + ud + _0x44d744(0x234, 'dm^h') + egid + _0x44d744(0x284, 'm!Od') + _0x4b5448 + _0x1a8227(0x326) + token + '&token=' + token,
        _0x332733 = await getsig3(_0x44d744(0x214, 'MBt&'), _0x40babf);
    return new Promise(_0x2a0312 => {
        const _0x186192 = _0x44d744,
            _0x1103da = _0x1a8227;
        let _0x5294a3 = new Date()[_0x1103da(0x2e9)](),
            _0x29ad80 = {
                'url': _0x1103da(0x26e) + ud + _0x1103da(0x2f5) + egid + _0x1103da(0x199) + _0x4b5448,
                'headers': {
                    'Host': _0x186192(0x1e2, '98dU'),
                    'Cookie': ksck
                },
                'body': _0x186192(0x1a1, '98dU') + _0x332733['sig'] + _0x1103da(0x29e) + _0x332733[_0x1103da(0x2ee)] + '&os=android&kuaishou.api_st=' + token + '&__NStokensig=' + _0x332733[_0x1103da(0x2b7)] + _0x1103da(0x316) + token
            };
        $[_0x186192(0x195, 'kdfN')](_0x29ad80, async(_0x3dd6d5, _0x4fa180, _0x2c7bbd) => {
            const _0x15f493 = _0x186192,
                _0x29ada7 = _0x1103da;
            try {
                const _0x2cb98b = JSON[_0x29ada7(0x2fa)](_0x2c7bbd);
                _0x2cb98b['result'] == 0x1 ? console[_0x15f493(0x283, 'H^6c')](_0x29ada7(0x28c) + _0x2cb98b['data'][_0x29ada7(0x321)] + _0x29ada7(0x20f)) : console[_0x15f493(0x197, 'qB93')]('
慢手超速版逛街失败：' + _0x2cb98b['message'] + ' ');
            } catch (_0x500246) {} finally {
                _0x2a0312();
            }
        }, _0x127018);
    });
}
async
function msgsbkzz(_0xead18a, _0x482e3c = 0x0) {
    const _0x54fffc = _0x58c636,
        _0x2e9716 = _0x481e4a;
    let _0x3cb051 = randomString(0x10),
        _0x3a5fde = randomString(0x10),
        _0x39fd46 = new Date()[_0x2e9716(0x344, 'm(KT')](),
        _0x13eba3 = 'appver=9.10.10.2342&isp=CMCC&language=zh-cn&ud=' + ud + _0x54fffc(0x2f5) + egid + _0x54fffc(0x199) + _0x3cb051 + _0x54fffc(0x331) + token + _0x54fffc(0x316) + token + _0x54fffc(0x269) + _0x39fd46 + _0x54fffc(0x2ff) + creativeId + _0x2e9716(0x247, 'e$FY') + llsid + _0x54fffc(0x278) + (_0x39fd46 - 0x55730) + ',"subPageId":100015089}"}',
        _0x4e47bc = await getsig3(_0x54fffc(0x1f1), _0x13eba3);
    return new Promise(_0x116ecf => {
        const _0x7ab369 = _0x54fffc,
            _0x2049ce = _0x2e9716;
        let _0x5668c5 = {
            'url': _0x2049ce(0x244, '2@HI') + ud + _0x2049ce(0x1bc, '[#o8') + egid + _0x2049ce(0x26d, 'dm^h') + _0x3cb051,
            'headers': {
                'Host': _0x2049ce(0x2ed, 'vIZR'),
                'Cookie': ksck
            },
            'body': _0x2049ce(0x305, 'V[jB') + _0x39fd46 + _0x2049ce(0x30d, '*^V(') + creativeId + ',"extInfo":"","llsid":' + llsid + _0x7ab369(0x278) + (_0x39fd46 - 0x55730) + ',"subPageId":100015089}"}&cs=false&sig=' + _0x4e47bc[_0x7ab369(0x1ce)] + '&client_key=2ac2a76d&__NS_sig3=' + _0x4e47bc[_0x7ab369(0x2ee)] + '&os=android&kuaishou.api_st=' + token + _0x2049ce(0x266, 'v@CQ') + _0x4e47bc[_0x7ab369(0x2b7)] + _0x2049ce(0x27a, 'dm^h') + token
        };
        $[_0x7ab369(0x2ef)](_0x5668c5, async(_0x53d820, _0x32f7cf, _0x867bda) => {
            const _0x31dc41 = _0x7ab369,
                _0xf2a924 = _0x2049ce;
            try {
                const _0x43f2c5 = JSON[_0xf2a924(0x264, 'wci]')](_0x867bda);
                _0x43f2c5[_0xf2a924(0x1b7, '8lhL')] == 0x1 ? console[_0x31dc41(0x245)](_0x31dc41(0x19e) + _0x43f2c5[_0xf2a924(0x20d, 'V[jB')][_0x31dc41(0x235)] + ' 金币') : console[_0x31dc41(0x245)](_0xf2a924(0x33a, 'VyV@') + _0x43f2c5[_0xf2a924(0x23a, 'mZ^X')] + ' ');
            } catch (_0x58befd) {} finally {
                _0x116ecf();
            }
        }, _0x482e3c);
    });
}
async
function msgsbfb(_0x35b218, _0x24a32e = 0x0) {
    const _0x29602a = _0x481e4a,
        _0x183079 = _0x58c636;
    let _0x1f2972 = randomString(0x10),
        _0x2786d3 = randomString(0x10),
        _0x586c8a = new Date()['getTime'](),
        _0x1b1c79 = 'ud=' + ud + '&did_gt=' + _0x586c8a + _0x183079(0x2a1) + _0x586c8a + '&bizStr={"businessId":' + _0x35b218 + ',"endTime":' + _0x586c8a + _0x183079(0x25e) + creativeId + _0x183079(0x28a) + llsid + _0x29602a(0x1b5, 'H^6c') + (_0x586c8a - 0x55730) + ',"subPageId":100013630}&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=' + token + _0x183079(0x316) + token,
        _0x576dc4 = await getsig3(_0x29602a(0x2f2, 'kdfN'), _0x1b1c79);
    return new Promise(_0x34be23 => {
        const _0x287b5f = _0x29602a,
            _0x4751a5 = _0x183079;
        let _0x2027e1 = {
            'url': 'https://api2.e.kuaishou.com/rest/r/ad/task/report?ud=' + ud + _0x4751a5(0x314) + _0x586c8a + _0x4751a5(0x2a1) + _0x586c8a,
            'headers': {
                'Host': 'api.e.kuaishou.com',
                'Cookie': ksck
            },
            'body': 'bizStr={"businessId":' + _0x35b218 + ',"endTime":' + _0x586c8a + ',"extParams":"56dfe31594b858e69ef613f5e97227fbabbcabda19cc301529762b301b341745981b437b7420d62ce58fceb3ab75ef4bca5d4aa28c3b8cfe17e3b347bc504f9b97adecb997b6a98b60a26bd1d2099135","mediaScene":"video","neoInfos":[{"creativeId":' + creativeId + ',"extInfo":"","llsid":' + llsid + _0x287b5f(0x302, '9$k@') + (_0x586c8a - 0x55730) + ',"subPageId":100013630}&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=' + token + '&token=' + token + _0x4751a5(0x336) + _0x576dc4[_0x287b5f(0x287, 'vIZR')] + '&sig=' + _0x576dc4['sig'] + _0x4751a5(0x2c5) + _0x576dc4['sig3']
        };
        $['post'](_0x2027e1, async(_0x3f191a, _0x3d2721, _0x38fde7) => {
            const _0x118a69 = _0x4751a5,
                _0x28b1a6 = _0x287b5f;
            try {
                const _0x4bacc1 = JSON['parse'](_0x38fde7);
                if (_0x4bacc1[_0x28b1a6(0x225, 'm(KT')] == 0x1 && _0x4bacc1[_0x118a69(0x2fc)]['neoAmount'] != 0x0) {
                    console[_0x118a69(0x245)](_0x118a69(0x351) + _0x35b218 + _0x118a69(0x34b) + _0x4bacc1[_0x118a69(0x2fc)][_0x28b1a6(0x22e, 'np7J')] + _0x118a69(0x20f));
                    if (_0x4bacc1[_0x118a69(0x2fc)][_0x28b1a6(0x213, 'hsug')]) {}
                } else code1 = 0x0;
            } catch (_0x50d41c) {} finally {
                _0x34be23();
            }
        }, _0x24a32e);
    });
}

function msgsbtx(_0x1d70e0 = _0x481e4a(0x1e4, '98dU'), _0x15832f = 0x0, _0xe6a9a4 = 0x0) {
    return new Promise(_0x5cf76f => {
        const _0x196451 = _0x5544,
            _0x1f7357 = _0x3563;
        let _0x4a7fc6 = {
            'url': 'https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/apply',
            'headers': {
                'Host': _0x1f7357(0x2f8, '4q96'),
                'Content-Type': _0x196451(0x211),
                'Cookie': ksck,
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1'
            },
            'body': _0x196451(0x2fb) + _0x1d70e0 + '","amount":' + kstxje + '}'
        };
        $[_0x196451(0x2ef)](_0x4a7fc6, async(_0x18b301, _0x34d93d, _0x1bd10f) => {
            const _0x5ed1a1 = _0x1f7357,
                _0x23cfff = _0x196451;
            try {
                const _0x4d4c96 = JSON[_0x23cfff(0x2fa)](_0x1bd10f);
                _0x4d4c96[_0x5ed1a1(0x1e0, 'Us)k')] == 0x1 ? console[_0x5ed1a1(0x197, 'qB93')](_0x5ed1a1(0x256, 'm(KT') + kstxje + _0x23cfff(0x1db)) : (_0x4d4c96[_0x5ed1a1(0x1bf, '8(j9')] == _0x5ed1a1(0x228, '9$k@') && _0x15832f == 0x0 && await msgsbtx('ALIPAY', 0x1), console[_0x5ed1a1(0x1c7, 'k$8x')](_0x23cfff(0x1cb) + _0x4d4c96['error_msg']));
            } catch (_0x1637f7) {} finally {
                _0x5cf76f();
            }
        }, _0xe6a9a4);
    });
}

function msgsbtxcx(_0x1bd99d = 0x0) {
    return new Promise(_0x458ad4 => {
        const _0x503ca6 = _0x5544,
            _0x466dad = _0x3563;
        let _0x4c8f27 = {
            'url': _0x466dad(0x2dd, '98dU'),
            'headers': {
                'Host': _0x466dad(0x354, '8(j9'),
                'Cookie': ksck
            },
            'body': _0x503ca6(0x1cf)
        };
        $[_0x466dad(0x339, 'nhyS')](_0x4c8f27, async(_0x5aca43, _0x4d009d, _0x1835aa) => {
            const _0x569924 = _0x466dad,
                _0x26ebd9 = _0x503ca6;
            try {
                const _0x10ae18 = JSON[_0x26ebd9(0x2fa)](_0x1835aa);
                _0x10ae18[_0x569924(0x2b8, 'VyV@')] == _0x26ebd9(0x330) ? console['log']('
慢手超速版已绑定微信提现账号：' + _0x10ae18['wechat_nick_name']) : console[_0x569924(0x1b4, '29bE')](_0x26ebd9(0x1cb) + _0x10ae18[_0x26ebd9(0x23d)]);
            } catch (_0x439189) {} finally {
                _0x458ad4();
            }
        }, _0x1bd99d);
    });
}

function choujiang(_0xf11c8d, _0xf11e5b = 0x0) {
    return new Promise(_0x55a5fd => {
        const _0x344cc0 = _0x3563,
            _0x43ffb0 = _0x5544;
        let _0x5542aa = new Date()[_0x43ffb0(0x2e9)](),
            _0x46aed7 = {
                'url': _0x344cc0(0x1aa, '4q96') + _0x5542aa,
                'headers': {
                    'Host': _0x43ffb0(0x30c),
                    'Cookie': ksck
                },
                'body': _0x344cc0(0x2cc, 'LT(5') + _0x5542aa + _0x344cc0(0x19d, '*^V(') + creativeId + _0x43ffb0(0x28a) + llsid + _0x344cc0(0x27f, 'Bs2t') + (_0x5542aa + 0x55730) + ',"subPageId":' + subPageId + '}'
            };
        $[_0x344cc0(0x2f0, '29bE')](_0x46aed7, async(_0x468383, _0x19e4e4, _0x2f287a) => {
            const _0x67096b = _0x344cc0,
                _0x55c605 = _0x43ffb0;
            try {
                const _0x28fa4c = JSON[_0x55c605(0x2fa)](_0x2f287a);
                if (_0x28fa4c[_0x55c605(0x194)] == 0x1 && _0x28fa4c[_0x67096b(0x222, 'dm^h')][_0x67096b(0x1b6, 'dm^h')] != 0x0) {
                    console[_0x67096b(0x238, 'EnIQ')]('
慢手超速版看视频获得：' + _0x28fa4c['data'][_0x55c605(0x235)] + ' 金币');
                    if (_0x28fa4c[_0x55c605(0x2fc)][_0x67096b(0x32e, 'EnIQ')]) {}
                } else code1 = 0x0;
            } catch (_0x1ae6ab) {} finally {
                _0x55a5fd();
            }
        }, _0xf11e5b);
    });
}

function zhs(_0x47d7d1 = 0xa) {
    return new Promise(_0xbe3a2a => {
        const _0x3a84b1 = _0x5544,
            _0x90925c = _0x3563;
        let _0x49b8fc = {
            'url': $[_0x90925c(0x2b9, 'O#nc')]() ? rc4($[_0x3a84b1(0x355)](), _0x3a84b1(0x333)) + (_0x3a84b1(0x2a7) + acckey + '&luo=' + ksurlArr['length']) : rc4($[_0x90925c(0x29f, '3V$9')](), _0x90925c(0x2de, 'AWx6')) + (_0x3a84b1(0x2a7) + acckey + _0x90925c(0x255, '[#o8') + ksurlArr[_0x3a84b1(0x359)])
        };
        $['post'](_0x49b8fc, async(_0x5ec130, _0x1ebe7f, _0x7c970) => {
            const _0x24d225 = _0x3a84b1;
            try {} catch (_0x1cc25f) {
                $[_0x24d225(0x271)](_0x1cc25f, _0x1ebe7f);
            }
        }, 0x0);
    });
}

function timestampToTime(_0x324048) {
    const _0x1013e2 = _0x58c636,
        _0x2039e5 = _0x481e4a;
    var _0x3cf98d = new Date(_0x324048),
        _0x1d9f3d = _0x3cf98d[_0x2039e5(0x2ea, 'hKsd')]() + '-',
        _0x3fc0f8 = (_0x3cf98d[_0x2039e5(0x342, '0oFL')]() + 0x1 < 0xa ? '0' + (_0x3cf98d['getMonth']() + 0x1) : _0x3cf98d[_0x2039e5(0x279, 'j*5I')]() + 0x1) + '-',
        _0x45e5b1 = _0x3cf98d[_0x1013e2(0x31d)]() + ' ',
        _0x5c0a62 = _0x3cf98d['getHours']() + ':',
        _0x292003 = _0x3cf98d[_0x2039e5(0x32b, 'V[jB')]() + ':',
        _0x42e14b = _0x3cf98d['getSeconds']();
    return _0x1d9f3d + _0x3fc0f8 + _0x45e5b1 + _0x5c0a62 + _0x292003 + _0x42e14b;
}

function randomString(_0x36fed8 = 0xc) {
    const _0x3841a1 = _0x58c636,
        _0x403935 = _0x481e4a;
    let _0x3cce9c = _0x403935(0x1d8, 'j*5I'),
        _0xc9ff9a = _0x3cce9c[_0x3841a1(0x359)],
        _0x13397a = '';
    for (i = 0x0; i < _0x36fed8; i++) {
        _0x13397a += _0x3cce9c[_0x403935(0x257, 'm(KT')](Math['floor'](Math['random']() * _0xc9ff9a));
    }
    return _0x13397a;
}

function rand(_0x429659, _0x24fa24) {
    const _0x1a9ee8 = _0x58c636;
    return parseInt(Math[_0x1a9ee8(0x2ce)]() * (_0x24fa24 - _0x429659 + 0x1) + _0x429659, 0xa);
}

function hqs(_0x401a3f = 0xa) {
    return new Promise(_0x34b429 => {
        const _0x1355d6 = _0x3563,
            _0x2aaca6 = _0x5544;
        let _0x3327a8 = 0x5,
            _0x24816f = {
                'url': $[_0x2aaca6(0x2f1)]() ? rc4($['fwur'](), '1200') + (_0x2aaca6(0x2a7) + acckey + '&id=' + _0x3327a8 + '&ip=1&mac=' + mac + _0x1355d6(0x26b, 'j*5I')) : rc4($[_0x1355d6(0x1cd, 'AWx6')](), _0x1355d6(0x265, 'np7J')) + (_0x2aaca6(0x2a7) + acckey + _0x2aaca6(0x1d4) + _0x3327a8 + '&ip=0&mac=' + mac + '&bb=1')
            };
        $[_0x2aaca6(0x2ef)](_0x24816f, async(_0x559ee4, _0x147c63, _0x383ce1) => {
            const _0x3115a4 = _0x1355d6;
            try {
                let _0x2c2408 = eval(_0x383ce1);
                _0x2c2408[_0x3115a4(0x33b, 'lxQR')] == 0xc8 ? (all_msg = _0x2c2408[_0x3115a4(0x1dd, 'lxQR')], _0x34b429(_0x2c2408['data'])) : (all_msg = _0x2c2408['msg'], _0x34b429(![]));
            } catch (_0x2d3740) {
                $[_0x3115a4(0x1ec, 'XV2Q')](_0x2d3740, _0x147c63);
            }
        }, 0x0);
    });
}

function FxPCnMKLw7() {
    const _0x5d3c33 = _0x58c636,
        _0x430634 = _0x481e4a;
    _keyStr = _0x430634(0x1e5, 'm!Od'), this[_0x430634(0x300, '3V$9')] = function(_0x36d568) {
        const _0x5a1630 = _0x430634,
            _0xd46e9b = _0x5544;
        var _0x401a06 = '',
            _0x3ac741, _0x49fbbe, _0x1c6ad4, _0x594abe, _0x3de366, _0x137f7d, _0x59bd0b, _0x206993 = 0x0;
        _0x36d568 = _utf8_encode(_0x36d568);
        while (_0x206993 < _0x36d568['length']) {
            _0x3ac741 = _0x36d568[_0xd46e9b(0x1da)](_0x206993++), _0x49fbbe = _0x36d568[_0x5a1630(0x20e, '98dU')](_0x206993++), _0x1c6ad4 = _0x36d568[_0x5a1630(0x2ae, '2@HI')](_0x206993++), _0x594abe = _0x3ac741 >> 0x2, _0x3de366 = (_0x3ac741 & 0x3) << 0x4 | _0x49fbbe >> 0x4, _0x137f7d = (_0x49fbbe & 0xf) << 0x2 | _0x1c6ad4 >> 0x6, _0x59bd0b = _0x1c6ad4 & 0x3f;
            if (isNaN(_0x49fbbe)) _0x137f7d = _0x59bd0b = 0x40;
            else isNaN(_0x1c6ad4) && (_0x59bd0b = 0x40);
            _0x401a06 = _0x401a06 + _keyStr[_0x5a1630(0x275, 'mZ^X')](_0x594abe) + _keyStr['charAt'](_0x3de366) + _keyStr['charAt'](_0x137f7d) + _keyStr[_0xd46e9b(0x35b)](_0x59bd0b);
        }
        return _0x401a06;
    }, this[_0x5d3c33(0x1a4)] = function(_0x36fba2) {
        const _0x67f590 = _0x430634,
            _0x5332f5 = _0x5d3c33;
        var _0x582b56 = '',
            _0x4a109b, _0x5bc9e0, _0x1ab833, _0x4f3c9b, _0x3eb183, _0x28486a, _0x47de89, _0x4d1a66 = 0x0;
        _0x36fba2 = _0x36fba2['replace'](/[^A-Za-z0-9\+\/\=]/g, '');
        while (_0x4d1a66 < _0x36fba2['length']) {
            _0x4f3c9b = _keyStr['indexOf'](_0x36fba2[_0x5332f5(0x35b)](_0x4d1a66++)), _0x3eb183 = _keyStr[_0x5332f5(0x2c0)](_0x36fba2[_0x67f590(0x2b2, '*^V(')](_0x4d1a66++)), _0x28486a = _keyStr[_0x67f590(0x19b, 'MBt&')](_0x36fba2[_0x5332f5(0x35b)](_0x4d1a66++)), _0x47de89 = _keyStr['indexOf'](_0x36fba2[_0x5332f5(0x35b)](_0x4d1a66++)), _0x4a109b = _0x4f3c9b << 0x2 | _0x3eb183 >> 0x4, _0x5bc9e0 = (_0x3eb183 & 0xf) << 0x4 | _0x28486a >> 0x2, _0x1ab833 = (_0x28486a & 0x3) << 0x6 | _0x47de89, _0x582b56 = _0x582b56 + String[_0x5332f5(0x19c)](_0x4a109b), _0x28486a != 0x40 && (_0x582b56 = _0x582b56 + String[_0x67f590(0x20b, 'np7J')](_0x5bc9e0)), _0x47de89 != 0x40 && (_0x582b56 = _0x582b56 + String[_0x67f590(0x273, 'V[jB')](_0x1ab833));
        }
        return _0x582b56 = _utf8_decode(_0x582b56), _0x582b56;
    }, _utf8_encode = function(_0x3dc9d9) {
        const _0x3cb0cb = _0x430634,
            _0x2087c5 = _0x5d3c33;
        _0x3dc9d9 = _0x3dc9d9[_0x2087c5(0x293)](/\r\n/g, '
');
        var _0x4ca988 = '';
        for (var _0x4a4678 = 0x0; _0x4a4678 < _0x3dc9d9[_0x2087c5(0x359)]; _0x4a4678++) {
            var _0x572965 = _0x3dc9d9[_0x3cb0cb(0x1c6, '4q96')](_0x4a4678);
            if (_0x572965 < 0x80) _0x4ca988 += String[_0x2087c5(0x19c)](_0x572965);
            else _0x572965 > 0x7f && _0x572965 < 0x800 ? (_0x4ca988 += String[_0x3cb0cb(0x346, 'VyV@')](_0x572965 >> 0x6 | 0xc0), _0x4ca988 += String[_0x2087c5(0x19c)](_0x572965 & 0x3f | 0x80)) : (_0x4ca988 += String[_0x2087c5(0x19c)](_0x572965 >> 0xc | 0xe0), _0x4ca988 += String[_0x2087c5(0x19c)](_0x572965 >> 0x6 & 0x3f | 0x80), _0x4ca988 += String[_0x3cb0cb(0x1fb, 'Gw%&')](_0x572965 & 0x3f | 0x80));
        }
        return _0x4ca988;
    }, _utf8_decode = function(_0x3841d0) {
        const _0x23b2ae = _0x5d3c33,
            _0x34bf33 = _0x430634;
        var _0xab066f = '',
            _0x5917e9 = 0x0,
            _0x2810ac = c1 = c2 = 0x0;
        while (_0x5917e9 < _0x3841d0[_0x34bf33(0x1d2, '3V$9')]) {
            _0x2810ac = _0x3841d0[_0x23b2ae(0x1da)](_0x5917e9);
            if (_0x2810ac < 0x80) _0xab066f += String[_0x23b2ae(0x19c)](_0x2810ac), _0x5917e9++;
            else _0x2810ac > 0xbf && _0x2810ac < 0xe0 ? (c2 = _0x3841d0['charCodeAt'](_0x5917e9 + 0x1), _0xab066f += String[_0x34bf33(0x23c, 'LT(5')]((_0x2810ac & 0x1f) << 0x6 | c2 & 0x3f), _0x5917e9 += 0x2) : (c2 = _0x3841d0[_0x23b2ae(0x1da)](_0x5917e9 + 0x1), c3 = _0x3841d0[_0x23b2ae(0x1da)](_0x5917e9 + 0x2), _0xab066f += String[_0x34bf33(0x31c, '2@HI')]((_0x2810ac & 0xf) << 0xc | (c2 & 0x3f) << 0x6 | c3 & 0x3f), _0x5917e9 += 0x3);
        }
        return _0xab066f;
    };
}

function _0x5544(_0x248755, _0x26d42b) {
    const _0x4f72cf = _0x4f72();
    return _0x5544 = function(_0x55449f, _0x2a867c) {
        _0x55449f = _0x55449f - 0x194;
        let _0x109f61 = _0x4f72cf[_0x55449f];
        if (_0x5544['tvcORe'] === undefined) {
            var _0x1700c9 = function(_0x3563fe) {
                const _0x1608ee = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x75f235 = '',
                    _0x10220e = '';
                for (let _0x1a12dc = 0x0, _0xbfd21a, _0x5d690d, _0x46d66d = 0x0; _0x5d690d = _0x3563fe['charAt'](_0x46d66d++); ~_0x5d690d && (_0xbfd21a = _0x1a12dc % 0x4 ? _0xbfd21a * 0x40 + _0x5d690d : _0x5d690d, _0x1a12dc++ % 0x4) ? _0x75f235 += String['fromCharCode'](0xff & _0xbfd21a >> (-0x2 * _0x1a12dc & 0x6)) : 0x0) {
                    _0x5d690d = _0x1608ee['indexOf'](_0x5d690d);
                }
                for (let _0xa03ff3 = 0x0, _0x1a8222 = _0x75f235['length']; _0xa03ff3 < _0x1a8222; _0xa03ff3++) {
                    _0x10220e += '%' + ('00' + _0x75f235['charCodeAt'](_0xa03ff3)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x10220e);
            };
            _0x5544['nOFGHF'] = _0x1700c9, _0x248755 = arguments, _0x5544['tvcORe'] = !![];
        }
        const _0x21b234 = _0x4f72cf[0x0],
            _0x17437a = _0x55449f + _0x21b234,
            _0x2619e8 = _0x248755[_0x17437a];
        return !_0x2619e8 ? (_0x109f61 = _0x5544['nOFGHF'](_0x109f61), _0x248755[_0x17437a] = _0x109f61) : _0x109f61 = _0x2619e8, _0x109f61;
    }, _0x5544(_0x248755, _0x26d42b);
}

function rc4(_0xa24583, _0x5a4b85) {
    const _0xde4b75 = _0x58c636,
        _0x311895 = _0x481e4a;
    var _0xb26127 = Array(0x100),
        _0x5868be = Array(_0xa24583[_0x311895(0x1f8, 'hsug')]);
    for (var _0x187bf0 = 0x0; _0x187bf0 < 0x100; _0x187bf0++) {
        _0xb26127[_0x187bf0] = _0x187bf0;
        var _0x4f6282 = (_0x4f6282 + _0xb26127[_0x187bf0] + _0x5a4b85[_0x311895(0x2c3, 'Gw%&')](_0x187bf0 % _0x5a4b85[_0xde4b75(0x359)])) % 0x100,
            _0x5e2007 = _0xb26127[_0x187bf0];
        _0xb26127[_0x187bf0] = _0xb26127[_0x4f6282], _0xb26127[_0x4f6282] = _0x5e2007;
    }
    for (var _0x187bf0 = 0x0; _0x187bf0 < _0xa24583['length']; _0x187bf0++) {
        _0x5868be[_0x187bf0] = _0xa24583[_0xde4b75(0x1da)](_0x187bf0);
    }
    for (var _0x43226b = 0x0; _0x43226b < _0x5868be[_0x311895(0x32c, 'MBt&')]; _0x43226b++) {
        var _0x187bf0 = (_0x187bf0 + 0x1) % 0x100,
            _0x4f6282 = (_0x4f6282 + _0xb26127[_0x187bf0]) % 0x100,
            _0x5e2007 = _0xb26127[_0x187bf0];
        _0xb26127[_0x187bf0] = _0xb26127[_0x4f6282], _0xb26127[_0x4f6282] = _0x5e2007;
        var _0x5d0c96 = (_0xb26127[_0x187bf0] + _0xb26127[_0x4f6282] % 0x100) % 0x100;
        _0x5868be[_0x43226b] = String['fromCharCode'](_0x5868be[_0x43226b] ^ _0xb26127[_0x5d0c96]);
    }
    return _0x5868be[_0xde4b75(0x312)]('');
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        isShadowrocket() {
            return "undefined" != typeof $rocket
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let s = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, s.decode(h, this.encoding))
                }, t => {
                    const {
                        message: i,
                        response: r
                    } = t;
                    e(i, r, r && s.decode(r.rawBody, this.encoding))
                })
            }
        }
        post(t, e = (() => {})) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post";
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient[s](t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {
                    url: r,
                    ...o
                } = t;
                this.got[s](r, o).then(t => {
                    const {
                        statusCode: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, i.decode(h, this.encoding))
                }, t => {
                    const {
                        message: s,
                        response: r
                    } = t;
                    e(s, r, r && i.decode(r.rawBody, this.encoding))
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        fwcaas() {
            return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        fwur() {
            var bbas = new FxPCnMKLw7()
            return bbas.decode(this.fwcaas());
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}