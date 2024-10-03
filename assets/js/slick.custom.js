(function ($) {
    ("use strict");
    
    $('.banner-slider').slick({
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
    }).slickAnimation(); 

})(window.jQuery);