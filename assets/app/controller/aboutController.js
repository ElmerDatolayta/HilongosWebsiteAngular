'use strict';

app.controller('aboutController',[
    '$scope',
    'sharedDateService',
    function(
        $scope,
        sharedDateService
    )
    {
        $scope.about = {};

        $scope.about.tabs = 1;
    }
]);