function secondLargest(array) {
  let largestNumber = 0;
  let secondLargestNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = array[i];
    } else if (array[i] > secondLargestNumber && array[i] != largestNumber) {
      secondLargestNumber == array[i];
    }
  }

  return secondLargestNumber;
}

let value = secondLargest([3, 2, 4, 33, 23, 213, 323]);
console.log("value: ", value);

//* Complexity:0(n)
