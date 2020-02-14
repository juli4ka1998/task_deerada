// MENU

let currentPosition = 0;

let menuBtn = $(".menu-btn");
let menuBtnBar = $(".menu-btn__bar");
let menu = $(".menu-popup");
let header = $(".main-header");
let content = $(".main-content");
let contactPopup = $(".contact-popup");
let infoPopup = $(".info-popup");

// Add event listener to menu button
menuBtn.click(function () {
		//Change menu-btn
		menuBtn.toggleClass("menu-btn-clicked");

		if(menuBtn.hasClass("menu-btn-clicked")){
			// Hide content and show menu
			menuBtnBar.removeClass("menu-btn-show");
			currentPosition = $(document).scrollTop();

			menu.removeClass("hidden");
			header.addClass("menu-header");

			header.css({top: "+=" + currentPosition});
			menu.css({top: "+=" + currentPosition});

			$("body").addClass("disable-content");

			menu.delay(400).animate({
				top: currentPosition
			}, 300, "linear", function () {

				content.addClass("hidden");
				$(document).scrollTop(0);

				menu.css({top: 0});
				header.css({top: "-=" + currentPosition});

			});
		} else {
			// Hide menu and display main content
			content.removeClass("hidden");

			menu.css({top: currentPosition});
			header.css({top: "+=" + currentPosition});

			$(document).scrollTop(currentPosition);

			menu.delay(400).animate({
				top: "-=100%"
			}, 300, "linear", function () {

				menu.css({top: "-=" + currentPosition});
				header.css({top: "-=" + currentPosition});

				menu.addClass("hidden");
				header.removeClass("menu-header");

				menuBtnBar.addClass("menu-btn-show");
				$("body").removeClass("disable-content");
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


$(function () {
	let currentPosition = $(document).scrollTop();
	// Open popup
	function callPopup(popup) {
		$("body").addClass("disable-content");
		popup.removeClass("hidden");
		currentPosition = $(document).scrollTop();
		popup.css({
			top: "+=" + currentPosition
		});

		popup.animate({
			top: currentPosition
		}, 300, "linear", function () {
			menu.addClass("hidden");
			content.addClass("hidden");
			popup.css({
				top: 0
			});
		});
	};

	$(".call-connect-popup").click(function () {
		callPopup(contactPopup);
	});

	$(".call-info-popup").click(function () {
		callPopup(infoPopup);
	});

	let popup = $(".popup");

	// Close popup
	$(".popup .close-btn").click(function () {
		popup.css({
			top: currentPosition
		});
		$(document).scrollTop(currentPosition);
		if(menuBtn.hasClass("menu-btn-clicked")) {
			menu.removeClass("hidden");
		} else {
			content.removeClass("hidden");
		}

		popup.animate({
			top: "-=100%",
		}, 300, "linear", function () {
			popup.css({
				top: "-100%"
			});
			popup.addClass("hidden");
			$("body").removeClass("disable-content");
		});

	});
});

$(".back .close-btn").click(function (event) {
	event.preventDefault();
	history.back();
});

// Select item in popup
$( "#item-select" )
	.selectmenu()
	.selectmenu("menuWidget")
	.addClass( "overflow" );

$('.ui-icon').click(function() {
	$('#chose_option').val('chose_option');
});