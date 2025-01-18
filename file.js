function double(value) {
    return new Promise((res,rej)=>{
        res(value * 2)
    })
};

function addTen(value) {
    return new Promise((res,rej)=>{
        res(value + 10)
    })
}

function multipleByThree(value) {
    return new Promise((res,rej)=>{
        res(value * 3)
    })
};

double(5).then((item)=>{
    return addTen(item)
}).then(multipleByThree).then((res)=>{
    console.log(res)
})