$(document).ready(function() {
	$('.preview-slider').owlCarousel({
		autoHeight: false,
		rtl:false,
		loop:false,
		smartSpeed: 700,
		margin:0,
		nav : true,
		pagination : true,
		navText: false,
		navClass: ['preview-slider__arrow preview-slider__arrow_prev','preview-slider__arrow preview-slider__arrow_next'],
		items:1,
		responsive:{0:{items:1}}
	});

	$('.menu-icon').click(function() {
		$(this).toggleClass('menu-icon__active');
		$('.mobile-menu').toggleClass('mobile-menu__active');
	});
});

