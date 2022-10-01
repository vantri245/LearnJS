console.log('Video 20')
let sum = (a, b, callback) => {
    let tong = a + b;
    setTimeout(() => {
        callback(tong)
    }, 5000);
    let i = 0;
    let timer = setInterval(() => {
        callback(tong)
        i++
        if (i == 5) {
            clearInterval(timer)
        }

    }, 1000);

}

let printMessage = (message) => {
    console.log('Tổng là ', message)
}
sum(6, 9, printMessage)
