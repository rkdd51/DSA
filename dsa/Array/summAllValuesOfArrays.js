const sumAll = function (arr) {
    if (arr.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(sumAll([32, 44, 23, 1]));
