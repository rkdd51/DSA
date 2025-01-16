function printAlternate(arr) {
  let empArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    empArr.push(arr[i]);
  }
  return empArr;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value = printAlternate(array);
console.log("value: ", value);

//* Complexity is O(n)
