function mergeSortedArray(arr, arr2) {
  let arrValue = [...arr];
  for (let i = 0; i < arr2.length; i++) [arrValue.push(arr2[i])];
  return arrValue;
}
let array = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9];
let value = mergeSortedArray(array, array2);
console.log("value: ", value);

//* Complexity is O(m+n)
