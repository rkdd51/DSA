function firstNonRepeatingElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        let repeating = false;

        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                repeating = true;
                break;
            }
        }

        if (!repeating) {
            return arr[i];
        }
    }

    return null;
}

let array = [1, 2, 3, 2];
console.log(firstNonRepeatingElement(array)); // 4


let firstNonRepeatingElementOptimized = function (arr) {
    let frequency = {};
    for (num of arr) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
    for (num of arr) {
        if (frequency[num] === 1) {
            return num;
        }
    }
    return null;
};

let array1 = [1, 2, 3, 2];
console.log(firstNonRepeatingElementOptimized(array1)); // 4
