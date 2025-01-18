function findInteraction(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
        arr2.splice(j, 1);
        break;
      }
    }
  }

  return newArr;
}

let array = [1, 2, 2, 1, 22];
let array2 = [2, 2];
let value = findInteraction(array, array2);
console.log(value);

//* Complexity is O(n×m)
