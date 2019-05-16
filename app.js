const toggleSpin = function() {
  this.classList.toggle('spinning');
}

const updatePosition = function(step=1) {
  const coords = this.getBoundingClientRect(); 
  console.log(coords);
}

const goldenSnitch = document.querySelector('.golden-snitch');

// Add event listeners
goldenSnitch.addEventListener('click', updatePosition);
goldenSnitch.addEventListener('click', toggleSpin);

