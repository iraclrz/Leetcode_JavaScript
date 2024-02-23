/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let adj = new Array(n);
    for(let i = 0; i < n; i++) {
        adj[i] = new Array();
    }
    for(let [from, to, price] of flights) {
        adj[from].push([to, price]);
    }

    let memo = new Array(n).fill(Infinity);

    let queue = [[src, 0]];

    while(queue.length && k > -1) {
        let sz = queue.length;
        while(sz--) {
            let [node, price] = queue.shift();
            for(let [neighbor, cost] of adj[node]) {
                if(memo[neighbor] < price + cost) continue;
                memo[neighbor] = price + cost;
                queue.push([neighbor, memo[neighbor]]);
            }
        }
        k--;
    }
    const result = memo[dst] == Infinity ? -1 : memo[dst];
    console.log("Cheapest price from", src, "to", dst, "with at most", k, "stops:", result);
    return result;
};

// Input
const n = 4;
const flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]];
const src = 0;
const dst = 3;
const k = 1;

// Call the function with input
findCheapestPrice(n, flights, src, dst, k);
