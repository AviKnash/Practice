const http = require("http");
const fs = require("fs")


const server = http.createServer();

// function Loop() {

//     const interval = setInterval(()=>{
//         fs.writeFileSync('largeFile.txt',"This is a very large file\n",{flag:'a'})
//     },1)

//     setTimeout(()=>{
//         clearInterval(interval);
//     },100000)
// }


// Loop()




server.listen(8000,'127.0.0.1',()=> {
    console.log("server has started")
})

// server.on("request",(request,response)=>{
//     fs.readFile('largeFile.txt',(err,data)=>{

//         if (!err) {
//             response.end(data)
//         } else {
//             response.end("something went wrong");
//             return;
//         }
//     })
// })

// server.on("request",(request,response)=>{
//     let rf = fs.createReadStream("largeFile.txt");

//     rf.on("data",(chunk) => {
//         response.write(chunk);
//     });

//     rf.on("end",() => {
//         response.end()
//     });

// })


server.on("request",(request,response)=>{
    let rs = fs.createReadStream("largeFile.txt");

    rs.pipe(response);
})