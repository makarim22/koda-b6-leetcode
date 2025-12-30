/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0){
        return false;
    }
    for(let i=1;i<=n;i*=3){
        if(i==n){
            return true;
        }
    }
    return n==1;
};

console.log(isPowerOfThree(243));