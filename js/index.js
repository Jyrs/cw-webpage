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
        offset: 130
       });

    jQuery('.services-supp').addClass("hid").viewportChecker({
        classToAdd: 'vis animated bounceInUp delay-1s',
        offset: 100
        });
});