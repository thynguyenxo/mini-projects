const sketchPad = document.getElementById('sketchpad');
const gridSizeSlider = document.getElementById('grid-size-slider');
const sliderOutput = document.getElementById('slider-value');
const newBtn = document.getElementById('new');
const blackColorButton = document.getElementById('black');
const randomColorButton = document.getElementById('random-color');
const eraserButton = document.getElementById('eraser');

//display slider values
let sliderValue = gridSizeSlider.value;
sliderOutput.innerHTML = sliderValue;
let x = gridSizeSlider.oninput = function () {
  sliderValue = this.value;
  sliderOutput.innerHTML = sliderValue;
}
// generate rgb values for random color
function randomColor() {
  let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  return color;
}
// event listener for the color buttons
blackColorButton.addEventListener('click', function () {
  colorMode = 'black';
});

randomColorButton.addEventListener('click', function () {
  colorMode = 'rainbow';
});

eraserButton.addEventListener('click', function () {
  colorMode = 'eraser';
})

function createGrid() {
  sketchPad.innerHTML = '';
  const squaresPerSide = parseInt(sliderValue);
  if (!isNaN(squaresPerSide)) {
    const sqrSize = 500 / squaresPerSide;

    sketchPad.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${sqrSize}px)`;
    sketchPad.style.gridTemplateRows = `repeat(${squaresPerSide}, ${sqrSize}px)`;

    for (let i = 0; i < squaresPerSide; i++) {
      for (let j = 0; j < squaresPerSide; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        sketchPad.appendChild(gridItem);
      }
    }
    // Add event listeners to the grid items for coloring
    const gridItems = document.querySelectorAll('.grid-item');
    // for each item in the array 'girdItems'
    gridItems.forEach((item) => {
      item.addEventListener('mouseover', function () {
        if (colorMode === 'black') {
          item.style.backgroundColor = 'black';
        } else if (colorMode === 'rainbow') {
          item.style.backgroundColor = randomColor();
        } else if (colorMode === 'eraser') {
          item.style.backgroundColor = '#A4C3B2';
        }
      });
    });
  }
}
newBtn.addEventListener('click', createGrid);

createGrid();



