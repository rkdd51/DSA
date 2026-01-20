// let mergeArray = function (arr1, arr2) {
//     arr1.push(...arr2)
//     return arr1.sort()
// }
// let first = [7, 1, 2, 3, 2];
// let second = [4, 5, 6];
// let resutl = mergeArray(first, second);
// console.log(resutl);


function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    return result
        .concat(arr1.slice(i))
        .concat(arr2.slice(j));
}


