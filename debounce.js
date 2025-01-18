function debounce(calback,delay) {
    let timeOutId;

    return function(...args) {
        timeOutId = setTimeout(()=>{
            calback(...args);
        },delay)
    }
};