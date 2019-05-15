const toggleColor = function() {
  const fill = this.style.fill == 'gold' ? 'blue' : 'gold';
  this.style.fill = fill;
}

const updatePosition = function(step=1) {
  const coords = this.getBoundingClientRect(); 
  console.log(coords);
}

const goldenSnitch = document.querySelector('.golden-snitch');

// Add event listeners
goldenSnitch.addEventListener('click', updatePosition);
goldenSnitch.addEventListener('click', toggleColor);

