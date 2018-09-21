console.log("songoption.js is loading...");
// the song database
var database;

// "menu/back" element
var menuBackButton = document.getElementById("menu-back-button");

// “screen” elements
var playlistScreen = document.getElementById("playlist-screen");
var playbackScreen = document.getElementById("playback-screen");

// (playback) "now playing" elements
var nowPlayingAudio;
var nowPlayingImg = document.getElementById("now-playing-img");
var nowPlayingTitle = document.getElementById("now-playing-title");
var nowPlayingArtist = document.getElementById("now-playing-artist");

// (playback) "seek slider" and "time display" elements
var seekSlider = document.getElementById("seek-slider");
var currentTimeDisplay = document.getElementById("current-time-display");
var maxTimeDisplay = document.getElementById("max-time-display");

// other important variables
var audioArray = [];
var repeatState = 0;
var shuffleState = false;
loadData();


function loadData() {
    fetch("database.json")
        .then(function(response) {
            response.json()
                .then(function(jsonObj) {
                    database = jsonObj;
                    console.log("Database Loaded Successfully");
                }).then(setupgame)
        });
}

function setupgame() {
    printSongTitles();
    createPlaylist();
    //play();
}
// How to sort your database by song title


//For debugging
function printSongTitles() {
    for (var i = 0; i < database.length; i++) {
        console.log(database[i].title);
    }
}


function createAudioElement(song) {
    var songAudio = document.createElement("audio");
    songAudio.src = song.musicLocation;
    audioArray.push(songAudio);

}


function createSongDiv(song) {
    var SongDiv = document.createElement("div");
    var Songinput = document.createElement("input");
    var Songfigcaption = document.createElement("figcaption");
    var Songtittle = document.createElement("figcaption");
    SongDiv.setAttribute("class", "song-div");
    Songinput.setAttribute("class", "song-input");
    Songinput.setAttribute("type", "image");
    SongDiv.setAttribute("name", "value");
    Songinput.setAttribute("src", song.imgLocation);
    Songtittle.setAttribute("class", "song-title");
    Songfigcaption.setAttribute("class", "song-artist");
    Songtittle.innerHTML = song.title
    Songfigcaption.innerHTML = song.artist
    playlistScreen.appendChild(SongDiv);
    SongDiv.appendChild(Songinput);
    SongDiv.appendChild(Songfigcaption);
    SongDiv.appendChild(Songtittle);
    Songinput.addEventListener("click", function() {
        console.log(nowPlayingAudio);
        if (nowPlayingAudio !== undefined) {
            nowPlayingAudio.pause();
        }
        nowPlayingAudio = audioArray[database.indexOf(song)];
        console.log(database.indexOf(song))
        nowPlayingAudio.load(); // starts the song from the beginning

        nowPlayingAudio.play();
        updatePlayback(song);
        playButtonPlayeasy.style.display = "block";
        playButtonPlaymiddle.style.display = "block";
        playButtonPlayhard.style.display = "block";
        //playButton.innerHTML= "pause";
        //Songinput.addEventListener
        findbpm(song);
        console.log(song)
    });

}

function createPlaylist() {
    for (var i = 0; i < database.length; i++) {
        createSongDiv(database[i]);
        createAudioElement(database[i]);
    }
}

function updatePlayback(song) {
    // set nowPlayingTitle’s inner HTML text to the title of the song
    nowPlayingTitle.innerHTML = song.title

    // set nowPlayingArtist’s inner HTML text to the artist of the song
    nowPlayingArtist.innerHTML = song.artist
        // set nowPlayingImg’s src to the song’s image location
    nowPlayingImg.src = song.imgLocation
}

console.log("songoption.js is alive");
