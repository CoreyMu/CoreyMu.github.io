console.log("dancearrow.js is loading...");
var right = 800;
var left = 800;
var up = 800;
var down = 800;
var speed;
var nextbeat;
var a=nowPlayingAudio;
var allbeats;
var track;

console.log(speed);
function startgame() {
step.style.display = "none"
nowPlayingAudio.load();
nowPlayingAudio.play();
createCanvas(windowWidth, windowHeight);;

}
function setup() {
}

function draw() {
  decodeURI(window.location.hash)
  if("#playscreenplay"!=decodeURI(window.location.hash)){
    return
  }
  background(255);
goal();
arrows();
lifebar();
}

function lifebar(){
fill(255);
rect(0,0,windowWidth,25);
}

function goal(){
fill(255);
rect(0,25,windowWidth,100);
}

function arrows(){
  //console.log("moving");
  movement();
fill(0);
rect(200,right,50,50);

fill(50);
rect(550,left,50,50);

fill(100);
rect(850,up,50,50);

fill(150);
rect(1200,down,50,50);
}

function movement(){

  up +=speed;
  if (up  < 0) {
        up =700;
        console.console.log("up is moving");
      }
  down +=speed;
  if (down  < 0) {
        down =700;
        console.console.log("down is moving");
      }
  right +=speed;
  if (right  < 0) {
        right =700;
        console.console.log("right is moving");
      }
  left +=speed;
  if (left  < 0) {
        left =700;
        console.console.log("left is moving");
      }
}
function findbpm(song){
    allbeats=song.bpm
    for (var x in allbeats) {
      setTimeout(timeout,allbeats[x]*1000);
  }

}
function timeout(){
  console.log(allbeats);
  console.log(nowPlayingAudio.currentTime)
}


console.log("dancearrow.js is alive...");
