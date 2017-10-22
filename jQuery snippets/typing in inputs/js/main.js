$(document).ready(function () {
    showInputValue()
});



//val() without parameters returns input content
//val() with parameters sets input value
function showInputValue() {
    //all inputs will have 'Text' added in them
    $('#form form input').val('Tekst');

    //showing what is in each input in console
    $('#form form input').each(function () {
        //change() means any change made to input
        $(this).change(function () {
            console.log($(this).val());
        });
    });
}
