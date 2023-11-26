var http = require('http');
var fs = require("fs");
var url= require("url");

http.createServer(function (req, res) 
{

  var weblink = url.parse(req.url,true);
  var filepath ="."+weblink.pathname;
  
  fs.readFile(filepath,function(err,data2)
  {
      if(err)
      {
         return res.end("404 file not found1");
      }
      res.write(data2);
      
      console.log("hi")
      res.end();
      
  });
  
}).listen(1010);








/*const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res){
   // res.writeHead(200,{'content-Type':"'text/html' 'image/apng'"})
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write('404 error')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log('server is not working',error)
    } 
    else {
        console.log('server is working'+ port)
    }
})*/