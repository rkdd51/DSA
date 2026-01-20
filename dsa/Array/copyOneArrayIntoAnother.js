let copyOneArrayIntoAnother = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result;
};

let array = [1, 1, 2, 3, 4, 5, 5];
console.log(copyOneArrayIntoAnother(array));


let copyOneArrayIntoAnother2 = function (arr) {
    let result = [...arr];

    return result;
};

let array2 = [1, 1, 2, 3, 4, 5, 5];
console.log(copyOneArrayIntoAnother2(array2));
