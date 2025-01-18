const http = require("http");
const fs = require('fs');
const url = require("url")


const hml  = fs.readFileSync("index.html",'utf-8');

const server = http.createServer((req,res)=> {
    let path = req.url;

    let query = url.parse(req.url,true)
    console.log(query)

    console.log(path)

    if(path === "/") {
        res.writeHead(200,{
            'Content-Type':'application/json',
            'My-Header':"Hello World!"
        })
     fs.readFile("data.json","utf-8",(err,data) => {
            let items = JSON.parse(data)
            console.log(items)
            res.end(items)
        });

    } else if (path.toLocaleLowerCase() === "/home") {
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        res.end(hml.replace("{{%CONTENT%}}",'You are in home page'))

    } else {
        res.writeHead(404)
        res.end(hml.replace("{{%CONTENT%}}",'You are in error page'))

    }
});

server.listen(8000,"127.0.0.1",()=> {
    console.log("SERVER IS LISTENING")
})