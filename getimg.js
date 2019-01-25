var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){}).listen(50082);
console.log("开始抓取图片");


var url = "http://s0.hao123img.com/res/img/logo/logonew.png";
http.get(url, function(res){
    var imgData = "";
    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.on("data", function(chunk){
        imgData+=chunk;
    });

    res.on("end", function(){
        fs.writeFile("./logonew.png", imgData, "binary", function(err){
            if(err){
                console.log("下载失败");
                process.exit(0);
            }
            console.log("下载成功");
            process.exit(0);
        });
    });
});