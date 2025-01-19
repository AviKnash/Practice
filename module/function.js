function counter(callback) {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            callback("Something has finally logged")
            res()
        },2000)
    })
}

module.exports = { counter };
