const drumPads = document.querySelectorAll(".drum-pad");
const audioPads = document.querySelectorAll(".drum-pad .clip");
const display = document.getElementById("display");

drumPads.forEach( (pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector(".clip");
    
    if (audio)
      playSound(audio);
  })
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();  
  const audio = [...audioPads].find( (pad) => (pad.id == key));
  
  if (audio)
    playSound(audio);
})

function playSound(audio) {
  const description = audio.getAttribute('aria-label');
  display.innerText = description.split(" ")[1];
  display.style.display = 'block';

  audio.currentTime = 0;
  audio.play();

  audio.onended = () => {
    display.style.display = "none";
  };
}


