const conatinerGame = document.getElementById("container");

const ROWS = 6;
const DIGITS = 4;

const createCells = (divRow: HTMLElement) => {
  Array.from({ length: DIGITS }).map(() => {
    const divLetter = document.createElement("div");
    divLetter.classList.add("digit");
    divRow.appendChild(divLetter);
  });
};

if (conatinerGame) {
  Array.from({ length: 6 }).map(() => {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    createCells(divRow);
    conatinerGame.appendChild(divRow);
  });
}
