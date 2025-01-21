function rearrangePositiveNegative(arr) {
  let zero = 0;
  let positive = [];
  let negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > zero) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  let finalArr = [];
  let i = 0;
  let j = 0;
  while (i < positive.length && j < negative.length) {
    finalArr.push(positive[i]);
    finalArr.push(negative[j]);
    i++;
    j++;
  }

  while (j < negative.length) {
    finalArr.push(negative[j]);
    j++;
  }

  while (i < positive.length) {
    finalArr.push(positive[i]);
    i++;
  }

  return finalArr;
}

let value = rearrangePositiveNegative([1, -22, -3, 4, -5, 6]);
console.log("value:", value);

//* Time complexity is O(n)
//* Space complexity is O(n)
