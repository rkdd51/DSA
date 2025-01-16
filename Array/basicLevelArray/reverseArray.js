function reverseArray(arr) {
  let emptyArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    emptyArr.push(arr[i]);
  }
  return emptyArr;
}

let array = [1, 2, 3, 4, 5];
let value = reverseArray(array);
console.log("value: ", value);

//* Complexity is O(n)
