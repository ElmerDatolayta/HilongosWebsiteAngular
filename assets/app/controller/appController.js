'use strict';

app.controller('appController',[
    '$scope',
    '$rootScope',
    'sharedDateService',
    function(
        $scope,
        $rootScope,
        sharedDateService
    )
    {
        $scope.app = {};
        $rootScope.$on('state', function (event, data) {
            $scope.app = data;
        });
    }
]);