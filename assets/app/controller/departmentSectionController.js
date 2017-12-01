'use strict';

app.controller('departmentSectionController',[
    '$scope',
    'sharedDataService',
    '$state',
    function(
        $scope,
        sharedDataService,
        $state
    )
    {
        $scope.partialViewUrl = 'assets/app/template/department/departmentSection/departmentView' + $state.params.departmentId + '.html';
    }
]);