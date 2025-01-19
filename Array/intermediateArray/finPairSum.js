function findPair(arr, sum) {
  let sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        let isDuplicate = false;
        for (let k = 0; k < sumArr.length; k++) {
          if (
            (sumArr[k][0] === arr[i] && sumArr[k][1] === arr[j]) ||
            (sumArr[k][0] === arr[j] && sumArr[k][1] === arr[i])
          ) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          sumArr.push([arr[i], arr[j]]);
        }
      }
    }
  }

  return sumArr;
}

let array = [0, 1, 2, 3, 4, -1];
let sum = 3;
let value = findPair(array, sum);
console.log(value);

//* Time complexity is O(n^3)
//* Space complexity is O(n^2)
