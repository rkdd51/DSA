function rotateLeft(arr) {
  let firstElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstElement;
  return arr;
}

let array = [1, 2, 3, 4, 5];
let value = rotateLeft(array);
console.log("value: ", value);
