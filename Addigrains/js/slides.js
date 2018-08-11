(function(){
	'use strict';
	$(document).ready(function(){
		$('.header').vegas({
			timer: false, 
			delay: 3500,
			transition: 'fade',
			slides: [{src: 'img/home-slide1.jpg'},
					 {src: 'img/home-slide2.jpg'},
					 {src: 'img/home-slide3.jpg'},
					 {src: 'img/home-slide4.jpg'}]
		});
	});
})();