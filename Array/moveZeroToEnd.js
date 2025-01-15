// 1st way of doing this

function moveZeroToEnd(arr) {
  let result = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      result.push(arr[i]);
    } else {
      zeroCount++;
    }
  }

  for (let j = 0; j < zeroCount; j++) {
    result.push(0);
  }
  return result;
}

// 2nd way of doing this

function moveZeroToEnd(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }
  while (index < arr.length) {
    arr[index] = 0;
    index++;
  }
  return arr;
}
const value = moveZeroToEnd([1, 3, 0, 12, 0, 121]);
console.log("value: ", value);

//* Complexity is O(n)
