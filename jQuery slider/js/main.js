$(document).ready(function () {
    var slider = $('#slider');
    var slideshow = $('.slide-show');
    var slideCount = $('.single-slide').length;

    //full slider equals number of slides *100% so each slide is 20% of the whole massive container size (100/5)
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    //full slider equals number of slides *100% so only 1 is visible at a time
    $(slideshow).css('width', slideCount * 100 + '%');
    slideshow.find('.single-slide').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',

            //each banner is moved by the banner index * width so by 100%, 200%, 300% etc
            'margin-left': index * slideWidth + '%'
        });
    });

    function slide(newSlideIndex) {
        //if 1st or last banner
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        
        //slider caption to match each banner
        var napis = $('.slider-caption').eq(newSlideIndex);

        napis.hide();
        var marginLeft = newSlideIndex * (-100) + '%';

        slideshow.animate({
            'margin-left': marginLeft
        }, 800, function () {
            slideIndex = newSlideIndex;
            napis.fadeIn('slow');
        });
    }
    $('.prev-slide').click(function (event) {
        //slider index goes down and also window will not reload
        event.preventDefault();
        slide(slideIndex - 1);
    });
    $('.next-slide').click(function (event) {
        event.preventDefault();
        slide(slideIndex + 1);
    });
});
