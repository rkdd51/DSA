function secondSmallest(arr) {
  if (arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] != smallest) {
        secondSmallest = arr[i];
      }
    }
    return secondSmallest;
  }
  return "Please add input value";
}

let array = [21, 22, 32, 43, 2, 1];
let value = secondSmallest(array);
console.log(value);

//* Complexity is O(n)
