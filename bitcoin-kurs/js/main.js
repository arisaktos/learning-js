$(function () {

var interval = null;

    function getDataExchange() {
        var buyArrow = $('#buy-arrow');
        var currentBuyPrice = parseFloat($('#buy').html());


        var sellArrow = $('#sell-arrow');
        var currentSellPrice = parseFloat($('#sell').html());

        $.getJSON("https://blockchain.info/pl/ticker", function (data) {
            $('#buy').html(data.PLN.buy);
            $('#sell').html(data.PLN.sell);
            if (currentBuyPrice < parseFloat(data.PLN.buy)) {
                buyArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
                console.log('up');
                

            } else if (currentBuyPrice > parseFloat(data.PLN.buy)) {
                buyArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
                console.log('down');

            } else {
                buyArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
                console.log('no change');

            }
            
            
            if (currentSellPrice < parseFloat(data.PLN.sell)) {
                sellArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
                console.log('up');
                

            } else if (currentSellPrice > parseFloat(data.PLN.buy)) {
                sellArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
                console.log('down');

            } else {
                sellArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
                console.log('no change');

            }
            console.log('test');

        });
    }
    getDataExchange();
    interval = setInterval(getDataExchange, 5000);
    
    //we need to clear interval so we can set new value for it
    
    $('.control-button').click('on',function(){
        clearInterval(interval);
        interval = setInterval(getDataExchange,$(this).val());
        $('#refresh-frequency').html($(this).text());
        console.log($(this).val());
    });

});
