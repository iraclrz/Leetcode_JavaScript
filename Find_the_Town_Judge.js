/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let count = new Array(n+1).fill(0) //kaya (n+1) kasi sabi sa instruction "there are n people labeled from 1 to n" so hindi siya magsstart sa 0.

    for(let[a, b] of trust){
        count[a]-- //This means that a will never be a judge.
        count[b]++ //This means that b can be a judge.
    }

    for(let i=1; i < n+1; i++){
        if (count[i] == n-1){
            return i
        }
    }
    return -1
};

let n=3;
let trust = [[1,3],[2,3]];

console.log(findJudge(n, trust));