'use strict';

app.controller('equipmentDetails',[
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
        $scope.equipment = {};
        $scope.equipment.title = $stateParams.equipment ?_.replace($stateParams.equipment, '_', ' ') : '';
    }
]);