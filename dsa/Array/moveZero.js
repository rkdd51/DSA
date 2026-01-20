// Brute Force Approach
function moveZero(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[x] = arr[i]
            x++
        }
    }
    for (let j = x; j < arr.length; j++) {
        arr[j] = 0
    }
    return arr
}
let arr = [0, 1, 0, 3, 12];
console.log(moveZero(arr));


// Optimized Approach
function moveZero(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[x] = arr[i]
            x++
        }
    }
    for (let j = x; j < arr.length; j++) {
        arr[j] = 0
    }
    return arr
}
let arr2 = [0, 1, 0, 3, 12];
console.log(moveZero(arr2));