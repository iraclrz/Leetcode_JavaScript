/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function() {
    if (this.length){
        return this[this.length - 1];
    }
    return -1;
};

let nums = [null, {}, 3]
console.log(nums.last());

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
*/