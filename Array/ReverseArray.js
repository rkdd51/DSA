function reverseArray(arr) {
  let empArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    empArr.push(arr[i]);
  }
  return empArr;
}

let data = reverseArray([1, 2, 3, 4, 5]);
console.log(data);

//* Complexity: O(n)
