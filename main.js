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
let rightBtn = document.querySelector(".arr-right");
let leftBtn = document.querySelector(".arr-left");

// Add event listener to buttons
rightBtn.addEventListener('click', () => {changeSlide("next")});
leftBtn.addEventListener('click', () => {changeSlide("prev")});


// MENU

// Add event listener to close button
let closeBtn = document.querySelector(".close-icon");
closeBtn.addEventListener("click", () => {
	// Hide menu and display main content
	document.querySelector(".menu").style.display = "none";
	document.querySelector(".main-content").style.display = "block";
});

// Add event listener to menu button
let menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
	// Hide content and show menu
	document.querySelector(".menu").style.display = "flex";
	document.querySelector(".main-content").style.display = "none";
});

// SCROLL SECTIONS

// Animate page when scrolling
const scrollThere = (targetElement, speed) => {
	$('html, body').stop().animate(
		{ scrollTop: targetElement.offset().top },
		speed,
		'linear'
	);
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
		if (lastScrollTop === positions[i] && i !== 0 && i !== positions.length -1) {
				targetUp = $(sections[i-1]);
				targetDown = $(sections[i+1]);
			break;
		} else if ((lastScrollTop === positions[i] && i === 0) || (lastScrollTop > positions[i] && lastScrollTop < positions[i+1])) {
			targetUp =  $(sections[i]);
			targetDown = $(sections[i+1]);
			break;
		}
	}

	// Choose direction
	if (scrollDirection === 'down') {
		targetElement = targetDown;
	} else if (scrollDirection === 'up') {
		targetElement = targetUp;
	}

	scrollThere(targetElement, 1);
});


// HEADER

const changeHeader = () => {

	// Get header items
	let sections = document.querySelector('.sections');
	let logo = document.querySelector('.logo div');
	let menuBtnItems = document.querySelectorAll('.menu-btn__bar');

	// Check if it is the slider section or not
	if(this.scrollY <= 10) {
		//Change header items to light theme
		sections.style.color = "white";
		logo.style.backgroundImage = 'url("images/logo.png")';
		Array.from(menuBtnItems).forEach(el => {
			el.style.backgroundColor = 'white';
		});

	} else {
		//Change header items to dark theme
		sections.style.color = "black";
		logo.style.backgroundImage = 'url("images/logo_dark.png")';
		Array.from(menuBtnItems).forEach(el => {
			el.style.backgroundColor = 'black';
		});
	}
};

changeHeader();
window.onscroll = () => {
	changeHeader();
};

// ABOUT SECTIONS DIVS

// Hide divs when click
let divs = document.querySelectorAll(".team-section__image div");
Array.from(divs).forEach(el => {
	el.addEventListener("click", () => {
		el.style.display = "none";
	})
});


