import img_goblin from "C:\\Users\\erdya\\OneDrive\\Рабочий стол\\gnoms\\src\\img\\goblin.png";

class CellHandler {
    constructor(game) {
        this.game = game;
        this.cells = document.querySelectorAll('.cell');
        this.init();
    }

    init() {
        this.cells.forEach(cell => {
            cell.addEventListener('click', (event) => this.handleClick(event));
        });
    }

    handleClick(event) {
        const img = event.currentTarget.querySelector('img');
        if (img && img.style.display !== 'none') {
            img.style.display = 'none';
            event.currentTarget.classList.remove('cell-with-goblin');
            this.game.incrementDefeated();
        }
    }
}

export class Game {
    constructor() {
        this.missed = 0;
        this.defeated = 0;
        this.cells = document.querySelectorAll('.cell');
        this.cellHandler = new CellHandler(this);
        this.img_goblin = img_goblin;
        this.init();
    }

    init() {
        this.moveImage();
        setInterval(() => this.moveImage(), 1000);
    }

    moveImage() {
        let currentCellWithImage = null;

        this.cells.forEach((cell, index) => {
            const img = cell.querySelector('img');
            if (img && img.style.display !== 'none') {
                currentCellWithImage = index;
            }
        });

        if (currentCellWithImage !== null) {
            const currentImg = this.cells[currentCellWithImage].querySelector('img');
            currentImg.style.display = 'none';
            this.cells[currentCellWithImage].classList.remove('cell-with-goblin');
            this.incrementMissed();
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * this.cells.length);
        } while (randomIndex === currentCellWithImage);

        const newImg = this.cells[randomIndex].querySelector('img');
        if (newImg) {
            newImg.style.display = 'block';
        } else {
            const img = document.createElement('img');
            img.src = this.img_goblin;
            img.style.display = 'block';
            this.cells[randomIndex].appendChild(img);
        }

        this.cells[randomIndex].classList.add('cell-with-goblin');
    }

    incrementMissed() {
        this.missed++;
        document.getElementById('missed').textContent = this.missed;

        if (this.missed >= 5) {
            alert('Игра закончена! Вы пропустили 5 гномов.');
            window.location.reload();
        }
    }

    incrementDefeated() {
        this.defeated++;
        document.getElementById('defeated').textContent = this.defeated;
    }
}
