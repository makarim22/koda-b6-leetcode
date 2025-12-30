var ArrayWrapper = function(nums) {
    this.nums = nums;

    this.valueOf = function() {
        let sum = 0;
        for (let i = 0; i < this.nums.length; i++) {
            sum += this.nums[i];
        }
        return sum;
    };

    this.toString = function() {
        return this.nums.join(',');
    };
};
const obj1 = new ArrayWrapper([1, 2, 3]);
console.log(obj1.valueOf()); // 6
console.log(obj1.toString()); // "1,2,3"

