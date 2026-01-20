// Check if an array is sorted
let checkArraySorted = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            return true
        }

    }
    return false

}

let array = [32, 44, 23, 1]

let result = checkArraySorted(array);
console.log(result)