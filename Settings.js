//background
function bg1() {
   document.getElementById("body").style.backgroundImage = "url(bg.jpg)";
}
function bg2() {
   document.getElementById("body").style.backgroundImage = "url(citywater.png)";
}
function bg3() {
   document.getElementById("body").style.backgroundImage = "url(Flowers.png)";
}
function bg4() {
   document.getElementById("body").style.backgroundImage = "url(Boardwalk.png)";
}
function custom_bg(event) {
  var reader = new FileReader();
  reader.onload = function() {
    document.getElementById("body").style.backgroundImage = `url(${reader.result})`;
    document.getElementById("body").style.backgroundSize = 'cover';
  }
  reader.readAsDataURL(event.target.files[0]);
}

//Color scheme

function color1() {
  document.getElementById("style").href = "style.css";
}
function color2() {
  document.getElementById("style").href = "tablet.css";
}
function color3() {
  document.getElementById("style").href = "Simple.css";
}
function color4() {
  document.getElementById("style").href = "classic.css";
}
function left() {
  document.getElementById("style").href = "style.css";
}
function center() {
  document.getElementById("style").href = "center.css";
}
function right() {
  document.getElementById("style").href = "right.css";
}