function findMaxProduct(arr) {
    let maxProductValue = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let currProduct = arr[i] * arr[j]
            if (currProduct > maxProductValue) {
                maxProductValue = currProduct
            }
        }
    }
    return maxProductValue
}


let array = [1, 2, 3, 4, 5, 6];
let result = findMaxProduct(array)
console.log(result)