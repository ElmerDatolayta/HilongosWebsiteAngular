'use strict';

app.controller('barangayController',[
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
            isHome: false
        });
    }
]);