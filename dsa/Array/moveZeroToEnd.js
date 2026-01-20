// Move all zeros to the end
let moveZeroToEnd = function (arr) {
    let pos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[pos] = arr[i];
            pos++
        }
    }
    while (pos < arr.length) {
        arr[pos] = 0;
        pos++
    }
    return arr
};

let array = [1, 1, 0, 0, 2, 3, 4, 5, 0, 5];
console.log(moveZeroToEnd(array));
