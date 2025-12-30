/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let simpan = {};
    return function(...args) {
        key = JSON.stringify(args)
        if(key in simpan){
            return simpan[key];
        }
        simpan[key]= fn(...args)
        return simpan[key]
    }

}


