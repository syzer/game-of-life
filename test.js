var tape = require('tape');
var gol = require('./gol');


tape('board with cell', function (t) {
    var expectedState = [];
    t.same(gol.nextState([[0,0]]), expectedState);
    t.end();
});

tape('board with 3 cells', function (t) {
    var initialCells = [
        [0, 0], [0, 1], [1, 0]
    ];

    var expected = [
        [0, 0], [0, 1], [1, 0], [1,1]
    ];

    t.same(gol.nextState(initialCells), expected);
    t.end();
});

tape('board with 4 cells', function (t) {
    var initialCells = [
        [0, 0], [0, 1], [1, 0], [1,1]
    ];

    t.same(gol.nextState(initialCells), initialCells);
    t.end();
});

