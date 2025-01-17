function findLargestNumber(arr) {
  let largestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

let data = findLargestNumber([1, 4, 2, 65, 3]);
console.log(data);

//* Complexity: O(n)
