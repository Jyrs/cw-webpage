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
        classToAdd: 'vis animated fadeIn delay-4s',
        offset: 150
       });
});