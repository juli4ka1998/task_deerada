// MENU

// Add event listener to close button
// let closeBtn = document.querySelector(".close-icon");
// closeBtn.addEventListener("click", () => {
// 	// Hide menu and display main content
// 	document.querySelector(".menu").style.display = "none";
// 	document.querySelector(".main-content").style.display = "block";
// });

let currentPosition = 0;

// Add event listener to menu button
let menuBtn = $(".menu-btn");
let menuBtnBar = $(".menu-btn__bar");
let menu = $(".menu");
let header = $(".main-header");
let content = $(".main-content");
menuBtn.click(function () {
		//Change menu-btn
		menuBtn.toggleClass("menu-btn-clicked");

		if(menuBtn.hasClass("menu-btn-clicked")){
			// Hide content and show menu
			menuBtnBar.removeClass("menu-btn-show");
			currentPosition = $(document).scrollTop();

			menu.removeClass("hidden");
			header.css({
				zIndex: "auto",
				position: "absolute",
				top: "+=" + currentPosition
			});

			menu.delay(400).animate({
				top: currentPosition,
			}, 500, "linear", function () {
				content.addClass("hidden");

				menu.css({
					top: 0
				});

				$(document).scrollTop(0);

				header.css({
					top: "-=" + currentPosition
				});
			});
		} else {
			// Hide menu and display main content

			content.removeClass("hidden");

			menu.css({
				top: currentPosition
			});

			header.css({
				top: "+=" + currentPosition
			});

			$(document).scrollTop(currentPosition);

			menu.delay(400).animate({
				top: "-140%",
			}, 500, "linear", function () {
				menu.addClass("hidden");

				header.css({
					position: "fixed",
					"z-index": "300",
					top: "-=" + currentPosition
				});

				menuBtnBar.addClass("menu-btn-show");

			});
		}

});

// Show sub-menu
$(".menu-services .main-item").hover(function () {
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

