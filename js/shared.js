// MENU

// Add event listener to close button
// let closeBtn = document.querySelector(".close-icon");
// closeBtn.addEventListener("click", () => {
// 	// Hide menu and display main content
// 	document.querySelector(".menu").style.display = "none";
// 	document.querySelector(".main-content").style.display = "block";
// });

let currentPosition = 100;
// Add event listener to menu button
let menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("menu-btn-clicked");

	// $(".main-header").addClass("header-menu");
	// console.log($(".menu-btn").siblings());
	// $(".menu-btn").siblings().addClass("hidden");
	// $(".main-header").children[1].style.display = "none";

	// Hide content and show menu
	// setTimeout(document.querySelector(".menu").style.display = "flex", 500);

	if(menuBtn.classList.contains("menu-btn-clicked")){
		currentPosition = $(document).scrollTop();

		document.querySelector(".menu").style.display = "flex";
		$(".main-header").css({
			"z-index": "auto",
			position: "absolute",
			top: "+=" + currentPosition
		});

		$(".menu").delay(400).animate({
			top: $(document).scrollTop(),
			// opacity: 1
		}, 300, "linear", function () {
			$(".main-content").addClass("hidden");
			$(".menu").css({
				top: 0
			});
			$(document).scrollTop(0);
			$(".main-header").css({
				// position: "absolute"
				top: "-=" + currentPosition
			});
		});
	} else {
		$(".main-content").removeClass("hidden");
		$(".menu").css({
			top: currentPosition
		});
		$(".main-header").css({
			// position: "fixed"
			top: "+=" + currentPosition

		});
		$(document).scrollTop(currentPosition);
		$(".menu").delay(400).animate({
			top: "-140%",
			// opacity: 1
		}, 300, "linear", function () {
			document.querySelector(".menu").style.display = "none";
			$(".main-header").css({
				position: "fixed",
				"z-index": "300",
				top: "-=" + currentPosition
			});
		});
	}

	// document.querySelector(".main-content").style.display = "none";

});

// Show sub-menu
$('.menu-services .main-item').hover(function () {
	$(".menu-sub").fadeOut(200);
	$(".menu-services .main-item").removeClass('active-item ');
	$(this).addClass('active-item ');
}, function () {});


$('.menu-services-item').hover(function () {
	$(this).siblings().fadeIn(300);
}, function () {});


// HEADER

const changeHeader = () => {

	// Get header items
	let sections = document.querySelector('.sections');
	let logo = document.querySelector('.logo img');
	let menuBtnItems = document.querySelectorAll('.menu-btn__bar');

	// Check if it is the slider section or not
	if(this.scrollY <= 10) {
		//Change header items to light theme
		sections.style.color = "white";
		// logo.style.backgroundImage = 'url("images/logo.png")';
		logo.src = "images/logo.png";
		Array.from(menuBtnItems).forEach(el => {
			el.style.backgroundColor = 'white';
		});

	} else {
		//Change header items to dark theme
		sections.style.color = "black";
		// logo.style.backgroundImage = 'url("images/logo_dark.png")';
		logo.src = "images/logo_dark.png";
		Array.from(menuBtnItems).forEach(el => {
			el.style.backgroundColor = 'black';
			// el.style.transitionDelay = '0s';
		});
	}
};

changeHeader();
window.onscroll = () => {
	changeHeader();
};

