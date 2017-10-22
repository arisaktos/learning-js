$(document).ready(function () {

    $('#retrData').click(function () {

        console.log('about to get data');
        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
            console.log('receive data:');
            console.log(data.userId);

        })

        console.log('THE END!!');
    });
});
