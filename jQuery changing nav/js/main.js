// $ = jQuery - if we use wordpress since it uses older version of jquery

//changing main nav backrground color on scroll

$(window).scroll(function () {
    scrolled();
});


function scrolled() {
    //we are checking what position is scroll at
    var windowPosition = $(window).scrollTop();
    //checking how high nav is
    var navHeight = $('#main-nav').height();
    //if current scroll position is bigger than nav hight we are adding a css class 
    if (windowPosition > navHeight) {
        $('#main-nav').addClass('blue-background');
    } else {
        $('#main-nav').removeClass('blue-background');
    }
}
