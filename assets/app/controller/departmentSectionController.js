'use strict';

app.controller('departmentSectionController',[
    '$scope',
    'sharedDateService',
    '$state',
    function(
        $scope,
        sharedDateService,
        $state
    )
    {
        $scope.partialViewUrl = 'assets/app/template/department/departmentSection/departmentView' + $state.params.departmentId + '.html';
    }
]);