const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
  [{ transform: "translateX(-100px)" }, { transform: "translateX(100px)" }],
  {
    duration: 2000, // makes animation lasts 2 seconds
    //iterations: Infinity, // loops indefinitely
    direction: "alternate", // moves back and forth
    easing: "ease-in-out" // smooth easing
  }
);

// Set the onfinish property to log a message when the animation ends
animation.onfinish = () => {
  console.log("Animation finished!");
};

// Play the animation when the "Play" button is clicked
playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

// Pause the animation when the "Pause" button is clicked
pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the animation");
});