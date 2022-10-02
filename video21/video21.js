console.log('Video 21')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let result = arr.filter((elements, index) => {
    {
        return elements && elements > 5
    }
})
console.log('Filter array', result)
let result_find = arr.find((elements, index) => {
    return elements && elements > 9
})
console.log('Find array', result_find)

let arr1 = [
    { name: 'Võ Văn A', age: 20 },
    { name: 'Võ Văn B', age: 21 },
    { name: 'Võ Văn C', age: 22 },
    { name: 'Võ Văn D', age: 23 },
    { name: 'Võ Văn E', age: 24 },
    { name: 'Võ Văn F', age: 25 }
]
let result1 = arr1.filter((obj, index1) => {
    return obj && obj.age > 22
})
console.log('Filter array1', result)

let result_find1 = arr1.find((obj, index1) => {
    return obj && obj.name == 'Võ Văn A'
})
console.log('Find array1', result_find1)