var https = require("https");
var fs = require("fs");

var server = https.createServer(function(req, res){}).listen(50083);
console.log("开始抓取图片");

var url = "https://raw.githubusercontent.com/we-a-famule/images/master/h5bp/favicon.ico";
https.get(url, function(res){
    var imgurl= "";
    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.on("data", function(chunk){
        imgurl+=chunk;
    });
    res.on("end", function(){
        fs.writeFile("./favicon.ico", imgurl, "binary", function(err){
            if(err){
                console.log("图片1下载失败");
                process.exit(0);
            }
            console.log("图片1下载成功");
        });
    });
});
url = "https://raw.githubusercontent.com/we-a-famule/images/master/h5bp/icon.png";
https.get(url, function(res){
    var imgurl1= "";
    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.on("data", function(chunk){
        imgurl1+=chunk;
    });
    res.on("end", function(){
        fs.writeFile("./icon.png", imgurl1, "binary", function(err){
            if(err){
                console.log("图片2下载失败");
                process.exit(0);
            }
            console.log("图片2下载成功");
        });
    });
});
url = "https://raw.githubusercontent.com/we-a-famule/images/master/h5bp/tile-wide.png";
https.get(url, function(res){
    var imgurl2= "";
    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.on("data", function(chunk){
        imgurl2+=chunk;
    });
    res.on("end", function(){
        fs.writeFile("./tile-wide.png", imgurl2, "binary", function(err){
            if(err){
                console.log("图片3下载失败");
                process.exit(0);
            }
            console.log("图片3下载成功");
        });
    });
});
url = "https://raw.githubusercontent.com/we-a-famule/images/master/h5bp/tile.png";
https.get(url, function(res){
    var imgurl3= "";
    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
    res.on("data", function(chunk){
        imgurl3+=chunk;
    });
    res.on("end", function(){
        fs.writeFile("./tile.png", imgurl3, "binary", function(err){
            if(err){
                console.log("图片4下载失败");
                process.exit(0);
            }
            console.log("图片4下载成功");
            console.log("图片加载完毕！")
            process.exit(0);
        });
    });
});