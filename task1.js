// 2636 : apply transfrom over each element in array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function plusone(item) { 
    return item + 1;
}

function plusI(item, index) {
    return item + index;
}

function constant(item) {
    return 42;
}

var map = function(arr, callback) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(callback(arr[i], i));
    }
    return newArray;
};


