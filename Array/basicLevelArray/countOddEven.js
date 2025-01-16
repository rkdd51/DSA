function countOddEven(arr) {
  if (arr.length > 0) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    }
    return { even, odd };
  }
  return "Please pass input";
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 133, 3232, 2];
let value = countOddEven(array);
console.log("value: ", value);

//* Complexity is O(n)
