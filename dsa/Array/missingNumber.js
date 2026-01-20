// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


//Solution with XOR operator
let missingNumber = function (arr) {
    let missingValue = arr.length;
    for (let i = 0; i < arr.length; i++) {
        missingValue = arr[i] ^ i ^ missingValue
    }
    return missingValue
};

let array = [2, 3, 0];
console.log(missingNumber(array));


//Solution with sum of index and sum of array
let missingNumber1 = function (arr) {
    let totalSum = 0;
    let indexSum = 0
    for (let i = 0; i < arr.length; i++) {
        indexSum = indexSum + i
        totalSum = totalSum + arr[i]
    }
    indexSum = indexSum + arr.length //NOTE : This is important to include
    let missingValue = indexSum - totalSum
    return missingValue
};

let array1 = [2, 3, 0];
console.log(missingNumber1(array1));