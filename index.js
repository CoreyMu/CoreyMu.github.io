var screens = new Map();

setupClick("step-up","welcomescreen");

setupClick("play","pickscreen");

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
