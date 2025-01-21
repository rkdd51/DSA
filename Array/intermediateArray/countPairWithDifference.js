function countPairWithDifference(arr, diff) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] == diff) {
        data.push([arr[i], arr[j]]);
      }
    }
  }
  return data;
}

let value = countPairWithDifference([1, 2, 4, 13, 8, 12, 16], 4);
console.log(value);
