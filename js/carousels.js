let owlPlan = $('.plan-carousel');
owlPlan.owlCarousel({
	loop: false,
	center: true,
	dots: false,
	margin: 30,
	smartSpeed: 900,
	items: 2
});

let index = 0;
owlPlan.on('changed.owl.carousel', function(event) {
	index = event.item.index;
});

owlPlan.on('mousewheel', '.owl-stage', function (e) {
	if (e.originalEvent.deltaY > 0) {
		if (index !== 3) {
			owlPlan.trigger('next.owl', [2500]);
			e.preventDefault();
		}

	} else {
		if (index !== 0) {
			owlPlan.trigger('prev.owl', [2500]);
			e.preventDefault();
		}

	}
});

let owlCases = $('.cases-carousel');
let owlTeam = $('.team-carousel');

function initCarousel(owl, i, owlName) {
	owl.owlCarousel({
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
	items: i
});
	owl.on('change.owl.carousel', function(event) {
		$(owlName + ' .owl-item').addClass("hide-active-item");
	});
}

initCarousel(owlTeam, 2, ".team-carousel");
initCarousel(owlCases, 3, ".cases-carousel");