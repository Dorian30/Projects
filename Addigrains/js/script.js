/*

#MADE BY: MENU DIGITAL.
#DEVELOPED BY: DORIAN ALVARADO. / SITE: 
#DESIGNED BY: ADDIGRAINS.
#COPYRIGHT: ADDIGRAINS 2017.
#MADE WITH MATERIALIZE V1.0 ALPHA AND JQUERY V3.1

*/

(function(){
	'use strict';
	$(document).ready(function(){
		
		
		/*==============================
				GENERAL SETTINGS
        ===============================*/
		
		//Materialize Sidenav Init
		$('.sidenav').sidenav();
		
		//Materialize Modals Init
		$('.modal').modal();
		
		/* Selects all elements with dinamic responsive text,
		in other word: text that is going to be shorten or increase
		when the window width changes. Example: Home carousel text*/
		var dynamicText = $('.dynamic-text');
		
		//Gets dynamicText line height
		var dynamicText_LineHeight = dynamicText.css('line-height');
		
		//Stores the original text from selected elements
		var dynamicText_FullContent = new Array();
		for(var i = 0; i < dynamicText.length; i++){
			dynamicText_FullContent[i] = new Array();
			dynamicText_FullContent[i][0] = dynamicText[i].innerHTML;
			dynamicText_FullContent[i][1] = dynamicText[i].innerHTML.length;
		} 
		
		/*---- DYNAMIC TEXT FUNCTIONS ----*/
		
		//Window Width When the page loads the first time 
		var browserCurrentWidth = $(window).width(); 
		var browserNewWidth = 0;
		
		//Checks the dynamic text when the page loads the first time 
		checkDynamicText();
		
		//Counts the text lines of a dynamic text
        function countLines(elem){
            var height = elem.clientHeight;
            var lineHeight = parseFloat(dynamicText_LineHeight);
            
            var lines = height / lineHeight;
            return Math.round(lines); 
        };
		
		//Limits the amount of text lines of a dynamic text
        function truncateText(lines, elem){
			//Code...
			var fullText = elem.innerHTML;
            var textLength = fullText.length; 
            var shortText;
            
            while(lines >= 5){
                textLength -= 10;
                shortText = fullText.substring(0, textLength) + "...";
                elem.innerHTML = shortText;
                lines = countLines(elem);
            }
            
        };
		
		//Increases the amount of text lines of a dynamic text 
		function increaseText(lines, elem, dynamicText_fullContent, dynamicTextFullLength){
            var fullText = elem.innerHTML;
            var textLength = fullText.length;
            var newText;
			
            while(lines < 5 && textLength < dynamicTextFullLength ){
                textLength += 10;
                newText = dynamicText_fullContent.substring(0, textLength);
                elem.innerHTML = newText + "...";
                lines = countLines(elem);
            }
		};
		
		//Checks if a DynamicText length needs to be increased or decreased.
		function checkDynamicText(browserNewWidth){

			if(browserCurrentWidth > browserNewWidth){
				//Asigns the new width as the current width 
				browserCurrentWidth= browserNewWidth;
				var isIncreasing = false;

			}else if(browserCurrentWidth < browserNewWidth){
				//Asigns the new width as the current width 
				browserCurrentWidth = browserNewWidth;
				var isIncreasing = true;

			}//if...
			
			for(var i = 0; i < dynamicText.length; i++){
				var elem = dynamicText[i];
				var lines = countLines(elem);

				if(lines >= 5
				   && !isIncreasing){
					
					truncateText(lines, elem);
					
				}else if(lines < 5
						&& isIncreasing){

					increaseText(lines,
								 elem,
								 dynamicText_FullContent[i][0],
								 dynamicText_FullContent[i][1]);
				}//if...
			}//for...
			
		};//checkDynamicText
		
		//Resize window event
		$(window).resize(function(){
			browserNewWidth = $(this).width();
			//Home carousel fix
			displaySlide();
			//DynamicText
			checkDynamicText(browserNewWidth);
			
		});
		
		$('.materialboxed').materialbox();
		
		/*==============================
					HOME (P1)
        ===============================*/
		
		/*------------------------------
				   HOME CAROUSEL
        --------------------------------*/
        
		//Materialize Carousel Init
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
			onCycleTo: checkDynamicText
        });
    
		//Arrow Carousel right button
        $('.icon-angle-double-right').click(function(){
            $('.carousel').carousel('next');

        });
        
		//Arrow Carousel left button
        $('.icon-angle-double-left').click(function(){
            $('.carousel').carousel('prev');
        });
        
        /*NOTE: This prevents responsive problems with materialize carousel when the items don't have any background (Used in window resizing) */
        function displaySlide(){
			
			//Hides every carousel item
            $('.carousel-item').css({
                "z-index": "-100",
                "visibility": "hidden"
            })
            
			//Makes the carousel active item visible
            $('.carousel-item.active').css({
                "visibility": "visible"
            })
        };
		
		
		/*==============================
					ABOUT (P2)
        ===============================*/
		
		/*------------------------------
				ADDIGRAINS TEAMS
        --------------------------------*/
		
		$('.owl-carousel1').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout:1700,
            autoplayHoverPause:false,
            navText: [''],
            responsive: {
                0: {
                    items: 2,
                    autoHeight: true
                },
                500: {
                    items: 3,
                    margin: 0,
                    autoHeight: true
                },
                800: {
                    autoHeight: true,
                    items: 4,
                    margin: 0
                },
                1000: {
                    autoHeight: true,
                    items: 4,
                    margin: 0
                }
            }
        })
		
		/*------------------------------
				ADDIGRAINS ALLIES
        --------------------------------*/
        
        $('.owl-carousel2').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout:1700,
            autoplayHoverPause:false,
            navText: [''],
            responsive: {
                0: {
                    items: 2,
                    margin: 35
                },
                550: {
                    items: 3,
                    margin: 35
                },
                800: {
                    items: 3,
                    margin: 70
                },
                945: {
                    items: 4,
                    margin: 70
                }
            }
        })
		
		
		/*==============================
				PRODUCTS PAGE (P3)
        ===============================*/
		
		$('#products-link a[href^="#!"]').click(function(event){
			//Prevents link from triggering. 
			event.preventDefault();
			
            var target = $(this);
			
			//Changes the active link. 
			$('#products-link .active').removeClass('active');
			target.addClass('active');
			
			var id = "#" + this.textContent;
			$('.products-page .collapsibles-wrapper').removeClass("active");
			$(id).addClass("active");
			
			
		});
		
		/*==============================
				LAB PAGE (P4)
        ===============================*/
		
		$('#lab-link a[href^="#!"]').click(function(event){
			//Prevents link from triggering. 
			event.preventDefault();
			
            var target = $(this);
			
			//Changes the active link. 
			$('#lab-link .active').removeClass('active');
			target.addClass('active');
			
			var id = "#" + this.textContent;
			$('.lab-page .content, .lab-page .collapsibles-wrapper').removeClass("active");
			$(id).addClass("active");
			
			
		});
		
		//Materialize Collapsible Init.
		$('.collapsible').collapsible();
		
  	});
})();