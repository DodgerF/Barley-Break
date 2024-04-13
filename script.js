import { Grid } from "./grid.js";

$(document).ready(function () {
  const gameBoard = $("#game-board");

  const grid = new Grid(gameBoard);
  grid.shuffle();
  setupInputOnce();

  function setupInputOnce() {
    $(document).one("keydown", handleInput);
  }
  function handleInput(event) {
    let empty = grid.findEmpty();
    switch (event.key) {
      case "ArrowUp":
        let bottom = empty + 4;
        if (bottom < grid.cells.length) grid.swapCells(empty, bottom);
        break;
      case "ArrowDown":
        let top = empty - 4;
        if (top >= 0) grid.swapCells(empty, top);
        break;
      case "ArrowLeft":
        let right = empty + 1;
        if (right % 4 != 0 && right < grid.cells.length)
          grid.swapCells(empty, right);
        break;
      case "ArrowRight":
        let left = empty - 1;
        if (left % 4 != 3 && left >= 0) grid.swapCells(empty, left);
        break;
      default:
        setupInputOnce();
        return;
    }
    setupInputOnce();
  }
});
