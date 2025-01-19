function findMaxProduct(arr) {
  let maxProduct = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let product = arr[i] * arr[j];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
}

let array = [0, 1, 2, 3, 4, -1];

let value = findMaxProduct(array);
console.log(value);
