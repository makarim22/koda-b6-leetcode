// 342) power of four

var isPowerOfFour = function(n) {
    if(n <= 0) return false;
   for(let i = 1; i <= n; i *= 4) {
        if(i == n) return true;
    }
    return n == 1;
}


