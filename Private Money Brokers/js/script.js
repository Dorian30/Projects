(function($) {  
	'use strict';
    $(document).ready(function(){    
        
        // Global var. 
        var paddingAdded = false; 
        var linkClicked = false;
        var headerHeight = $('.navbar-bg').height();
        var sections = $('section');
        
        //Collapsable-menu
        $('.navbar-toggle').click(function(){
            $('.collapsable-nav').slideToggle("slow");
        });
        
        //Slide Up Collapsable Nav on Click
        $('.collapsable-nav a').click(function(){
            $('.collapsable-nav').slideUp("slow");
        });
        
        $(window).scroll(function(){
            // Change of background nav display while scrolling.
            if($(this).width() > 767){
                if ($(this).scrollTop() > 200){
                    $('.navbar-bg').fadeIn(300);
                    if (!paddingAdded){
                        addPadding();
                        paddingAdded = true; 
                    }   
                } else {
                    $('.navbar-bg').fadeOut(350);
                    if (paddingAdded){
                        removePadding();
                        paddingAdded = false;
                    }
                }
            } // End - If Responsive. 
            
            // Setting active states on fixed nav while scrolling.
            var currentPosition = $(this).scrollTop();
            sections.each(function(){
                var top = $(this).offset().top - headerHeight;
                var bottom = top + $('section').outerHeight();

                if ((currentPosition >= top && currentPosition <= bottom) && ($(this).attr('id') !== undefined && $(this).attr('id') !== 'terms')){
                    $('.navbar-fixed a').removeClass('active');
                    $('.navbar-fixed a[href="#'+$(this).attr('id')+'"]').addClass('active');
                }
                else if((currentPosition >= top && currentPosition <= bottom) && ($(this).attr('id') === undefined || $(this).attr('id') === 'terms')){
                    $('.navbar-fixed a').removeClass('active');
                    $('.navbar-fixed a[href="#about"]').addClass('active');
                }//End - If
            }); // End - Sections Function
            
        }); // End - Window.Scroll
    
    
        // Smooth scrolling.
        $('a').click(function(){
            var target = $(this).attr('href');
            linkClicked = true;
            if (target.substr(0,1) === "#"){
                
                $('html, body').animate({
                    scrollTop: $(target).offset().top - headerHeight
                }, 750);
                
                /*$('.navbar-fixed .active').removeClass('active');
                if ($(this).hasClass('button') || $(this).hasClass('to-content'))
                    $('.navbar-fixed a[href="' + target + '"]').addClass('active');
                else
                    $(this).addClass('active');*/
                
                return false;
            } // End - if 
        });  // End - click (Event)
        

        var addPadding = function(){
            $('.section-links').animate({
                paddingRight: 82},400);
        };

        var removePadding = function(){
            $('.section-links').animate({
                paddingRight: 44},400);
        };
    
   }); // End - Document.ready
})(jQuery); // IFEE
	