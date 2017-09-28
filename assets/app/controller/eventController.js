'use strict';

app.controller('eventController',[
    '$scope',
    'sharedDateService',
    '$rootScope',
    function(
        $scope,
        sharedDateService,
        $rootScope
    )
    {
        $rootScope.$broadcast('state', {
            isHome: false // send whatever you want
        });
    }
]);