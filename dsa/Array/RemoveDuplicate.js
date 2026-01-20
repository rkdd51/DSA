// From all types of array
let removeDuplicate = function (arr) {
    let result = [];
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            result.push(arr[i])
        }
    }
    return result;
};

let array = [10, 2, 12, 32, 40, 10];
console.log(removeDuplicate(array));

//From sorted array

let removeDuplicateFromSortedArray = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i])
        }
    }
    return result;
};

let array1 = [1, 1, 2, 3, 4, 5, 5];
console.log(removeDuplicateFromSortedArray(array1));
