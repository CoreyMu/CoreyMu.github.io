console.log("dancearrow.js is loading...");
function startgame() {
step.style.display = "none"
nowPlayingAudio.load();
nowPlayingAudio.play();

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
}
function PS(){
  nowPlayingAudio.load();
  nowPlayingAudio.play();




}

console.log("dancearrow.js is alive...");
