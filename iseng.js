const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var map = function(arr, plusone, plusI, constant) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(plusI(arr[i], i));
        newArray.push(plusone(arr[i]));
        newArray.push(constant(arr[i]));
    }

    return newArray;
    function plusone(item) { 
        return item +  1;
    }
    
    function plusI (item, index) {
        return item + index;
    }

    function constant(item) {
        return 42;
    }
};

console.log(map(array));