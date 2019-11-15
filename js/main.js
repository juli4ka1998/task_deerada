// SLIDER SECTION

let changeSlide = (type) => {
	let i;

	//Get elements that should be changed
	let slide = document.getElementsByClassName("slide");
	let number = document.querySelector(".slide-number span");
	let infoNumber = document.querySelector(".slide-info__number");
	let infoName = document.querySelector(".slide-info__name");

	// Hide all slides
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}

	// Find direction
	if (type === "next") {
		slideIndex++;
		if (slideIndex > slide.length) {slideIndex = 1}
	} else {
		slideIndex--;
		if (slideIndex < 1) {
			slideIndex = slide.length ;
		}
	}

	// Show slide and its info
	slide[slideIndex-1].style.display = "block";
	infoName.innerHTML = slide[slideIndex-1].firstElementChild.innerHTML;
	number.innerHTML = `0${slideIndex}`;
	infoNumber.innerHTML = `0${slideIndex}`;

};

let slideIndex = 0;
changeSlide("next");

// Set interval when slide will change
setInterval(() => {changeSlide("next")}, 3000);

// Get buttons
let rightBtn = document.querySelector("#slider-section .arrow-right");
let leftBtn = document.querySelector("#slider-section .arrow-left");

// Add event listener to buttons
rightBtn.addEventListener('click', () => {changeSlide("next")});
leftBtn.addEventListener('click', () => {changeSlide("prev")});

// SCROLL SECTIONS

// Animate page when scrolling
const scrollThere = (targetElement, speed) => {
	if(document.querySelector(".menu").style.display !== "flex") {
		$('html, body').stop().animate(
			{scrollTop: targetElement.offset().top},
			speed, "linear"
		);
	}
};

// Mouse wheel event
$(window).on('mousewheel',  e => {
	// Get position of each section
	let sections = document.querySelectorAll('#slider-section, #about-section, #portfolio-section, #team-section, #contacts-section');

	let positions = [];
	for (let i = 0; i < sections.length; i++) {
		positions[i] = sections[i].offsetTop;
	}

	let  lastScrollTop = $(this).scrollTop(),
		scrollDirection,
		targetUp,
		targetDown,
		targetElement;

	// Find direction
	if ( e.originalEvent.wheelDelta > 0 ) {
		scrollDirection = 'up';
	} else if ( e.originalEvent.wheelDelta <= 0 ) {
		scrollDirection = 'down';
	}

	// Find scroll position
	for (let i = 0; i < positions.length; i++) {
		if (lastScrollTop === positions[i] && i !== 0 && i !== positions.length - 1) {
				targetUp = $(sections[i-1]);
				targetDown = $(sections[i+1]);
			break;
		} else if ((lastScrollTop === positions[i] && i === 0) || (lastScrollTop > positions[i] && lastScrollTop < positions[i+1])) {
			targetUp =  $(sections[i]);
			targetDown = $(sections[i+1]);
			break;
		} else if ((lastScrollTop === positions[i] && i === positions.length - 1)) {
			targetUp =  $(sections[i-1]);
			targetDown = $(sections[i]);
			break;
		}
	}

	// Choose direction
	if (scrollDirection === 'down') {
		targetElement = targetDown;
	} else if (scrollDirection === 'up') {
		targetElement = targetUp;
	}

	scrollThere(targetElement, 500);
});



// ABOUT SECTIONS DIVS

// Hide divs when click
let divs = document.querySelectorAll(".team-section__image div");
Array.from(divs).forEach(el => {
	el.addEventListener("click", () => {
		el.style.display = "none";
	})
});


// Team-section carousel
$('.team-carousel').owlCarousel({
	loop:true,
	dots: false,
	margin:0,
	slideBy: 2,
	nav:true,
	navText: [
		'<div class="arrow-left"><img src="./icons/arrow_left.svg" alt="left-arrow"></div>',
		'<div class="arrow-right"><img src="./icons/arrow_right.svg" alt="right-arrow"></div>'
	],
	items:2
});

