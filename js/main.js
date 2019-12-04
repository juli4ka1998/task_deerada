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





// $(".slide img").hover(function(e){
// 	let parentOffset = $(this).parent().offset();
// 	//or $(this).offset(); if you really just want the current element's offset
// 	let relX = e.pageX - parentOffset.left;
// 	let relY = e.pageY - parentOffset.top;
// 	// if(relY > ($(this).height() / 2)) {
// 	// 	// console.log($(this).height());
// 	// 	// console.log(relY);
// 	// }
// 	// if(relX > ($(this).width() / 2)) {
// 	// }
// 	let x = relX - ($(this).width()/2);
// 	let y = relY - ($(this).height()/2);
// 	if(Math.abs(x) < Math.abs(y)){
// 		console.log("x");
// 	} else {
// 		console.log("y");
// 	}
// 	console.log(x + ' ' + y);
// });


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

