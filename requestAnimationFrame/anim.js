// reference the rectangle
const rect = document.getElementById("rect");

// start with a position of 0
let position = 0;

function update() {
  // Move the rectangle 2px to the right
  rect.style.left = position + "px";
  position += 2;

  // Reset the position when the rectangle reaches
  // the right side of the screen
  if (position > window.innerWidth) {
    // Move the rectangle just outside the left side of the screen
    position = -rect.offsetWidth;
  }
}

function animate() {
  // Update the position
  update();

  //request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);