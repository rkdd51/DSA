function findKthLargest(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr[k - 1];
}

let value = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log("Kth Largest Element:", value);

//* Time complexity is O(n^2)
//* Space complexity is O(1)
