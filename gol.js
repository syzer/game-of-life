var _ = require('lodash');

module.exports.nextState = function (board) {
    return board
        .filter(cell => stayAlive(cell, board))
        .concat(
            findNeibours(board)
                .filter(c => 3 === liveNeihboursCount(c, board))
        )
};

function findNeibours(board) {
    return _(board)
        .map(c => newNeibours(c, board))
        .flatten()
        .unique(item => "" + item)
        .value();
}

function newNeibours(c, board) {
    return [
        [c[0] - 1, c[1] - 1], [c[0], c[1] - 1], [c[0] + 1, c[1] - 1],
        [c[0] - 1, c[1]], [c[0] + 1, c[1]], [c[0], c[1] + 1],
        [c[0] + 1, c[1] + 1], [c[0] - 1, c[1] + 1]
    ].filter(c => !_.find(board, c));
}

function liveNeihboursCount(c, board) {
    return board
        .filter(c2 => (
            Math.abs(c[0] - c2[0]) <= 1
            && Math.abs(c[1] - c2[1]) <= 1)
            && c !== c2
        )
        .length;
}

function stayAlive(cell, board) {
    return 2 === liveNeihboursCount(cell, board)
        || 3 === liveNeihboursCount(cell, board);
}