'use strict';

app.controller('facilityDetailsController',[
    '$scope',
    'sharedDataService',
    '$state',
    '$stateParams',
    function(
        $scope,
        sharedDataService,
        $state,
        $stateParams
    )
    {
        $scope.facility = {};
        $scope.facility.title = $stateParams.facility ?_.replace($stateParams.facility, '_', ' ') : '';
    }
]);