import "./css/style.css";
import "./js/app";
import { Game } from "./GameClasses/Game.js";
import { CellHandler } from "./GameClasses/CellHandler.js";

// // TODO: write your code in app.js

const cellHandler = new CellHandler();
const contactList = new Game(cellHandler);
