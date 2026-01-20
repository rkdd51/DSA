
// Reverse an array
let reverseArray = function (arr) {
    let reverese = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverese.push(arr[i])
    }
    return reverese
}

let array = [32, 44, 23, 1]

// let result = reverseArray(array);
// console.log(result)

// Reverse an array


let reverseArrayInPlace = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr

}

let result = reverseArrayInPlace(array);
console.log(result)
