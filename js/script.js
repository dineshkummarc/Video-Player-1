/*Define Elements*/
var video = document.getElementById("video");
var playButton = document.getElementById('play');
var slider = document.getElementById('range');
var volume = document.getElementById('volume') 
/*Update Play/Pause button*/
video.addEventListener("play", updatePlayButton,false);
video.addEventListener("pause", updatePlayButton,false);
video.addEventListener("ended", updatePlayButton,false);
video.addEventListener("timeupdate",updateTime,false);
slider.addEventListener("change",setTime,false);
volume.addEventListener("change",setVolume,false);

function load() {
	slider.max = video.duration;
	volume.value = video.volume*100;
	/*Adjust Width*/
	document.getElementById('controls').style.width = video.clientWidth;
	document.getElementById('controls').style.top = "-" + document.getElementById('controls').clientHeight;
}

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

function setTime(){
	video.currentTime = slider.value;
}

function setVolume(){
	video.volume = volume.value/100
}

function updateTime(){
	slider.value =  video.currentTime;
}