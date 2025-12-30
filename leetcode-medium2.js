/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let id = [];

    for(let i = 0; i < arr2.length; i++){
        id.push(arr2[i].id);
    }

    for(let i = 0; i < arr1.length; i++){
        if (id.includes(arr1[i].id)) {
            for(let j = 0; j < arr2.length; j++){
                if(arr2[j].id === arr1[i].id){
                    arr2[j] = {...arr1[i], ...arr2[j]};
                    break;
                }
            }
            arr1.splice(i, 1);
            i--;
        }
    }
    
    let array = [...arr1, ...arr2];
    return array;
};

