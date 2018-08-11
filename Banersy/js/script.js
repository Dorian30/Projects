(function($) {  
	'use strict';
    $(document).ready(function(){
        
        var headerHeight = $('.scroll-navbar').height();
        
        /*------------
            SIDENAV
        -------------*/
        
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks.
            draggable: true, // Choose whether you can drag to open on touch screens,
        });
        
        /*------------------
            SCROLL NAVBAR
        -------------------*/
        
        $(window).scroll(function(){
            // Change of background nav display while scrolling.
            if ($(this).scrollTop() > 640)
                $('.scroll-navbar').fadeIn(300);  
            else
                $('.scroll-navbar').fadeOut(350);
            
        });
        
        /*----------------
            SMOOTH SCROLL
        -----------------*/
        
        $('a').click(function(){
            var target = $(this).attr('href');
            console.log(target);
            if (target.substr(0,1) === "#"){
                
                $('html, body').animate({
                    scrollTop: $(target).offset().top - headerHeight
                }, 750);
                
                return false;
            } // End - if 
        });  // End - click (Event)
    });
})(jQuery);