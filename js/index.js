var swiper = new Swiper('.swiper-container', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay:5000,
    },
});

new WOW().init();

jQuery(document).ready(function() {

    jQuery('.post').addClass("hid").viewportChecker({
        classToAdd: 'vis animated fadeInLeft delay-4s',
        offset: 150
       });

    jQuery('.services-supp').addClass("hid").viewportChecker({
        classToAdd: 'vis animated bounceInUp delay-2s',
        offset: 150
        });

    jQuery('.partners').addClass("hid").viewportChecker({
        classToAdd: 'vis animated fadeIn delay-7s',
        offset: 120
        });

    

    $(".search-icon").click( function() {
        if( $(".search-input").css("display") == "none")
        {
            $(".search-input").css("display","block");
            $(".search-input").addClass("vis animated fadeInRight delay-1s")
        }
        else
        {
        
            $(".search-input").hide();
            
        }
    
    });  

    $(document).mouseup(function (e){
		var div = $(".search-input");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			div.hide();
		}
	});


});

