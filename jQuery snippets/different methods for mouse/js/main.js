$(document).ready(function () {
    onMethod();
});

//click() - element is clicked
//dblclick() - element is double clicked 
//mouseenter() - when you hover in
//mouseleave() - hover out
//resize() - if you resize element
//load() - when element is loaded
//scroll() - when element is scrolled
//submit() - when form is submitted

//on() is used to attach more than 1 event 
function onMethod() {
    $('#onMethod img').on({
        'click': function () {
            alert('you clicked me');
        },
        'mouseenter': function () {
            $(this).css('transform', 'scale(1.2)');
        },
        'mouseleave': function () {
            $(this).css('transform', 'scale(1)');
        }
    })
}
