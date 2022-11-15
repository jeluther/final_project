// Questions
// Event Listener for Volume change
// Styled and Original - How to style the video?

var video;


// Page load		-	Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {

	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoPlay = false;
	video.loop = false;

});

// Play Button		-	Play the video and update the volume information.
document.querySelector("#play").addEventListener("click", function() {

	console.log("Play Video");
	video.play();
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML= (document.querySelector("#slider").value + "%");

});


// Pause Button		-	Pause the video.
document.querySelector("#pause").addEventListener("click", function() {

	console.log("Video paused");
	video.pause();
	
});


// Slow Down		-	Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.querySelector("#slower").addEventListener("click", function() {

	video.playbackRate = video.playbackRate * .9;
	console.log("The New video speed is: " + video.playbackRate);

	
});

// Speed Up			-	Increase the current video speed each time the button is clicked and log the new speed to the console.
// 						Change it by an amount proportional to the slow down.
// 						If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {

	video.playbackRate = video.playbackRate * (1/.9);
	console.log("The New video speed is: " + video.playbackRate);

	
});

// Skip Ahead		-	Advance the current video by 10 seconds.  
//						If the video length has been exceeded go back to the start of the video - no farther.
//						Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {

	if(video.currentTime + 10 > video.duration){

		video.currentTime = 0;

	}
	
	else{

		video.currentTime = video.currentTime + 10;

	}

	console.log("The current location of the video: " + video.currentTime);
	
});

// Mute				-	Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {

	if (!video.muted){

		video.muted = true;
		document.querySelector("#mute").innerHTML="unmute";
		console.log("Video is muted");

	}

	else{

		video.muted = false;
		document.querySelector("#mute").innerHTML="mute";
		console.log("Video is unmuted");

	}
	
});

// Volume Slider	-	Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("click", function() {

console.log("In the video query");
console.log("Video volume is now " + document.querySelector("#slider").value + "%");

video.volume = document.querySelector("#slider").value / 100;
document.querySelector("#volume").innerHTML= (document.querySelector("#slider").value + "%");
	
});

// Styled			-	Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {

console.log("Video is now styled");
video.classList.add("oldSchool");
	
});

// Original			-	Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {

console.log("Video is now unstyled");
video.classList.remove("oldSchool");
	
});
