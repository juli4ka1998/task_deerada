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
let menu = $(".menu-popup");
let header = $(".main-header");
let content = $(".main-content");
menuBtn.click(function () {
		//Change menu-btn
	// console.log(9090);
		menuBtn.toggleClass("menu-btn-clicked");

		if(menuBtn.hasClass("menu-btn-clicked")){
			// Hide content and show menu
			menuBtnBar.removeClass("menu-btn-show");
			currentPosition = $(document).scrollTop();




			menu.removeClass("hidden");
			let scroll = ($(document).width() - menu.width()) ;
			header.css({
				zIndex: "auto",
				position: "absolute",
				top: "+=" + currentPosition,
				marginRight: scroll
				// right: "calc((100 / 1920 * 100vw) + (100vw - 100%))"
			});

			$("body").css({
				height: "100%",
				overflowY: "hidden"
			});

			menu.css({
				paddingRight: scroll
			});

			menu.delay(400).animate({
				top: currentPosition,
			}, 500, "linear", function () {
				content.addClass("hidden");
				menu.css({
					top: 0,
					// paddingRight: scroll
				});

				$(document).scrollTop(0);

				header.css({
					top: "-=" + currentPosition,
					// right: "calc((100 / 1920 * 100vw) + (100vw - 100%))"
					// marginRight: scroll
				});
			});
		} else {
			// Hide menu and display main content

			content.removeClass("hidden");

			menu.css({
				top: currentPosition,
				// paddingRight: 0
			});

			header.css({
				top: "+=" + currentPosition,
				// marginRight: 0
			});

			$(document).scrollTop(currentPosition);

			menu.delay(400).animate({
				top: "-140%",
			}, 500, "linear", function () {
				menu.css({
					paddingRight: 0
				});
				menu.addClass("hidden");


				header.css({
					position: "fixed",
					"z-index": "300",
					top: "-=" + currentPosition,
					marginRight: 0
					// right: "calc(100 / 1920 * 100vw)"
				});

				menuBtnBar.addClass("menu-btn-show");
				$("body").css({
					height: "auto",
					overflow: "auto"
				});

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
	currentPosition = $(document).scrollTop();

	$(".connect-popup").removeClass("hidden");

	$(".connect-popup").animate({
		top: currentPosition,
	}, 500, "linear", function () {
		content.addClass("hidden");

		$(".connect-popup").css({
			top: 0
		});

		$(document).scrollTop(0);
		});
});

$(".popup .close-btn").click(function () {
	// currentPosition = $(document).scrollTop();
	content.removeClass("hidden");
	$(".connect-popup").css({
		top: currentPosition
	});
	$(document).scrollTop(currentPosition);

	$(".connect-popup").animate({
		top: "-140%",
	}, 500, "linear", function () {

		$(".connect-popup").addClass("hidden");



		// $(document).scrollTop(0);
	});
});
