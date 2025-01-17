function findMissingNumber(arr) {
  let missingNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 !== arr[i]) {
      return (missingNumber = i + 1);
    }
  }
  return arr.length + 1;
}

let value = findMissingNumber([1, 2, 3, 4, 5]);
console.log("value: ", value);
