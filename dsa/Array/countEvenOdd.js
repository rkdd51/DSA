// Count even and odd numbers in an array

let countEvenOdd = function (arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++
        }
        else {
            oddCount++
        }
    }
    return { evenCount, oddCount }
}
let array = [32, 44, 23, 1, 3]

let result = countEvenOdd(array);
console.log(result)