function PlayPause() {
var video = document.getElementById("video"); 
  if (video.paused || video.ended) {
    video.play();
  }
  else {
    video.pause();
  }
}