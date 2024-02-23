/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length;
    let label = 1;
    let cells = new Array(n * n + 1);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < n && (n - i) % 2 == 1; j++) {
            cells[label++] = [i, j];
        }
        for (let j = n - 1; j >= 0 && (n - i) % 2 == 0; j--) {
            cells[label++] = [i, j];
        }
    }
    let minMoves = new Array(n * n + 1).fill(-1);
    minMoves[1] = 0;
    let queue = [1]; //The queue will have the value of 1 because that is where we start from.

    while (queue.length) {
        let curr = queue.shift();
        if (curr == n * n) {
            console.log("Minimum moves required:", minMoves[curr]);
            return minMoves[curr];
        }
        for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
            let [i, j] = cells[next];
            let destination = next;
            if (board[i][j] != -1) destination = board[i][j];
            if (minMoves[destination] == -1) {
                queue.push(destination);
                minMoves[destination] = minMoves[curr] + 1;
            }
        }
    }
    console.log("It is not possible to reach square n^2.");
    return -1;
};

// Example usage:
const board = [[-1, -1, -1, -1, -1, -1],[-1, -1, -1, -1, -1, -1],[-1, -1, -1, -1, -1, -1],[-1, 35, -1, -1, 13, -1],[-1, -1, -1, -1, -1, -1],[-1, 15, -1, -1, -1, -1]];
snakesAndLadders(board);
