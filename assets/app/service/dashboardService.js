'use strict';

app.factory('dashboardService',[
    '$http',
    'httpRequestService',
    '$q',
    function(
        $http,
        httpRequestService,
        $q
    )
    {
        var baseUrl = 'http://localhost:20454/';
        var dashboardFactory = {};

        dashboardFactory.login = function(data){
            var url = baseUrl + 'login';
            var defer = $q.defer();
            httpRequestService.post(url,data,function(response){
                dashboardFactory.data = response.data;
                return defer.resolve(response);
            }, function (error) {
                dashboardFactory.data = [];
                return defer.reject(error);
            });
            return defer.promise;
        };
        
        return dashboardFactory;
    }
]);