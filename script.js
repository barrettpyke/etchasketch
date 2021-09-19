const containerElem = document.querySelector('#container');
const clear = document.querySelector('#clear');
const newGrid = document.querySelector('#new-grid');


function createDivs (squares) {
    let total = squares * squares;
    for (i = 0; i < total; i++) {
    let el = document.createElement('div');
    el.classList.add('grid-item');
    containerElem.appendChild(el);
    }
    let size = 100/squares;
    let gridItems = document.querySelectorAll('.grid-item');
    for (i=0; i < total; i++) {
        gridItems[i].style.width = size + '%';
        gridItems[i].style.height = size + '%';
    }
}

createDivs(16);

containerElem.addEventListener('mouseover', event => {
    if (event.target.className === 'grid-item') {
        event.target.classList.add('new-bg');
    }   
});

clear.addEventListener('click', () => {
    let el = document.querySelectorAll('.grid-item');
    for (i = 0; i < el.length; i++) {
    el[i].classList.remove('new-bg');
    }
});

newGrid.addEventListener('click', () => {
    let squares = prompt('Enter number of squares per side:');
    let squaresNum = Number(squares);
    if ((typeof(squaresNum) == 'number') && (squaresNum <= 100)) {
    let el = document.querySelectorAll('.grid-item');
    for (i=0; i < el.length; i++) {
        el[i].remove();
    }
    createDivs(squaresNum);
}
else {
    alert('Please enter a number that is less than 100');
}
})





//whatever they input into the prompt its going to divide 100 by it and then enter that as a percentage on the width and height for the grid-item class