/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init; //init = 0

    for (const n of nums){
        res = fn(res, n);
    }

    return res;

    //return nums.reduce(fn, init);
};

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {return accum + curr; }
let init = 0;

console.log(nums.reduce(fn, init))

return nums.reduce(fn, init);