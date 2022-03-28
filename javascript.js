const container = document.querySelector('.container');

function drawGrid(col,rows) {
    for(let i = 0; i< (col * rows); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.style.gridTemplateColumns = `repeat(${col}, 0fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 0fr)`;
        container.appendChild(square);
    }
}

drawGrid (16,16);