export class Tile {
  constructor(gridElement, value) {
    this.tileElement = document.createElement("div");
    this.tileElement.classList.add("tile");
    this.value = value;
    this.tileElement.textContent = this.value;
    gridElement.append(this.tileElement);
  }

  setXY(x, y) {
    this.x = x;
    this.y = y;
    this.tileElement.style.setProperty("--x", x);
    this.tileElement.style.setProperty("--y", y);
  }

  checkPosition(value) {
    let color;
    if (this.value == value) {
      color = "rgb(28,172,120)";
    } else {
      color = "rgb(205,92,92)";
    }
    this.tileElement.style.setProperty("background-color", color);
  }
}
