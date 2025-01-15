function linerSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return i;
    }
  }
  return -1;
}

let value = linerSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
console.log("value: ", value);
