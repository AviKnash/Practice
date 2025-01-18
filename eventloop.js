const fs = require("fs")

console.log("Program has started");

//STORED IN FIRST PHASE
setTimeout(()=>{
    console.log('Timer callback executed')
},0);

fs.readFile("file.txt","utf-8",()=>{
    console.log("File read completed")
})

setImmediate(()=>{console.log("SetImmediate callback executed!")})




console.log("Program has ended")