/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    let callCount = 0;

    function memoized(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }
        callCount++;
        cache[key] = fn(...args);
        return cache[key];
    }

    memoized.getCallCount = function() {
        return callCount;
    };

    return memoized;
}

function sum(a, b) {
    return a + b;
}

let memoizedSum = memoize(sum);

let actions = ["call","call","getCallCount","call","getCallCount"];
let values = [[2,2],[2,2],[],[1,2],[]];
let output = [];

actions.forEach((action, index) => {
    if (action === "call") {
        output.push(memoizedSum(...values[index]));
    } else if (action === "getCallCount") {
        output.push(memoizedSum.getCallCount());
    }
});

console.log(output); // Output: [4, 4, 1, 3, 2]

