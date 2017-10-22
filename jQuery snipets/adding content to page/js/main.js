$(document).ready(function () {

            addText();
            deleteContent();
        }


        //adding content to hmtl
        //append() - add content at the end of selector 
        //prepend() - add content at the beginning of selector 
        //after() - add content after a selector 
        //before() - add content before a selector 
        //you can add text and html alike
        function addText() {
            $('#added .append').append('<h1>This is append()</h1>');
            $('#added .prepend').prepend('<h1>This is prepend()</h1>');
            $('#added .before').before('<h1>This is before()</h1>');
            $('#added .after').after('<h1>This is after()</h1>');
        }

        //remove() - removed element and everything inside
        //empty() - removes only inside content of selector, not selector itself
        function deleteContent() {
            $('#added .deleted').remove();
            $('#added .deleted-inner span').empty(); //only removed stuff from span
        }
