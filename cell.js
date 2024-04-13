export class Cell {
  constructor(gridElement, x, y) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridElement.append(cell);
    this.x = x;
    this.y = y;
  }

  linkTile(tile) {
    tile.setXY(this.x, this.y);
    this.linkedTile = tile;
  }

  updateCords(pos) {
    if (this.isEmpty()) return;

    this.linkedTile.setXY(this.x, this.y);
    this.linkedTile.checkPosition(pos + 1);
  }

  isEmpty() {
    return !this.linkedTile;
  }
}
