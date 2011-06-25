document.addEventListener("load",updatePlayButton,false);

/*Define Elements*/
var video = document.getElementById("video");
var playButton = document.getElementById('play/pause'); 
/*Update Play/Pause button*/
video.addEventListener("play", updatePlayButton,false);
video.addEventListener("pause", updatePlayButton,false);
video.addEventListener("ended", updatePlayButton,false);

function updatePlayButton(){
	if (video.paused || video.ended) {
    	playButton.value = "Play";
  	}
  	else {
    	playButton.value = "Pause";
  	}
}

function PlayPause() {
	if (video.paused || video.ended) {
    	video.play();
  	}
  	else {
    	video.pause();
  	}
}