var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    for(let i = 1; i <= n; i *= 2) {
        if(i == n) return true;
    }
    return n == 1;
};

console.log(isPowerOfTwo(18));