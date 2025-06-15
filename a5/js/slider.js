// image slider
const slides = document.querySelectorAll(".slides img");
const timerDisplay = document.getElementById("slider-timer");

var slideIndex = 0;
var intervalId = null;
var countdown = 4;
var countdownIntervalId = null;

initializeSlider();

function initializeSlider(){
	if (slides.length > 0) {
		slides[slideIndex].classList.add("displaySlide");
		startTimer();
	}
}
function startTimer(){
	countdown = 4;
	updateTimerDisplay();
	intervalId = setInterval(() => {
		nextSlide();
		countdown = 4;
	}, 4000);

	countdownIntervalId = setInterval(() => {
		countdown--;
		updateTimerDisplay();
	}, 1000);	
}

function updateTimerDisplay() {
	timerDisplay.textContent = countdown;
}


function showSlide(index){
	if(index >= slides.length){
		slideIndex = 0;
	}
	else if(index < 0){
		slideIndex = slides.length -1;
	}

	slides.forEach(slide => {
		slide.classList.remove("displaySlide");
	});
	slides[slideIndex].classList.add("displaySlide");

}

function prevSlide(){
	resetTimers();
	slideIndex--;
	showSlide(slideIndex);
	startTimer();

}

function nextSlide(){
	slideIndex++;
	showSlide(slideIndex);
}

function resetTimers() {
	clearInterval(intervalId);
	clearInterval(countdownIntervalId);
}
