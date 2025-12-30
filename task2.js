// 2634: filter elements from array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function greaterThan(item){
    return item > 10; 
}

function firstIndex(item, index){
    return index === 0; 
}

function plusOne(item){
    return item + 1; 
}

var filter = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)) { 
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

console.log(filter(array, greaterThan));  
console.log(filter(array, firstIndex));  

console.log(filter(array, plusOne));       
