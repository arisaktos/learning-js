// $ = jQuery - if we use wordpress since it uses older version of jquery

//changing main nav backrground color on scroll

$(window).scroll(function () {
    dontRefresh();
    changeLinksColor();
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

//changes link color after hover
function changeLinksColor() {
    var parent = $('#main-nav ul .list-item');
    parent.each(function () {
        $(this).mouseenter(function () {
            $(this).find('a').css('color', 'grey');
        }).mouseleave(function () {
            $(this).find('a').css('color', 'white');
        });
    });
}

//prevents page reload on link click
function dontRefresh() {
    var parent = $('#main-nav ul .list-item a');
    parent.each(function () {
        $(this).click(function (event) {
            if ($(this).attr('href') == '' || $(this).attr('href') == '#') {
                event.preventDefault();
            }
        });
    });
}
