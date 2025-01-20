function findCommonElement(arr1, arr2, arr3) {
  let final = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
          return arr1[i];
        }
      }
    }
  }
  return null;
}

const value = findCommonElement([1, 2, 4], [2, 3, 5], [21, 3, 2]);
console.log("value: ", value);

//* Time Complexity is O(n)
//* Space Complexity is O(1)
