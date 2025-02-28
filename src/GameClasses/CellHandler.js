export class CellHandler {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.propHandleClick = this.handleClick.bind(this);
    this.init();
    this.defeated = 0;
  }

  init() {
    this.cells.forEach((cell) => {
      cell.addEventListener("click", this.propHandleClick);
    });
  }

  handleClick(event) {
    const img = event.currentTarget.querySelector("img");
    if (img && img.style.display !== "none") {
      img.style.display = "none";
      event.currentTarget.classList.remove("cell-with-goblin");
      this.incrementDefeated();
    }
  }

  incrementDefeated() {
    this.defeated++;
    document.getElementById("defeated").textContent = this.defeated;
  }
}
