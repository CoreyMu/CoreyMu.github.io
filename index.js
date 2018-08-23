console.log("index.js is loading...")

var screens = new Map();

setupClick("step", "welcomescreen");

setupClick("play", "pickscreen");

setupClick("contorl", "contorlscreen");

setupClick("keyborad", "keyboradscreen");

setupClick("next", "contorlscreen1");

setupClick("next1", "contorlscreen2");

setupClick("next2", "contorlscreen3");

setupClick("knext", "keyboradscreen1");

setupClick("knext1", "keyboradscreen2");

setupClick("knext2", "keyboradscreen3");

setupClick("skip", "songscreen");

setupClick("kskip", "songscreen");

setupClick("wskip", "welcomescreen");

setupClick("go", "songscreen");

setupClick("kgo", "songscreen");

setupClick("wgo", "welcomescreen");

setupClick("settings", "settingscreen");

setupClick("Howtousethewebsite", "screenscreen");

setupClick("Howtousethecontorl", "contorlscreen");

setupClick("Howtousethekeyborad", "keyboradscreen");

setupClick("wnext", "screenscreen1");

setupClick("wnext1", "screenscreen2");

setupClick("wnext2", "screenscreen3");

setupClick("playButtonPlayeasy", "playscreenplay");

setupClick("playButtonPlaymiddle", "playscreenplay");

setupClick("playButtonPlayhard", "playscreenplay");

$(window).on('hashchange', function() {
    render(decodeURI(window.location.hash));
});

function render(url) {
    console.log(url)

    function logMapElements(value, key, map) {
        console.log(value);
        if (url == "#" + key) {
            value.style.display = "block";
        } else {
            value.style.display = "none";
        }
    }
    screens.forEach(logMapElements);
    console.log(screens);
    if (url === "#playscreenplay") {
      startgame();
    }
}

function go(hash) {
    window.location = "index.html#" + hash;
}

function setupClick(div, hashstring) {
    var button = document.getElementById(div);
    button.addEventListener("click", function() {
        go(hashstring);
    });
    addScreen(hashstring);
}

function addScreen(Screen) {
    var ScreenElement = document.getElementById(Screen);
    screens.set(Screen, ScreenElement);

}


function functionName() {

}
go("welcomescreen");


console.log("index.js is alive")
