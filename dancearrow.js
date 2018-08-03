console.log("dancearrow.js is loading...");
function startgame() {
//document.write("<style>body { background-color:#000 }</style>");
step.style.display = "none"
nowPlayingAudio.load();
nowPlayingAudio.play();
createCanvas(windowWidth, windowHeight);

}
function setup() {
}

function draw() {
  decodeURI(window.location.hash)
  if("#playscreenplay"!=decodeURI(window.location.hash)){
    return
  }

}

console.log("dancearrow.js is alive...");
