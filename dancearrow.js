console.log("dancearrow.js is loading...");
var right = 600;
var left = 600;
var up = 600;
var down = 600;
var speed = sendarray;
var nextbeat;
var a = nowPlayingAudio;
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
    createCanvas(windowWidth, windowHeight);;

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
    console.log("here");
    movement();
    fill(0);
    rect(200, right, 50, 50);

    fill(50);
    rect(550, left, 50, 50);

    fill(100);
    rect(850, up, 50, 50);

    fill(150);
    rect(1200, down, 50, 50);
}

function movement() {

    up += speed;
    if (up < 0) {
        up = 700;
        console.console.log("up is moving");
    }
    down += speed;
    if (down < 0) {
        down = 700;
        console.console.log("down is moving");
    }
    right += speed;
    if (right < 0) {
        right = 700;
        console.console.log("right is moving");
    }
    left += speed;
    if (left < 0) {
        left = 700;
        console.console.log("left is moving");
    }
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
    findbeathard()
}

function findbeateasy() {
    console.log("find beat easy is up and running");
    easyarray.push(sendarray[fbe]);
    console.log("I push to easy array like you ask");
    console.log("starting if else statment");
    if (fbe < sendarray.length) {
        fbe = fbe + 7
    } else if (fbe >= sendarray.length) {
        console.log("now i will stop")
    }
    console.log("finsh if else statment");
}

function findbeatmiddle() {
    console.log("find beat middle is up and running");
    middlearray.push(sendarray[fbm]);
    console.log("I push to middle array like you ask");
    console.log("starting if else statment");
    if (fbm < sendarray.length) {
        fbm = fbm + 3
    } else if (fbm >= sendarray.length) {
        console.log("now i will stop")
    }
    console.log("finsh if else statment");
}

function findbeathard() {
    console.log("find beat hard is up and running");
    hardarray.push(sendarray[fbh]);
    console.log("I push to hard array like you ask");
    console.log("starting if else statment");
    if (fbh < sendarray.length) {
        fbh = fbh + 2
    } else if (fbh >= sendarray.length) {
        console.log("now i will stop")
    }
    console.log("finsh if else statment");
}


console.log("dancearrow.js is alive...");
