function sortArrayBasedOnFrequency(arr) {
  let frequency = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] = frequency[arr[i]] + 1;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  let uniqueElements = [];
  for (let key in frequency) {
    uniqueElements.push(key);
  }

  for (let i = 0; i < uniqueElements.length; i++) {
    for (let j = i + 1; j < uniqueElements.length; j++) {
      if (frequency[uniqueElements[i]] < frequency[uniqueElements[j]]) {
        let temp = uniqueElements[i];
        uniqueElements[i] = uniqueElements[j];
        uniqueElements[j] = temp;
      }
    }
  }

  for (let i = 0; i < uniqueElements.length; i++) {
    let element = uniqueElements[i];
    for (let j = 0; j < frequency[element]; j++) {
      result.push(Number(element));
    }
  }

  return result;
}

let value = sortArrayBasedOnFrequency([1, 2, 3, 2, 5, 3, 1, 2]);
console.log("value:", value);

//* Time complexity is O(n+k^2) where n is the number of elements in the array and k is the number of unique elements in the array

//* Space complexity is O(n)
