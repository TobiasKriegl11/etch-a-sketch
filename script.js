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
      box.style.opacity = 0.1;

      squareContainer.appendChild(box);

      box.addEventListener('mouseenter', () => {
        if (!box.style.backgroundColor) {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }     

        let currentOpacity = parseFloat(box.style.opacity);
        if (currentOpacity < 1) {
          box.style.opacity = (currentOpacity + 0.1).toFixed(1);
        }
      });    
    }
}
buildGrid(gridSize);

buttonNewGrid.addEventListener('click', () => {
    const userInput = prompt("Choose your grid size (1-64):");
    gridSize = parseInt(userInput);

    if (gridSize > 64 || gridSize < 1 || isNaN(gridSize)) {
        alert("Invalid input! Please enter a number between 1 and 64.")
        return;
    }
    buildGrid(gridSize);
});
