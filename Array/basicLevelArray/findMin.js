function findMin(arr) {
  if (arr.length === 0) return "Please provide input";
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let array = [21, 1, 2, 3, 32, 4, 5];
let value = findMin(array);
console.log("value: ", value);

//* Complexity is O(n)
