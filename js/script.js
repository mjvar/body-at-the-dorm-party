let introPopup = document.querySelector(".popup.intro");
let introVideo = document.querySelector(".popup.intro video");

let eviInfoPopup = document.querySelector(".popup.evi-info");

let eviVideoPopup = document.querySelector(".popup.evi-video");
let eviVideo = document.querySelector(".popup.evi-video video");

function openIntro(){
	introPopup.classList.toggle("active");
	introVideo.play();
}

function closeIntro(){
	introPopup.classList.toggle("active");
	introVideo.pause();
	introVideo.currentTime = 0;
}

introVideo.onended = function(){
	window.location.replace("table.html");
}

function openEviInfo(){
	eviInfoPopup.classList.toggle("active");
}

function closeEviInfo(){
	eviInfoPopup.classList.toggle("active");
}

function showEviVideo(v){
	eviVideoPopup.classList.toggle("active");
	var videoName = "videos/video" + v + ".mp4";
	console.log(videoName);
	eviVideo.setAttribute("src", videoName);
	eviVideo.play();
}

function closeEviVideo(){
	eviVideoPopup.classList.toggle("active");
	eviVideo.pause();
	eviVideo.currentTime = 0;
}