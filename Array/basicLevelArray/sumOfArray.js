function sumArray(arr) {
  if (arr.length > 0) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = arr[i] + sum;
    }
    return sum;
  }
}

let data = sumArray([1, 4, 2, 65, 3]);
console.log(data);

//* Complexity:0(n)
