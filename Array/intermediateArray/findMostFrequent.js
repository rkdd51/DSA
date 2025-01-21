function findMostFrequent(arr) {
  let frequency = {};
  let maxCount = 0;
  let mostFrequentElements = [];

  // Step 1: Calculate frequency of each element
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] += 1;
    } else {
      frequency[arr[i]] = 1;
    }

    // Step 2: Update maxCount
    if (frequency[arr[i]] > maxCount) {
      maxCount = frequency[arr[i]];
    }
  }

  // Step 3: Collect all elements with maximum frequency
  for (let key in frequency) {
    if (frequency[key] === maxCount) {
      mostFrequentElements.push(Number(key));
    }
  }

  return mostFrequentElements;
}

let value = findMostFrequent([4, 2, 1, 2, 2, 4, 4]);
console.log("Elements with max count:", value);

//* Time Complexity is O(n)
//* Space Complexity is O(n)
