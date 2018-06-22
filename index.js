var screens = new Map();

setupClick("step-up","welcomescreen");

setupClick("play","pickscreen");

setupClick("settings","settingscreen");

setupClick("contorl","contorlscreen");

setupClick("next","contorlscreen1");

setupClick("next1","contorlscreen2");

setupClick("next2","contorlscreen3");

setupClick("knext","contorlscreen1");

setupClick("knext1","contorlscreen2");

setupClick("knext2","contorlscreen3");

setupClick("go","songscreen");

setupClick("skip","songscreen");

setupClick("kgo","songscreen");

setupClick("kskip","songscreen");

setupClick("keyborad","keyboradscreen");

$(window).on('hashchange', function(){
        render(decodeURI(window.location.hash));
    });
function render(url) {

  console.log(url)
  function logMapElements(value, key, map) {
    console.log(value);
    if (url=="#"+key){
      value.style.display = "block";
    }else {
      value.style.display = "none";
    }
  }
  screens.forEach(logMapElements)
    }
function go(hash) {
    window.location = "index.html#"+hash;
}
function setupClick(div,hashstring) {
  var button=document.getElementById(div);
  button.addEventListener("click",function(){
  go(hashstring);
  });
  addScreen(hashstring);
}
function addScreen(Screen) {
var ScreenElement=document.getElementById(Screen);
screens.set(Screen,ScreenElement);

}
      go("welcomescreen");
