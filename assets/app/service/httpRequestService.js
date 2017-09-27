'use strict';

app.factory('httpRequestService', ['$http', function ($http) {
    var errorCallback = function (e) {
        var errorStatus = [404, 400, 500];
        var errorMessage;
        switch (e.status) {
            case 400:
                errorMessage = e.data.Message;
                break;
            default:
                errorMessage = e.statusText;
                break;
        }
        if (errorStatus.indexOf(e.status) !== -1) {
            SweetAlert.swal("Yikes! Something is wrong", errorMessage, "error");
        } else if (e.status === 401) {
            doLogout();
        }
    };

    var getMethod = function (url, succesCallback) {
        $http.get(url).then(succesCallback, errorCallback);
    };

    var postMethod = function (url, data, successCallback) {
        $http.post(url,data,{'headers' : {"Content-Type" : "application/x-www-form-urlencoded"} }).then(successCallback, errorCallback);
    };

    var putMethod = function (url, data, successCallback) {
        $http.put(url, data).then(successCallback, errorCallback);
    };

    var deleteMethod = function (url, successCallback) {
        $http.delete(url).then(successCallback, errorCallback);
    };

    return {
        get: getMethod,
        post: postMethod,
        put: putMethod,
        delete: deleteMethod
    }

}]);