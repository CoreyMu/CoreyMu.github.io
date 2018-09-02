console.log("dancearrow.js is loading...");
var right = 600;
var left = 600;
var up = 600;
var down = 600;
var nextbeat;
var allbeats;
var fbe = 7;
var fbm = 3;
var fbh = 1;
var sendarray = [];
var easyarray = [];
var middlearray = [];
var hardarray = []
function startgame() {
    step.style.display = "none"
    nowPlayingAudio.load();
    nowPlayingAudio.play();
    createCanvas(windowWidth, windowHeight);
}

function setup() {}

function draw() {
    decodeURI(window.location.hash)
    if ("#playscreenplay" != decodeURI(window.location.hash)) {
        return
    }
    background(255);
    goal();
    arrows();
    lifebar();
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
}

function timeout() {
    console.log(allbeats);
    console.log(nowPlayingAudio.currentTime)
    sendarray.push(nowPlayingAudio.currentTime)
    console.log(sendarray)
    console.log(easyarray)
    console.log(middlearray)
    console.log(hardarray)
    findbeateasy()
    findbeatmiddle()
    findbeathard();
}

function findbeateasy() {
    easyarray.push(sendarray[fbe]);
    if (fbe < sendarray.length) {
        fbe = fbe + 8
    } else if (fbe >= sendarray.length) {

    }

}

function findbeatmiddle() {
    middlearray.push(sendarray[fbm]);
    if (fbm < sendarray.length) {
        fbm = fbm + 4
    } else if (fbm >= sendarray.length) {

    }
}

function findbeathard() {
    hardarray.push(sendarray[fbh]);
    if (fbh < sendarray.length) {
        fbh = fbh + 2
    } else if (fbh >= sendarray.length) {

    }
}



console.log("dancearrow.js is alive...");
