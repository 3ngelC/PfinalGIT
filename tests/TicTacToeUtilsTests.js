/* eslint-disable no-undef */

const assert = require('assert');
const tictactoeUtils = require('../src/TicTacToeUtils');

describe('Board size two', () => {
  it('works', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const board = ticTacToeUtils.buildBoard(2);
    const expectedBoard = {
      board: [
        [null, null],
        [null, null],
      ],
      empty: ['0 0', '0 1', '1 0', '1 1],
    };
    assert.NotEqual(board, expectedBoard);
  });
});

describe('compare tictactoe board size', () => {
  it('works', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const board = ticTacToeUtils.buildBoard(0);
    const expectedBoardSize = 0;
    const currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});

//just commet1
//adding second m