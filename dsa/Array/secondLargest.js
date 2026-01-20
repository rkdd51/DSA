// Find the second largest element
let secondLargest = function (arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
let array = [32, 44, 23, 1, 3, 0, 444, -78]

let result = secondLargest(array);
console.log(result)


const secondLargest2 = function (arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
};
let array2 = [32, 44, 23, 1, 3, 0, 444, -78]
let result2 = secondLargest2(array2);
console.log(result2)