import { Cell } from "./cell.js";
import { Tile } from "./tile.js";

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
  constructor(gridElement) {
    this.cells = [];
    for (let i = 0; i < CELLS_COUNT; i++) {
      this.cells.push(
        new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
      );
      if (i != CELLS_COUNT - 1) {
        this.cells[i].linkTile(new Tile(gridElement, i + 1));
      }
    }
  }

  shuffle() {
    for (let i = CELLS_COUNT - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      this.swapCells(i, j);
    }
  }
  swapCells(i, j) {
    [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
    [this.cells[i].x, this.cells[j].x] = [this.cells[j].x, this.cells[i].x];
    [this.cells[i].y, this.cells[j].y] = [this.cells[j].y, this.cells[i].y];
    this.cells[i].updateCords(i);
    this.cells[j].updateCords(j);
  }

  findEmpty() {
    for (let i = 0; i < CELLS_COUNT; i++) {
      if (this.cells[i].isEmpty()) {
        return i;
      }
    }
    return null;
  }
}
