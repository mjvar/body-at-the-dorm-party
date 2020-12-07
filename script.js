let introPopup = document.querySelector(".intro-popup");
let introVideo = document.querySelector(".intro-popup video");

function openIntro(){
	introPopup.classList.toggle("active");
	console.log(introPopup.classList);
	introVideo.play();
}

function closeIntro(){
	introPopup.classList.toggle("active");
	console.log(introPopup.classList);
	introVideo.pause();
	introVideo.currentTime = 0;
}

introVideo.onended = function(){
	window.location.replace("table.html");
}