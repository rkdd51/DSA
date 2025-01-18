function appearOnce(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] = frequency[arr[i]] + 1;
    } else {
      frequency[arr[i]] = 1;
    }
  }
  for (let i of arr) {
    if (frequency[i] == 1) {
      return i;
    }
  }
  return null;
}

let array = [1, 1, 2, 2, 11, 11, 22, 33, 33];
let value = appearOnce(array);
console.log(value);

//* Complexity is O(n)
