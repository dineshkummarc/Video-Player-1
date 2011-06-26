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
	
	/*Adjust Width*/
	document.getElementById('controls').style.width = video.clientWidth;
	if ( localStorage.getItem('time') ) {
    	video.currentTime = localStorage.getItem('time'); 
  	}
	volume.value = video.volume*100;
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
	video.volume = volume.value/100;
}

function updateTime(){
	slider.value =  video.currentTime;
	if (Modernizr.localstorage) {
		localStorage.setItem('time', video.currentTime);
	} 
}
