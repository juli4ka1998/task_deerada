// SLIDER SECTION

let changeSlide = (type) => {
	let i;

	//Get elements that should be changed
	let slide = document.getElementsByClassName("slide");
	let number = document.querySelector(".slide-number span");
	let infoNumber = document.querySelector(".slide-info__number");
	let infoName = document.querySelector(".slide-info__name");

	// Hide all slides
	if(slide[slideIndex-1]) {
		slide[slideIndex - 1].classList.remove("show-next-element");
		slide[slideIndex - 1].classList.remove("show-prev-element");
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

};

let slideIndex = 0;
changeSlide("next");

// Set interval when slide will change
// let interval = setInterval(() => {changeSlide("next")}, 5000);

// Get buttons
let rightBtn = document.querySelector("#slider-section .arrow-right");
let leftBtn = document.querySelector("#slider-section .arrow-left");

// Add event listener to buttons
rightBtn.addEventListener('click', () => {
	changeSlide("next");
	// clearInterval(interval);
	// interval = setInterval(() => {changeSlide("next")}, 5000);
});
leftBtn.addEventListener('click', () => {
	changeSlide("prev");
	// clearInterval(interval);
	// interval = setInterval(() => {changeSlide("next")}, 5000);
});

// SCROLL SECTIONS

// Animate page when scrolling
const scrollThere = (targetElement, speed) => {
	if(document.querySelector(".menu").style.display !== "flex") {
		// console.log(targetElement.offset().top);
		$('html, body').stop().animate(
			{scrollTop: targetElement.offset().top},
			speed, "linear"
		);
	}
};

// Mouse wheel event
// $(window).on('mousewheel',  e => {
// 	// Get position of each section
// 	let sections = document.querySelectorAll('#slider-section, #about-section, #portfolio-section, #team-section, #contacts-section');
//
// 	let positions = [];
// 	for (let i = 0; i < sections.length; i++) {
// 		positions[i] = sections[i].offsetTop;
// 	}
//
// 	let  lastScrollTop = $(this).scrollTop(),
// 		scrollDirection,
// 		targetUp,
// 		targetDown,
// 		targetElement;
//
// 	// Find direction
// 	if ( e.originalEvent.wheelDelta > 0 ) {
// 		scrollDirection = 'up';
// 	} else if ( e.originalEvent.wheelDelta <= 0 ) {
// 		scrollDirection = 'down';
// 	}
//
// 	// Find scroll position
// 	for (let i = 0; i < positions.length; i++) {
// 		if (lastScrollTop === positions[i] && i !== 0 && i !== positions.length - 1) {
// 				targetUp = $(sections[i-1]);
// 				targetDown = $(sections[i+1]);
// 				console.log(1);
// 			break;
// 		} else if ((lastScrollTop === positions[i] && i === 0) || (lastScrollTop > positions[i] && lastScrollTop < positions[i+1])) {
// 			targetUp =  $(sections[i]);
// 			targetDown = $(sections[i+1]);
// 			// console.log(2);
// 			break;
// 		} else if ((lastScrollTop === positions[i] && i === positions.length - 1)) {
// 			targetUp =  $(sections[i-1]);
// 			targetDown = $(sections[i]);
// 			console.log(3);
// 			break;
// 		}
// 	}
//
// 	// Choose direction
// 	if (scrollDirection === 'down') {
// 		targetElement = targetDown;
// 	} else if (scrollDirection === 'up') {
// 		targetElement = targetUp;
// 	}
//
// 	scrollThere(targetElement, 500);
// });



// ABOUT SECTIONS DIVS

// Hide divs when click
// let divs = document.querySelectorAll(".team-section__image div");
// Array.from(divs).forEach(el => {
// 	el.addEventListener("click", () => {
// 		el.style.display = "none";
// 	})
// });


// Team-section carousel
let owl = $('.team-carousel');
owl.owlCarousel({
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	loop:true,
	dots: false,
	margin: 0,
	smartSpeed: 900,
	mouseDrag: false,
	nav:true,
	navText: [
		'<div class="arrow-right"><img src="./icons/arrow_right.svg" alt="right-arrow"></div>',
		'<div class="arrow-left"><img src="./icons/arrow_left.svg" alt="left-arrow"></div>'
	],
	items:2
});

owl.on('change.owl.carousel', function(event) {
	$('.team-carousel .owl-item').addClass("hide-person");
});


$(function() {
	$.scrollify({
		section : ".content",
		// sectionName : "section-name",
		// interstitialSection : "",
		easing: "easeInOutExpo",
		scrollSpeed: 900,
		offset : 0,
		scrollbars: false,
		// standardScrollElements: "",
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
			// $('.text-decor').removeClass("ty");
			// console.log("init");
		}
	});
});

$(".slide img").hover(function(e){
	let parentOffset = $(this).parent().offset();
	//or $(this).offset(); if you really just want the current element's offset
	let relX = e.pageX - parentOffset.left;
	let relY = e.pageY - parentOffset.top;
	// if(relY > ($(this).height() / 2)) {
	// 	// console.log($(this).height());
	// 	// console.log(relY);
	// }
	// if(relX > ($(this).width() / 2)) {
	// }
	let x = relX - ($(this).width()/2);
	let y = relY - ($(this).height()/2);
	if(Math.abs(x) < Math.abs(y)){
		console.log("x");
	} else {
		console.log("y");
	}
	console.log(x + ' ' + y);
});
