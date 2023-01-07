function vid1() {
   var video = document.getElementById("mediavid"); video.src = ("medias/Morshu.mp4");
   notifications('Loaded video: Morshu.mp4');
}
function vid2() {
   var video = document.getElementById("mediavid"); video.src = ("medias/sigma.mp3");
   notifications('Loaded audio: sigma.mp3');
}
function vid3() {
   var video = document.getElementById("mediavid"); video.src = ("medias/bdp.mp4");
   notifications('Loaded video: bdp.mp4');
}
function vid4() {
   var video = document.getElementById("mediavid"); video.src = ("medias/memeforest.wav");
   notifications('Loaded audio: memeforest.wav');
}
function vid5() {
   var video = document.getElementById("mediavid"); video.src = ("https://www.youtube.com/embed/0BNrTww3olE");
}
function custom_video(event) {
   var reader = new FileReader();
   var name = document.getElementById('choose');
   reader.onload = function() {
      var video = document.getElementById("mediavid"); video.src = reader.result;
   }
   reader.readAsDataURL(event.target.files[0]);
 }