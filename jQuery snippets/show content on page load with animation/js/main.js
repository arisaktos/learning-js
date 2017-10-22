$(document).ready(function () {
    hideShow();

});



function showFirst() {
    $('#first').show(3000);
}

function hideShow() {

    $('#first').css('background-color', 'red').hide('slow', showFirst);

    //for adding more than 1 css style
    //    $('#first').css({
    //        'background-color': 'red',
    //        'height': '70vh',
    //        'width': '50%'
    //    });
}
