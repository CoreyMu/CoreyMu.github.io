console.log("dancearrow.js is loading...");
var right;
var left;
var up;
var down;
var saia
var nextbeat;
var allbeats;
var nbe = 8
var fb = 7;
var sendarray = [];
var levelsarray = [];
var easyarray = [];
var middlearray = [];
var hardarray = []
var msa
var x = 0;
var speed;
var da = false;
var sa = true;


function startgame() {
    step.style.display = "none"
    nowPlayingAudio.load();
    nowPlayingAudio.play();
    createCanvas(windowWidth, windowHeight);
    findbpm(song)
}

function setup() {}

function draw() {
    decodeURI(window.location.hash)
    if ("#playscreenplay" != decodeURI(window.location.hash)) {
        return
    }
    background(255);
    goal();
    lifebar();
    if (da) {
        arrows();
    }
    if (sa) {
        movement();
    }

}

function lifebar() {
    fill(255);
    rect(0, 0, windowWidth, 25);
}

function goal() {
    fill(255);
    rect(0, 25, windowWidth, 100);
}

function arrows() {
    fill(0);
    rect(200, right, 50, 50);

    fill(50);
    rect(550, left, 50, 50);

    fill(100);
    rect(850, up, 50, 50);

    fill(150);
    rect(1200, down, 50, 50);

}

function findbpm(song) {
    allbeats = song.bpm
    for (var x in allbeats) {
        setTimeout(timeout, allbeats[x] * 1000);
    }
    speed = 60 / song.temp * -60
    console.log(speed);
}

function timeout() {
    console.log(allbeats);
    console.log(nowPlayingAudio.currentTime)
    sendarray.push(nowPlayingAudio.currentTime)
    console.log(sendarray)
    levels(x)
    console.log(levelsarray)
    x++

}

function levels(x) {
    console.log(x)
    levelsarray.push(sendarray[fb]);
    if (fb < sendarray.length) {
        fb = fb + nbe
    }
    if (levelsarray[x] == undefined) {
        da = true
        sa = false
        randomnumber();
        right = 600;
        left = 600;
        up = 600;
        down = 600;
        console.log("hi")
    } else if (levelsarray[x] != undefined) {
        da = true
        sa = true
        console.log("today")
    }
}

function findbeateasy() {
    fb = 7;
    nbe
}

function findbeatmiddle() {
    fb = 3;
    nbe = 4
}

function findbeathard() {
    fb = 1;
    nbe = 2
}

function movement() {

  console.log(saia);
  if(saia==1){
    up += speed;
    if (up < 15) {
        up = 600
        da = false

    }
  }
  if(saia==2){
    down += speed;
    if (down < 15) {
        down = 600;
        da = false
    }
  }
  if(saia==3){
    right += speed;
    if (right < 15) {
        right = 600;
        da = false
    }
  }
  if(saia==4){
    left += speed;
    if (left < 15) {
        left = 600;
        da = false
    }
  }
}

function randomnumber(){
var rN = Math.floor((Math.random() * 4)+1);
console.log(rN);
saia=rN
}

console.log("dancearrow.js is alive...");
