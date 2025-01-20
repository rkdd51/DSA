function dutchNationalFlag(arr) {
  let zeros = [];
  let ones = [];
  let twos = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else if (arr[i] === 1) {
      ones.push(arr[i]);
    } else if (arr[i] === 2) {
      twos.push(arr[i]);
    }
  }
  let all = [...zeros, ...ones, ...twos];

  return all;
}

//* Another way
function dutchNationalFlag(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

const value = dutchNationalFlag([1, 0, 2, 0, 1, 1, 0, 0, 2]);
console.log("value: ", value);

//* Time complexity is O(n)
//* Space complexity is O(1)
