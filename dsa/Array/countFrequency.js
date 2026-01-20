// Count the frequency of each element
let countFrequency = function (arr) {
    let arrayElementCount = {};
    for (let i = 0; i < arr.length; i++) {
        if (arrayElementCount[arr[i]]) {
            arrayElementCount[arr[i]] = arrayElementCount[arr[i]] + 1
        } else {
            arrayElementCount[arr[i]] = 1
        }
    }

    return arrayElementCount

};

let array = [1, 1, 0, 0, 2, 3, 4, 5, 0, 5];
console.log(countFrequency(array));
