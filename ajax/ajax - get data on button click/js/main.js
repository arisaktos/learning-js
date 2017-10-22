function ajax(ajaxOptions) {
    var options = {
        type: ajaxOptions.type || 'POST',
        url: ajaxOptions.url || '',
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions.dataType || 'text'
    };

    function httpSuccess(httpRequest) {
        try {

            return (httpRequest.status >= 200 && httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpRequest.status == "undefined");
        } catch (e) {
            return false;
        }
    }

    var httpReq = new XMLHttpRequest();
    httpReq.open(options.type, options.url, true);
    //onreadystatechange is fired whenever document is changed (httpReq.readystate)
    //    0: connection not established
    //    1: connection established
    //    2: connection received
    //    3: loading
    //    4: data retrieved and ready to be used
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {
            if (httpSuccess(httpReq)) {
                var returnData = (options.dataType == 'xml') ? httpReq.responseXML : httpReq.responseText;
                options.onSuccess(returnData);
                httpReq = null;
            } else {
                options.onError(httpReq.statusText);
            }
        }

    }
    httpReq.send();
}

document.getElementById('btn').addEventListener('click', retrData);

function retrData() {
    ajax({
        type: 'GET',
        url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
        onError: function () {
            console.log('Connection was not established');
        },
        onSuccess: function (response) {
            console.log(response);
            console.log('Connection established');
            var jsonObj = JSON.parse(response);
            var userId = document.createElement('p');
            var userName = document.createElement('p');
            var userURL = document.createElement('p');
            userId.innerText = 'UserID :' + jsonObj.userId;
            userName.innerText = 'User name :' + jsonObj.userName;
            userURL.innerText = 'User name :' + jsonObj.userURL;
            document.getElementById('reqData').appendChild(userId);
            document.getElementById('reqData').appendChild(userName);
            document.getElementById('reqData').appendChild(userURL);
        }
    })


}
