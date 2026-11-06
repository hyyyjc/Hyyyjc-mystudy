// 生成随机 deviceid
function randDeviceId() {
    var s = "";
    for (var i = 0; i < 24; i++) s += "0123456789abcdef"[Math.floor(Math.random() * 16)];
    return s;
}

// 拦截发出去的请求，修改 deviceid
let headers = $request.headers;
if ($request.url.indexOf("cearch.search") !== -1) {
    // 强行把 deviceid 换成全新的随机值
    headers["deviceid"] = randDeviceId();
}
$done({ headers });
