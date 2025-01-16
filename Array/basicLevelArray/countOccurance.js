function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      count++;
    }
  }
  return count;
}

let value = countOccurrences([1, 2, 3, 4], 3);
console.log("value: ", value);
