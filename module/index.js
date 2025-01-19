const {counter} = require("./function");

const start = 0;
const end = 20;

counter((message) => {
    console.log(message)
}).then((res)=>{
    console.log(res)
})
