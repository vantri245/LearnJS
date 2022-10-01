console.log('Video 13')
let arr = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm']
let i = 0;
while (i < arr.length) {
    if (arr[i] === 'Hai') {
        console.log('Đã tìm thấy phần tử vị trí ', i, 'với giá trị là: ', arr[i])
        break
    }
    i++;
}