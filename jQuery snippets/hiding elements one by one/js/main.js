$(document).ready(function () {
    hideElements();
});

//hide one by one on click
function hideElements() {
    var counter = 0;
    $('#hideStaggered').click(function () {
        $('#first p:eq(' + counter + ')').hide();
        counter++;
    })
}
