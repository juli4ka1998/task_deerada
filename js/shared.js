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
	console.log(9090);
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


let owlPlan = $('.plan-carousel');
owlPlan.owlCarousel({
	loop:true,
	dots: false,
	margin: 30,
	smartSpeed: 900,
	// mouseDrag: false,
	// nav:true,
	// navText: [
	// 	'<div class="arrow-right"><img src="./icons/arrow_right.svg" alt="right-arrow"></div>',
	// 	'<div class="arrow-left"><img src="./icons/arrow_left.svg" alt="left-arrow"></div>'
	// ],
	items:2
});

let owlCases = $('.cases-carousel');
owlCases.owlCarousel({
	loop:true,
	dots: false,
	margin: 0,
	smartSpeed: 900,
	// mouseDrag: false,
	nav:true,
	navText: [
		'<div class="arrow-right"><img src="./icons/arrow_right.svg" alt="right-arrow"></div>',
		'<div class="arrow-left"><img src="./icons/arrow_left.svg" alt="left-arrow"></div>'
	],
	items:3
});

owlCases.on('change.owl.carousel', function(event) {
	$('.cases-carousel .owl-item').addClass("hide-person");
});



$(".big-btn-white").click(function () {
	// console.log(9090);
	// menuBtnBar.removeClass("menu-btn-show");
	currentPosition = $(document).scrollTop();

	$(".connect-popup").removeClass("hidden");
	// header.css({
	// 	zIndex: "auto",
	// 	position: "absolute",
	// 	top: "+=" + currentPosition
	// });

	$(".connect-popup").animate({
		top: currentPosition,
	}, 500, "linear", function () {
		content.addClass("hidden");

		$(".connect-popup").css({
			top: 0
		});

		$(document).scrollTop(0);

		// header.css({
		// 	top: "-=" + currentPosition
		});
});
