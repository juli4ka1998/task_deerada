let owlPlan = $('.plan-carousel');
owlPlan.owlCarousel({
	loop: false,
	center: true,
	dots: false,
	margin: 30,
	smartSpeed: 900,
	rewind: false,
	slideSpeed : 7000,
	items: 2
});

let index = 0;
let prevIndex = -1;
let count = 0;
owlPlan.on('translated.owl.carousel', function(event) {
	index = event.item.index;
	count = event.item.count;
});

owlPlan.on('mousewheel', '.owl-stage', function (e) {
	if (e.originalEvent.deltaY > 0) {
		if (index !== prevIndex && index !== count - 1) {
			prevIndex = index;
			owlPlan.trigger('next.owl', 500);
			e.preventDefault();
		} else if (index !== count - 1) {
			e.preventDefault();
		} else {
			prevIndex = -1;
		}
	} else {
		if (index !== prevIndex && index !== 0) {
			prevIndex = index;
			owlPlan.trigger('prev.owl', 500);
			e.preventDefault();
		} else if (index !== 0) {
			e.preventDefault();
		} else {
			prevIndex = -1;
		}
	}
});

let owlCases = $('.cases-carousel');
let owlTeam = $('.team-carousel');

function initCarousel(owl, i, owlName, speed) {
	owl.owlCarousel({
	loop:true,
	dots: false,
	margin: 0,
	smartSpeed: speed,
	mouseDrag: false,
	nav:true,
	navText: [
		'<div class="arrow-right"><img src="./icons/arrow_right.svg" alt="right-arrow"></div>',
		'<div class="arrow-left"><img src="./icons/arrow_left.svg" alt="left-arrow"></div>'
	],
	items: i
});
	owl.on('change.owl.carousel', function(event) {
		$(owlName + ' .owl-item').addClass("hide-active-item");
	});
}

initCarousel(owlTeam, 2, ".team-carousel", 1100);
initCarousel(owlCases, 3, ".cases-carousel", 900);
