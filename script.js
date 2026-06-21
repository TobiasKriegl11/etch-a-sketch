const squareContainer = document.getElementById('square-container');
const buttonNewGrid = document.getElementById('new-grid');

let gridSize = 16;

function buildGrid(gridSize) {    
    squareContainer.replaceChildren();
    for (let i = 0; i < (gridSize * gridSize); i++) {
      const box = document.createElement('div');
      box.classList.add("square-box");

      box.style.width = `calc(100% / ${gridSize})`;
      box.style.height = `calc(100% / ${gridSize})`;

      squareContainer.appendChild(box);

      box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = "black";
      });
    };
};
buildGrid(gridSize);

buttonNewGrid.addEventListener('click', () => {
    let userInput = prompt("Choose your grid size (1-64):")
    gridSize = parseInt(userInput);
    if (gridSize > 64 || gridSize < 1 ||isNaN(gridSize)) {
        alert("Invalid input! Please enter a number between 1 and 64.")
        return;
    }
    buildGrid(gridSize);
});
