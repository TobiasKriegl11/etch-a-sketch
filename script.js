const squareContainer = document.getElementById('square-container');

for (let i = 0; i < (16*16); i++) {
    const box = document.createElement('div');
    box.classList.add("square-box");
    squareContainer.appendChild(box);

    box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = "black";
    });
};



