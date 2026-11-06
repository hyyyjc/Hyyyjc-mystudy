let body = JSON.parse($response.body);
if (body.code === 20011 || body.type === "error") {
    body.code = 1; 
    body.type = "success";
    body.msg = "搜索成功";
    body.data = []; 
}
$done({ body: JSON.stringify(body) });
