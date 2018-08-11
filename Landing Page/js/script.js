(function($) {  
	'use strict';
    $(document).ready(function() {
        Materialize.updateTextFields();
        $('select').material_select();
        
        $('.sub-field .input-field input[type=number]').on("focus", function(){
            $('.hdprice-range label').css({
                "color": "#00f9d7"
            });
        });
        
        $('.sub-field .input-field input[type=number]').on("focusout", function(){
            $('.hdprice-range label').css({
                "color": "white"
            });
        });
        
         $('body').vegas({
            timer: false, 
            delay: 3500,
            transition: 'fade',
            slides: [{src: 'img/slide1-min.jpeg'},
                     {src: 'img/slide2-min.jpg'},
                     {src: 'img/slide3-min.jpg'},
                     {src: 'img/slide4-min.jpeg'}]
             
        });
        
        /*First load IFEE to check if message is defined - If it is true then display: block*/
        (function(){
            var ptext = $('.validator').html();
            if( !(ptext == "" || ptext.charAt(1) == " " ) ){
                $('.validator').css({
                "display": "block"
                });
                console.log($('.validator').html());
            }
        })();
        
        $('.button-send').click(function(){
            
            var msg_error;
            var name = $('#name').val();
            var last_name = $('#last-name').val();
            var min_price = parseInt($('#min-price').val());
            var max_price = parseInt($('#max-price').val());
            var desired_area = $('#desired-area').val();
            
            var type_buyer = $('#type-buyer').val();
            var purchase_with = $('#purchase-with').val();
            var language = $('#language').val();
            var lead_source = $('#lead-source').val();
            
            
            var validation = function(){
                $('.validator').html(msg_error);
                
                if($('.validator').hasClass("correct"))
                    $('.validator').addClass("incorrect");
                
                $('.validator').css({
                "display": "block"
                });
            };
            
            if(name == ""){
                msg_error = 'Please write your Name';
                validation();
                return false;
            }
            
            if(last_name == ""){
                msg_error = 'Please write your Last Name';
                validation();
                return false;
            }
            
            if(type_buyer == null){
                msg_error = 'You have to select an option for "Type of buyer"';
                validation();
                return false;
            }
            
            if(purchase_with == null){
                msg_error = 'You have to select an option for "Purchase With"';
                validation();
                return false;
            } 
            
            if(!(max_price>min_price)){
                msg_error = 'Submit a valid Price Range!: Max Price > Min price';
                validation();
                return false;
            }
            
            if(language == null){
                msg_error = 'You have to select an option for "Language"';
                validation();
                return false;
            } 
            
            if(desired_area == ""){
                msg_error = 'Please write a Desired Area';
                validation();
                return false;
            }
            
            if(lead_source == null){
                msg_error = 'You have to select an option for "Lead Source"';
                validation();
                return false;
            } 

            return true;
        });
    })
})(jQuery);
 
