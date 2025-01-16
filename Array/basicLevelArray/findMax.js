function findMax(arr) {
  if (arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  return "No input is passed";
}

let array = [1, 2, 3, 32, 4, 5];
let value = findMax(array);
console.log("value: ", value);

//* Complexity is O(n)
