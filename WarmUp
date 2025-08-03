
// Find smallest number in an array

function findSmallestNumber(arr) {
    let smallestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i]
        }

    }
    return smallestNumber
}

let x = findSmallestNumber(array);
console.log(x)


// Find the largest Number

function findLargestNumber(arr) {
    if (arr.length <= 0) return;
    let largestNumber = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    } 
    return largestNumber
}



// Find second largest number from array

function findSecondLargestNumber(arr) {
    if (arr.lengt < 2) {
        return "Array should have atleast 2 elements";
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i]
            //! Adding this (secondLargest != arr[i]) to check duplicates
        } else if (arr[i] > secondLargest && secondLargest != arr[i]) {
            secondLargest = arr[i]
        }
    }
    return secondLargest

}
let array = [12, 21, 432, 432, 21]
let finalOutput = findSecondLargestNumber(array)
console.log(finalOutput)
