var ip="";
var port="";
var username="";
var password="";


function WebSocketTest() {
    // 新建WebSocket连接
    var ws = new WebSocket("ws://localhost:4200");

    // 连接打开事件，打开连接后发送数据
    ws.onopen = function () {
        // 使用send()方法发送数据
        ws.send("这是测试数据");
        console.log("数据发送中:\n这是测试数据");
    };

    // 接收数据事件，event的data就是返回数据
    ws.onmessage = function (evt) {
        var received_msg = evt.data;
        console.log("数据已接收:\n" + received_msg);
        // 作为一个好习惯，在接收完数据后就关闭连接，这样可以减少服务器的负担
        ws.close();
    };

    // 关闭连接后要做的事
    ws.onclose = function () {
        console.log("连接已关闭...");
    };
}

function sendLoginInfo() {

    var loginInfo = username + "*****" + password;

    // 打开连接
    var ws = new WebSocket("ws://localhost:4200");

    // 发送数据
    ws.onopen = function () {
        // 使用send()方法发送数据
        console.log(username)
        console.log(password)
        console.log(loginInfo)
        ws.send(loginInfo);
    };

    // 接收数据
    ws.onmessage = function (evt) {
        var received_msg = evt.data;
        alert(received_msg);
        // 作为一个好习惯，在接收完数据后就关闭连接，这样可以减少服务器的负担
        ws.close();
    };

    // 关闭连接后的事件
    ws.onclose = function () {
    };
}
