/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
    const gSum = (nums.length * (nums.length+1))/2;
    const nSum = nums.reduce((acc, el) => acc + el, 0);

    console.log(gSum - nSum);
    return gSum - nSum;  
};

let nums = [3, 0, 1];
console.log(missingNumber(nums));