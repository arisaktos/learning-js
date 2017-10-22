$(document).ready(function () {
    akordian();
});


function akordian() {
    $('#akordeon #hide').click(function () {
        //        $('#akordeon .acordian').slideUp(1000);
        $('#akordeon .acordian').animate({
            'height': '100px',
            'width': '100%'
        }, 2000)
    });
    $('#akordeon #show').click(function () {
        //        $('#akordeon .acordian').slideDown(1000);
        $('#akordeon .acordian').animate({
            'height': '250px',
            'width': '100%'
        }, 2000, function () { // function that will happen after animation is done
            $('#akordeon .acordian p').css('color', 'white');
        })
    });
}
