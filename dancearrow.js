console.log("dancearrow.js is loading...");
function startgame() {
step.style.display = "none"
}
// function preload() {
//   noLoop();
// }
function setup() {
}

function draw() {
  decodeURI(window.location.hash)
  if("#playscreenplay"!=decodeURI(window.location.hash)){
    return
  }
  ellipse(50,50,50,50);
}


console.log("dancearrow.js is alive...");
