function checkSortedArray(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
    }
  }
  return isSorted;
}

let values = checkSortedArray([1, 32, 43, 111]);
console.log("value: ", values);
