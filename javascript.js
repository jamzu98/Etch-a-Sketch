const container = document.querySelector('.container');
const mySlider = document.querySelector('.slider');
const gridSizeSpan = document.querySelector('.gridSizeSpan');
const blackButton = document.querySelector('.blackButton');
const randomButton = document.querySelector('.randomButton');
const copyrightYear = document.querySelector('.copyrightYear');

let colorMode = 0;

blackButton.addEventListener('click', () => {colorMode=0; getGridSize();});
randomButton.addEventListener('click', () => {colorMode=1; getGridSize();});

function drawGrid(col,rows) {
    for(let i = 0; i< (col * rows); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if(colorMode==0){
            square.addEventListener('mouseover', () => square.style.backgroundColor = 'black');
        } else if(colorMode==1) {
            square.addEventListener('mouseover', () => square.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16));
        }
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(square);
    }
}

function resetFunction() {
    let gridboxes = document.querySelectorAll('.square');
    gridboxes.forEach((gridbox) => {gridbox.style.backgroundColor = 'white';});
    // console.log(gridboxes);
}

function getGridSize () {
    let sliderValue = mySlider.value;
    // const resizeButton = document.querySelector('.resizeButton');
    const squares = document.querySelectorAll('.square');
    resetFunction();
    squares.forEach(square => square.remove());
    drawGrid(sliderValue, sliderValue);
}

gridSizeSpan.innerHTML = mySlider.value;

mySlider.oninput = function() {
    gridSizeSpan.innerHTML = this.value;
}

mySlider.onchange = function() {
    getGridSize();
}

copyrightYear.textContent = new Date().getFullYear();

function startApp() {
    drawGrid (16,16);
}

startApp();