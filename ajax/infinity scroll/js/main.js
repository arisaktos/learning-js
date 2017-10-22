//window.onscroll = function (ev) {
//    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//       getData();
//    }
//};

//variable used for stopping getting more than 1 set of data at a given time
var canWeDoAjaxRequest = true;

window.onscroll = function () {
    console.log('scrolling ' + new Date().getTime());
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

        if (canWeDoAjaxRequest == true) {
            canWeDoAjaxRequest = false;

            ajax({
                type: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users',
                onError: function () {
                    console.log('Connection not established');
                },
                onSuccess: function (response) {

                    console.log('Connection established');
                    var jsonObjArray = JSON.parse(response);
                    console.log(jsonObjArray);
                    for (var i in jsonObjArray) {
                        var userID = document.createElement('p');
                        var userName = document.createElement('p');
                        var userURL = document.createElement('p');

                        userID.innerText = "User ID: " + jsonObjArray[i].id;
                        userName.innerText = "User name: " + jsonObjArray[i].name;
                        userURL.innerText = "User url: " + jsonObjArray[i].website;

                        document.body.appendChild(userID);
                        document.body.appendChild(userName);
                        document.body.appendChild(userURL);

                    }

                    canWeDoAjaxRequest = true;
                }
            })

        }

    }
}


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

            //navigator.userAgent returns specific browser
            return (httpRequest.status >= 200 && httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpRequest.status == "undefined");
        } catch (e) {
            return false;
        }
    }

    var httpReq = new XMLHttpRequest();
    httpReq.open(options.type, options.url, true);
    httpReq.onreadystatechange = function () {
        //if 4 data is retrieved and ready to be used
        if (httpReq.readyState == 4) {
            //checking connection status
            if (httpSuccess(httpReq)) {
                //if data is in xml format, return xml object, if not return text 
                var returnData = (options.dataType == 'xml') ? httpReq.responseXML : httpReq.responseText;

                options.onSuccess(returnData);

                //null to break not needed server 
                httpReq = null;
            } else {
                //if error
                options.onError(httpReq.statusText);
            }
        }

    }
    httpReq.send();
}
