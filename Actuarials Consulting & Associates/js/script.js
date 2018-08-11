(function($){
	'use strict';
	$(document).ready(function(){
		
		//Init Modals
		$('.modal').modal();
		//Init Navbar Scrollspy
		$('.scrollspy').scrollSpy();
		
		//Home header particles init
		particlesJS('head-part-js',
			{
			"particles": {
			"number": {
			  "value": 80,
			  "density": {
				"enable": true,
				"value_area": 800
			  }
			},
			"color": {
			  "value": "#ffffff"
			},
			"shape": {
			  "type": "circle",
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 5
			  },
			  "image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			  }
			},
			"opacity": {
			  "value": 0.5,
			  "random": false,
			  "anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			  }
			},
			"size": {
			  "value": 3,
			  "random": true,
			  "anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			  }
			},
			"line_linked": {
			  "enable": true,
			  "distance": 150,
			  "color": "#ffffff",
			  "opacity": 0.4,
			  "width": 1
			},
			"move": {
			  "enable": true,
			  "speed": 2,
			  "direction": "none",
			  "random": false,
			  "straight": false,
			  "out_mode": "out",
			  "bounce": false,
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
			},
			"interactivity": {
			"detect_on": "canvas",
			"events": {
			  "onhover": {
				"enable": false,
				"mode": "repulse"
			  },
			  "onclick": {
				"enable": false,
				"mode": "push"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 400,
				"line_linked": {
				  "opacity": 1
				}
			  },
			  "bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			  },
			  "repulse": {
				"distance": 200,
				"duration": 0.4
			  },
			  "push": {
				"particles_nb": 4
			  },
			  "remove": {
				"particles_nb": 2
			  }
			}
			},
			"retina_detect": true
			} //Particles specifications
		); // End particles plugin init

		//Home slogan particles init
		particlesJS('slogan-part-js', 
			{
			  "particles": {
			    "number": {
			      "value": 90,
			      "density": {
			        "enable": true,
			        "value_area": 800
			      }
			    },
			    "color": {
			      "value": "#000"
			    },
			    "shape": {
			      "type": "circle",
			      "stroke": {
			        "width": 0,
			        "color": "#000"
			      },
			      "polygon": {
			        "nb_sides": 5
			      },
			      "image": {
			        "src": "img/github.svg",
			        "width": 100,
			        "height": 100
			      }
			    },
			    "opacity": {
			      "value": 0.5,
			      "random": false,
			      "anim": {
			        "enable": false,
			        "speed": 1,
			        "opacity_min": 0.1,
			        "sync": false
			      }
			    },
			    "size": {
			      "value": 3,
			      "random": true,
			      "anim": {
			        "enable": false,
			        "speed": 40,
			        "size_min": 0.1,
			        "sync": false
			      }
			    },
			    "line_linked": {
			      "enable": true,
			      "distance": 150,
			      "color": "#000",
			      "opacity": 0.4,
			      "width": 1
			    },
			    "move": {
			      "enable": true,
			      "speed": 4,
			      "direction": "none",
			      "random": false,
			      "straight": false,
			      "out_mode": "out",
			      "bounce": false,
			      "attract": {
			        "enable": false,
			        "rotateX": 600,
			        "rotateY": 1200
			      }
			    }
			  },
			  "interactivity": {
			    "detect_on": "canvas",
			    "events": {
			      "onhover": {
			        "enable": false,
			        "mode": "repulse"
			      },
			      "onclick": {
			        "enable": false,
			        "mode": "push"
			      },
			      "resize": true
			    },
			    "modes": {
			      "grab": {
			        "distance": 400,
			        "line_linked": {
			          "opacity": 1
			        }
			      },
			      "bubble": {
			        "distance": 400,
			        "size": 40,
			        "duration": 2,
			        "opacity": 8,
			        "speed": 3
			      },
			      "repulse": {
			        "distance": 200,
			        "duration": 0.4
			      },
			      "push": {
			        "particles_nb": 4
			      },
			      "remove": {
			        "particles_nb": 2
			      }
			    }
			  },
			  "retina_detect": true
			}
		); // End particles plugin init
		
		//Services carousel plugin
		$('#services').owlCarousel({
			loop: true,
			center: true,
			margin: 40,
			nav: false,
			dots: true,
			responsive:{
				0:{
					items:2,
					dots: true
				},
				600:{
					items:2
				},
				1000:{
					items:4,
					
				}
			}
		});

		// $('#services').owlCarousel({
		//     margin:10,
		//     loop:true,
		//     autoWidth:true,
		//     items:4
		// });

		//Clients carousel plugin
		$('#clients-list').owlCarousel({
		    loop:true,
		    center: true,
		    margin:40,
		    nav:false,
			dots:false,
			autoplay:true,
    		autoplayTimeout:5000,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		});
		
		var cardWidth = $('.services-list .card').width();
		$(`.services-list .left-filter, 
			.services-list .right-filter`).css({
			"width": cardWidth/2
		});
		
		$(window).resize(function(){
			
			setTimeout(
				function(){
					var cardWidth = $('.services-list .card').width();
					$('.services-list .left-filter, .services-list .right-filter').css({
						"width": cardWidth/2
					});
				}, 250);
			
		});
		
		
		//Scroll listener
		$(window).scroll(function(){
			var scrollPosition = $(this).scrollTop();
			changeNavbarState(scrollPosition);
		});
		
		//Init navbar state on load
		var scrollPosition = $(this).scrollTop();
		changeNavbarState(scrollPosition);
		
		//Change navbar state
		function changeNavbarState(scrollPosition){
			if(scrollPosition > 100)
				$('.navbar').css({background: "black"});
			else
				$('.navbar').css({background: "transparent"});
		};
		
		//About Button Menu
		$('.about .button-list a').click(function(){
			var id = "#" + removeAccents(this.textContent);
			
			//Changes button background
			$('.about .button-list a').removeClass("active");
			$(this).addClass("active");
			
			//Changes info
			$('.about .info').removeClass("active");
			$(id).addClass("active");
		});
		
		//Removes accents
		function removeAccents(string){
			string = string.replace("á", "a");
			string = string.replace("é", "e");
			string = string.replace("í", "i");
			string = string.replace("ó", "o");
			string = string.replace("ú", "u");
			
			return string;
		}

		
	}); //Document ready.
})(jQuery); //IIFE (Immediately Invoked Function Expresion).

