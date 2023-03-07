let num = 0;
const intervalId = setInterval(() => {
    console.log(++num);
    if (num === 10){
        clearInterval(intervalId);
    }
}, 1000)