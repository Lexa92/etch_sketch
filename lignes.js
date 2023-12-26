
const container = document.getElementById('gridContainer');
const button = document.getElementById('changeGrid');

function createGrid(size) {
  container.innerHTML = ''; // Clear previous grid
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
 

  square.classList.add('square');
  container.appendChild(square)
    
    
      
     
    }

  container.style.width = `${size * 30}px`; // Adjust container width based on squares
}

function erase() {
  const gridItems = document.querySelectorAll('#grid-container > div');

  gridItems.forEach((item) => {
    const gridItem = item;
    gridItem.style.backgroundColor = '#D8D8D8';
    gridItem.style.opacity = '1';
    gridItem.count = 0;
  });
}

// Initial grid creation
createGrid(16);

button.addEventListener('click', () => {
  let newSize = prompt('Entrez le nombre de carrés par côté (maximum 100) :');
  newSize = parseInt(newSize);

  if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Veuillez entrer un nombre valide entre 1 et 100.');
  }
});
function eraseListener() {
  const eraseButton = document.querySelector('.erase');

  eraseButton.addEventListener('click', erase);
}


function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//nouveau élément pour le rgb
document.getElementById('rgb').addEventListener('click', function() {
  addColorChangeEvents('rgb');
});
function addColorChangeEvents(mode) {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
      //square.removeEventListener('mouseover'); // Supprimez l'ancien écouteur d'événement

      square.addEventListener('mouseover', () => {
          if (mode === 'rgb') {
              square.style.backgroundColor = getRandomColor();
          } else if (mode === 'color') {
              square.style.backgroundColor = document.getElementById('color').value;
          }
      });
  });
}//fin des ajouts du rgb

const rgb = document.querySelector('.gin');
const chooseColor = document.querySelector('#color');

let isRGBMode = false; // Variable pour savoir si le mode RGB est activé
let isColorMode = false; // Variable pour savoir si le mode couleur est activé





chooseColor.addEventListener('input', function(){
  isColorMode = true; // Active le mode couleur
  isRGBMode = false; // Désactive le mode RGB
});




rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = container.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
           event.target.style.backgroundColor = getRandomColor();
           isRGBMode = true; // Active le mode RGB
           isColorMode = false;
          })
    }
});

chooseColor.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = container.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
          
        event.target.style.backgroundColor = newColor;
        isColorMode = true; // Active le mode couleur
        isRGBMode = false; // Désactive le mode RGB  
      })
    }
});

function startGame() {
  generateGrid();
  startPainting('classic');
  changeSize();
  eraseListener();
  getRandomColor();
}

container.addEventListener('mouseover', function(event) {
  if (isRGBMode) {
    event.target.style.backgroundColor = getRandomColor();
  } else if (isColorMode) {
    let newColor = document.getElementById('color').value;
    event.target.style.backgroundColor = newColor;
  } else {
    event.target.style.backgroundColor = 'none'; // Met la couleur par défaut ici
  }
});



console.log('JavaScript chargé.');

