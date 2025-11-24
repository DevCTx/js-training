const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

// Set the background color
ctx.fillStyle = "crimson";

// Set font family and size
ctx.font = "30px Arial";

// Draw a rectangle
ctx.fillRect(1, 1, 200, 40);


// Set the background color
ctx.fillStyle = "black";

// Draw the text
ctx.fillText("Hello HTML Canvas!", 1, 50);
