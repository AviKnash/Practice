
const prom =  new Promise((res,rej)=>res("Hello"));

const item = await prom;
console.log(item)