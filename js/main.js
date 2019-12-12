// SLIDER SECTION

// Slide info and number animation
function restartAnimation(element) {
	element.classList.remove("show-slide-number");
	void element.offsetWidth;
	element.classList.add("show-slide-number");
}

let changeSlide = (type) => {

	//Get elements that should be changed
	let slide = document.getElementsByClassName("slide");
	let number = document.querySelector(".slide-number span");
	let infoNumber = document.querySelector(".slide-info__number");
	let infoName = document.querySelector(".slide-info__name");



	// Hide all slides
	if(slide[slideIndex - 1]) {
		slide[slideIndex - 1].classList.remove("show-next-element");
		slide[slideIndex - 1].classList.remove("show-prev-element");
		slide[slideIndex - 1].classList.remove("disable-animation");
	} else {
		slide[slideIndex].classList.add("disable-animation");
	}

	// Find direction
	if (type === "next") {
		if(slide[slideIndex-1])
			slide[slideIndex - 1].classList.add("hide-element-left");
		slideIndex++;
		if (slideIndex > slide.length) {
			slideIndex = 1;
		}
		slide[slideIndex - 1].classList.add("show-next-element");
	} else {
		if(slide[slideIndex-1])
			slide[slideIndex - 1].classList.add("hide-element-right");
		slideIndex--;
		if (slideIndex < 1) {
			slideIndex = slide.length ;
		}
		slide[slideIndex - 1].classList.add("show-prev-element");
	}

	// Show slide and its info
	slide[slideIndex - 1].classList.remove("hide-element-right");
	slide[slideIndex - 1].classList.remove("hide-element-left");

	infoName.innerHTML = slide[slideIndex-1].firstElementChild.innerHTML;
	number.innerHTML = `0${slideIndex}`;
	infoNumber.innerHTML = `0${slideIndex}`;

	restartAnimation(infoName);
	restartAnimation(number);
	restartAnimation(infoNumber);
};

let slideIndex = 0;
changeSlide("next");

// Set interval when slide will change
let interval = setInterval(() => {changeSlide("next")}, 5000);

// Get buttons
let rightBtn = document.querySelector("#slider-section .arrow-right");
let leftBtn = document.querySelector("#slider-section .arrow-left");

// Add event listener to buttons
rightBtn.addEventListener('click', () => {
	changeSlide("next");
	clearInterval(interval);
	interval = setInterval(() => {changeSlide("next")}, 5000);
});
leftBtn.addEventListener('click', () => {
	changeSlide("prev");
	clearInterval(interval);
	interval = setInterval(() => {changeSlide("next")}, 5000);
});

// HEADER

const changeHeader = () => {

	// Get header items
	let sections = document.querySelector('.main-header .sections');
	let logo = document.querySelector('.logo img');
	let menuBtnItems = document.querySelectorAll('.menu-btn__bar');

	// Check if it is the slider section or not
	if(this.scrollY <= 10) {
		//Change header items to light theme
		sections.style.color = "white";
		logo.src = "images/logo.png";
		Array.from(menuBtnItems).forEach(el => {
			el.style.backgroundColor = 'white';
		});

	} else {
		//Change header items to dark theme
		sections.style.color = "black";
		logo.src = "images/logo_dark.png";
		Array.from(menuBtnItems).forEach(el => {
			el.style.backgroundColor = 'black';
		});
	}
};

changeHeader();
window.onscroll = () => {
	changeHeader();
};

// Scroll sections

$(function() {
	$.scrollify({
		section : ".content",
		easing: "easeInOutExpo",
		scrollSpeed: 900,
		offset : 0,
		scrollbars: false,
		setHeights: true,
		overflowScroll: true,
		updateHash: true,
		touchScroll:true,
		before:function() {
			let current = $.scrollify.current();
			current.removeClass("current-item");
		},
		after:function() {
			let current = $.scrollify.current();
			current.addClass("current-item");
		},
		afterResize:function() {},
		afterRender:function() {
			let current = $.scrollify.current();
			current.addClass("current-item");
		}
	});


	$(".sections a:not(.blog-link)").click(function() {
		$.scrollify.move($(this).index() + 1);
		if ($(this).parents('.menu-popup').length)
			location.reload();
	});

	$(".logo a").click(function() {
		$.scrollify.move($(this).index());
	});
});

