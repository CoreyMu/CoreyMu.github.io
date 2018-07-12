console.log("songoption.js is loading...");
function hi(database) {
  console.log(database)
}
 // the song database
 var database;

 // "menu/back" element
 var menuBackButton= document.getElementById("menu-back-button");

 // “screen” elements
 var playlistScreen= document.getElementById("playlist-screen");
 var playbackScreen= document.getElementById("playback-screen");

 // (playback) "now playing" elements
 var nowPlayingAudio;
 var nowPlayingImg= document.getElementById("now-playing-img");
 var nowPlayingTitle= document.getElementById("now-playing-title");
 var nowPlayingArtist= document.getElementById("now-playing-artist");

 // (playback) "seek slider" and "time display" elements
 var seekSlider= document.getElementById("seek-slider");
 var currentTimeDisplay= document.getElementById("current-time-display");
 var maxTimeDisplay= document.getElementById("max-time-display");

 // (playback) "song control" elements
 var repeatButton= document.getElementById("repeat-button");
 var skipPreviousButton= document.getElementById("skip-previous-button");
 var playButton= document.getElementById("play-button");
 var skipNextButton= document.getElementById("skip-next-button");
 var shuffleButton= document.getElementById("shuffle-button");

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
     }).then(setup)
   });
 }

 function setup() {
   sortDatabase();
   printSongTitles(); // for debugging
   //createAudioElement(database[1]);
   //console.log(createAudioElement(database[1]));
   //createSongDiv(database[1]);
   createPlaylist();
   // var songAudio = document.createElement("audio");
   // songAudio.src = database[0].musicLocation;
   // songAudio.play();
   activateInterfaceButtons();
 }
 // How to sort your database by song title
 function sortDatabase() {
   database.sort(function(songOne, songTwo) {
     var songOneTitle = songOne.title.toLowerCase();
     var songTwoTitle = songTwo.title.toLowerCase();
     if(songOneTitle > songTwoTitle) {
       return 1;
     }
     else if(songOneTitle < songTwoTitle) {
       return -1;
     }
     else {
       return 0;
     }
   });
 }

 //For debugging
 function printSongTitles() {
   for(var i = 0; i < database.length; i++) {
     console.log(database[i].title);
   }
 }


 function createAudioElement(song) {
   var songAudio = document.createElement("audio");
   songAudio.src = song.musicLocation;
   audioArray.push(songAudio);
    songAudio.addEventListener("timeupdate", updateSeekSlider);
   songAudio.addEventListener("durationchange", function() {
   // Create a variable called "seconds", set it to songAudio's duration
     var seconds=songAudio.duration;
   // Create a variable called minutes, set it to Math.floor(seconds / 60)
     var minutes=Math.floor(seconds / 60);
   // Conditional: If minutes is less than 1, set minutes to the string "0".
   // Set seconds to Math.floor(seconds % 60) - (returns the remainder of seconds
   // divided by 0)
   // Conditional: If seconds is less than 10, set seconds to the string "0" + seconds
   // Set maxTimeDisplay's inner HTML text to minutes + ":" + seconds;
     if (minutes<1){
      minutes="0";
      seconds=Math.floor(seconds % 60);
     }
     if(seconds<10){
      seconds="0"+seconds;
     currentTimeDisplay.innerHTML=minutes+":"+seconds;
 }
 });
 }


 function createSongDiv(song){
   var SongDiv = document.createElement("div");
   var Songinput = document.createElement("input");
   var Songfigcaption = document.createElement("figcaption");
   var Songtittle = document.createElement("figcaption");
   SongDiv.setAttribute("class", "song-div");
   Songinput.setAttribute("class", "song-input");
   Songinput.setAttribute("type", "image");
   SongDiv.setAttribute("name", "value");
   Songinput.setAttribute("src", song.imgLocation);
   Songtittle.setAttribute("class","song-title");
   Songfigcaption.setAttribute("class","song-artist");
   Songtittle.innerHTML=song.title
   Songfigcaption.innerHTML=song.artist
   playlistScreen.appendChild(SongDiv);
   SongDiv.appendChild(Songinput);
   SongDiv.appendChild(Songfigcaption);
   SongDiv.appendChild(Songtittle);
   Songinput.addEventListener("click", function() {
     console.log(nowPlayingAudio);
     if(nowPlayingAudio !== undefined){
         nowPlayingAudio.pause();
     }
     nowPlayingAudio = audioArray[database.indexOf(song)];
     console.log(database.indexOf(song))
     nowPlayingAudio.load(); // starts the song from the beginning

     nowPlayingAudio.play();
     updatePlayback(song);
      playButton.innerHTML= "pause";
     //Songinput.addEventListener
   });

   }

 function createPlaylist(){
 for(var i = 0; i < database.length; i++) {
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



 function activateInterfaceButtons(){
  playButton.addEventListener("click", togglePlay);
  repeatButton.addEventListener("click",toggleRepeat);
  skipNextButton.addEventListener("click",playNextSong);
  skipPreviousButton.addEventListener("click",playPreviousSong);
  shuffleButton.addEventListener("click", toggleShuffle);
  seekSlider.addEventListener("input", updateAudioPosition);

 }

 function  playNextSong(){
   var nextsong=audioArray.indexOf(nowPlayingAudio)+1;
     nowPlayingAudio.pause();
   console.log(audioArray);
   if(shuffleState=true){
     var randomIndex=audioArray.indexOf(nowPlayingAudio);
     while(randomIndex===audioArray.indexOf(nowPlayingAudio)){
     randomIndex = Math.floor(Math.random() * audioArray.length);
     }
     nowPlayingAudio=audioArray[randomIndex];
     updatePlayback(database[randomIndex]);
   }

  else if(nextsong===audioArray.length + 1){
     nowPlayingAudio=audioArray[0];
      updatePlayback(database[0]);
   }else{
     nowPlayingAudio=audioArray[nextsong];
     updatePlayback(database[audioArray.indexOf(nowPlayingAudio)]);
 }
     nowPlayingAudio.load();
   playButton.innerHTML="pause";
     nowPlayingAudio.play();
 }
 function playPreviousSong(){
    var backsong=audioArray.indexOf(nowPlayingAudio)-1;
     nowPlayingAudio.pause();
   console.log( audioArray);
   if(shuffleState=true){
     var randomIndex=audioArray.indexOf(nowPlayingAudio);
     while(randomIndex===audioArray.indexOf(nowPlayingAudio)){
     randomIndex = Math.floor(Math.random() * audioArray.length);
     }
     nowPlayingAudio=audioArray[randomIndex];
     updatePlayback(database[randomIndex]);
   }

  else if(backsong<0){
     nowPlayingAudio=audioArray[5];
      updatePlayback(database[0]);
   }else{
     nowPlayingAudio=audioArray[backsong];
     updatePlayback(database[backsong]);
   }
   nowPlayingAudio.load();
   playButton.innerHTML="pause";
   nowPlayingAudio.play();
 }


 function toggleRepeat() {
   if(repeatState === 0) {
     // set repeatButton’s fontWeight to 900
     repeatButton.style.fontWeight = "900";
     // set repeatButton’s color to red
     repeatButton.style.color = "red";
     // increment repeatState
     repeatState++;
   }
   else if(repeatState === 1) {
     // increment repeatState
     repeatState++;
     // set repeatButton’s inner HTML text to “repeat_one”
     repeatButton.innerHTML= 'repeat_one';
   }
   else if(repeatState === 2) {
     // set repeatState to 0
     repeatState =0;
     // set repeatButton’s inner HTML text to “repeat”
     repeatButton.innerHTML= 'repeat';
     // set repeatButton’s fontWeight to normal
     repeatButton.style.fontWeight = "normal";
     // set repeatButton’s color to black
     repeatButton.style.color = "black";
 }
 //return  activateInterfaceButtons();
 }

 function toggleShuffle() {
   if(!shuffleState) {
     // set shuffleButton’s fontWeight to 900
     shuffleButton.style.fontWeight = "900";
     // set shuffleButton’s color to red
     shuffleButton.style.color = "red";
     // set shuffleState to true
     shuffleState=true;
 } else {
     // set shuffleButton’s fontWeight to normal
      shuffleButton.style.fontWeight = "normal";
     // set shuffleButton’s color to black
       shuffleButton.style.color = "black";
     // set shuffleState to false
     shuffleState=false;
 }
 }
 function updateSeekSlider() {
   // set the seekSlider’s value attribute to nowPlayingAudio’s currentTime attribute
   seekSlider.value=nowPlayingAudio.currentTime;
   // set the seekSlider’s max attribute to nowPlayingAudio’s duration attribute
   seekSlider.max=nowPlayingAudio.duration;
   // Create a variable called "seconds", set it to nowPlayingAudio's currentTime
   var seconds=nowPlayingAudio.currentTime;
 // Create a variable called minutes, set it to Math.floor(seconds / 60)
   var mintutes=Math.floor(seconds / 60);
   // Conditional: If minutes is less than 1, set minutes to the string "0".
   // Set seconds to Math.floor(seconds % 60) - (returns the remainder of seconds
   // divided by 0)
   // Conditional: If seconds is less than 10, set seconds to the string "0" + seconds
   // Set currentTimeDisplay’s inner HTML text to minutes + ":" + seconds;
   if (mintutes< 1){
     mintutes="0";
     }
   seconds= Math.floor(seconds % 60);

   if(seconds<10) {
     seconds="0"+seconds
   }
   currentTimeDisplay.innerHTML=mintutes+":"+seconds;
   // snip
 if(nowPlayingAudio.currentTime >= nowPlayingAudio.duration) {
     if(repeatState === 0) {
       // Set seekSlider’s value to 0
       seekSlider.value=0;
       // Set currentTimeDisplay's inner HTML text to "0:00"
       currentTimeDisplay.innerHTML="0:00";
       // Pause nowPlayingAudio
      nowPlayingAudio="pause";
       // Set playButton's inner HTML text to "play_arrow"
       playButton.innerHTML="play_arrow";
     }
     else if(repeatState === 1) {
       // play next track

      // Call playNextSong()
       playNextSong();
     }
     else {
       // repeat current track

       // Set seekSlider's value to 0
        seekSlider.value=0;
       // Load nowPlayingAudio
       nowPlayingAudio.load();
       // Play nowPlayingAudio
       nowPlayingAudio.play();
 } }
 }
 function  updateAudioPosition(){
   nowPlayingAudio.currentTime=seekSlider.value;
 }



















console.log("songoption.js is alive");
