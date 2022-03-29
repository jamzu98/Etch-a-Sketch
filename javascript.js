const container = document.querySelector('.container');
const mySlider = document.querySelector('.slider');
const gridSizeSpan = document.querySelector('.gridSizeSpan');
const blackButton = document.querySelector('.blackButton');
const randomButton = document.querySelector('.randomButton');
const copyrightYear = document.querySelector('.copyrightYear');
const fillButton = document.querySelector('.fillButton');
const discoButton = document.querySelector('.discoButton');

let colorMode = 0;
let partyOn = false;
let rMode;

blackButton.addEventListener('click', () => {colorMode=0; getGridSize();});
randomButton.addEventListener('click', () => {colorMode=1; getGridSize();});
fillButton.addEventListener('click', () => randomFill());
discoButton.addEventListener('click', () => {
    let partyTime;
    if(!partyOn) {
        discoMode();
        partyOn = true;
    } else {
        stopDisco();
        partyOn = false;
    }
});

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

function randomFill() {
    getGridSize();
    let gridboxes = document.querySelectorAll('.square');
    gridboxes.forEach((gridbox) => {gridbox.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);});
}

function stopDisco() {
    clearInterval(rMode);
    discoButton.classList.remove('discoOn');
    discoButton.textContent = 'DISCO';
}

function discoMode() {
    rMode = setInterval(function() {randomFill();}, 300);
    discoButton.classList.add('discoOn');
    discoButton.textContent = 'DISCO ON';
}

function resetFunction() {
    let gridboxes = document.querySelectorAll('.square');
    gridboxes.forEach((gridbox) => {gridbox.style.backgroundColor = 'white';});
}

function getGridSize () {
    let sliderValue = mySlider.value;
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