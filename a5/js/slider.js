// Initialize array of slide objects containing image source, alt text, description
const slides = [
	{ 
		src: "./images/burger.jpg",
		alt: "Burger pic",
		desc: "Five juicy burgers with fresh ingredients on a wooden board."
	},
	{
		src: "./images/pizza-plate.jpg",
		alt: "Pizza on a plate",
		desc: "Delicious pizza served on a plate placed on table."
	},
	{
		src: "./images/mojitos.jpg",
		alt: "Three mojitos on a table",
		desc: "Three mojito-filled glasses nestled among scattered ice cubes"
	},
	{
		src:"./images/frenchfries.jpg",
		alt: "French fries",
		desc: "Brown, crispy French fries served on brown parchment paper"
	}
];

// Track the current slide index and countdown timer
let currentSlide = 0;
let timer = 4;
let interval, countdown;

// Access HTML elements
const imgElement = document.querySelector(".slide");
const descElement = document.querySelector(".description");
const timerElement = document.getElementById("slider-timer");

// Display the slide at given index
function showSlide(index) {
	const slide = slides[index];
	imgElement.src = slide.src;
	imgElement.alt = slide.alt;
	descElement.textContent = slide.desc;

	imgElement.classList.add("displaySlide");

	timer = 4;
	timerElement.textContent = timer;
}

// Starts the 4-second countdown timer
// Automatically advances to the next slide
function startCountdown() {
	clearInterval(countdown);
	countdown = setInterval(() => {
		timer--;
		timerElement.textContent = timer;
		if (timer === 0) {
			nextSlide();
		}
	}, 1000);
}

// Shows the next slide and restarts the timer
function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
	startCountdown();
}

// Shows the previous slide and restarts the timer
function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
	startCountdown();
}

// Initialize the slider on page load
showSlide(currentSlide);
startCountdown();
