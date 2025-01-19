const fs = require("fs")

function something() {
    let item;

    return new Promise((res,rej)=>{
        fs.readFile("file.txt","utf-8",(err,data)=>{
            if (err) rej(err)

                res(data)
        })
    })

};

const dat = something().then((res)=>

console.log(res)
);
