'use strict';

app.controller('barangayController',[
    '$scope',
    'sharedDateService',
    '$stateParams',
    '$state',
    function(
        $scope,
        sharedDateService,
        $stateParams,
        $state
    )
    {

        $scope.barangay = {};

        $scope.barangay.barangayId = $stateParams.barangayId || 'main';

        var imageUrl = 'assets/images/map_search/';
        var imageExtension = '.jpg';
        $scope.barangay.imageSrc =  imageUrl + $scope.barangay.barangayId + imageExtension;
        $scope.barangay.selected ={};

        $scope.barangay.search = function(str) {
            var filtered = [];
            str = str.toLowerCase();
            var searchString = _.replace(_.replace(str,' ',''),'-','');
            var filtered = _.filter($scope.barangay.nameList,function(data){
                var temp = _.replace(_.replace(data.name,' ',''),'-','').substr(0,searchString.length).toLowerCase();
                return temp == searchString;
            });

            var imageFilter = _.filter($scope.barangay.searchList,function(data){
                var temp = data.searchString.substr(0,searchString.length);
                return temp == searchString;
            });

            if(imageFilter.length>0){
                $scope.barangay.imageSrc = imageUrl + imageFilter[0].searchString + imageExtension;
            }else{
                $scope.barangay.imageSrc =  imageUrl + 'main' + imageExtension;
            }
            
            return filtered;
          };
          $scope.barangay.trackInputChange = function(str){
              if(str.length<3){
                $scope.barangay.imageSrc =  imageUrl + 'main' + imageExtension;
              }
          };

          $scope.$watch('barangay.selected',function(){
              if($scope.barangay.selected && $scope.barangay.selected.title){
                var searchString = _.replace(_.replace($scope.barangay.selected.title.toLowerCase(),' ',''),'-','');
                var imageFilter = _.filter($scope.barangay.searchList,function(data){
                    var temp = data.searchString.substr(0,searchString.length);
                    return temp == searchString;
                });
                if(imageFilter.length>0){
                    $state.go( $state.current, {'barangayId' : imageFilter[0].searchString}, {reload: true});
                   
                    //$scope.barangay.imageSrc = imageUrl + imageFilter[0].searchString + imageExtension;
                }else{
                    $scope.barangay.imageSrc =  imageUrl + 'main' + imageExtension;
                }
              }
          });

        $scope.barangay.searchList = 

        $scope.barangay.nameList = 
        
        
    }
]);