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
	menuBtn.classList.add("menu-btn-clicked");

	// Hide content and show menu
	document.querySelector(".menu").style.display = "flex";
	document.querySelector(".main-content").style.display = "none";
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
		});
	}
};

changeHeader();
window.onscroll = () => {
	changeHeader();
};

