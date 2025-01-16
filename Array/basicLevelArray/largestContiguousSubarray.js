function largestContiguousSubArray(arr) {
  let largestValue = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    largestValue = Math.max(largestValue, currentSum);
  }

  return largestValue;
}

let arr = [12, 32, 123, 43, 23, -5];
let value = largestContiguousSubArray(arr);
console.log("value: ", value);
