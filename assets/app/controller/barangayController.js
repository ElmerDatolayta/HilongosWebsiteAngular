'use strict';

app.controller('barangayController',[
    '$scope',
    'sharedDataService',
    '$stateParams',
    '$state',
    'barangayDataService',
    function(
        $scope,
        sharedDataService,
        $stateParams,
        $state,
        barangayDataService
    )
    {

        $scope.barangay = {};

        $scope.barangay.barangayId = $stateParams.barangayId || 'main';
        $scope.barangay.partialSource = '/assets/app/template/barangay/partials/' + $scope.barangay.barangayId + '.html';

        getBarangayData();

        var imageUrl = 'assets/images/map_search/';
        var imageExtension = '.jpg';
        $scope.barangay.imageSrc =  imageUrl + $scope.barangay.barangayId + imageExtension;
        $scope.barangay.barangayImageSrc =  'assets/images/barangay_map/' + $scope.barangay.barangayId + '.png';
        $scope.barangay.selected ={};
        getBarangayHistory($scope.barangay.barangayId);

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

        function getBarangayData(){
            $scope.barangay.searchList = barangayDataService.getBarangaySearchString();
            $scope.barangay.nameList = barangayDataService.getBarangayNames();
        };

        $scope.barangay.getBarangayName = function(){
            return _.filter($scope.barangay.nameList,function(data){
                var temp = _.replace(_.replace(data.name,' ',''),'-','').toLowerCase();
                return temp === $scope.barangay.barangayId;
            })[0].name;
        };

        function getBarangayHistory(barangayId){
            if(barangayId!=='' && barangayId!=='main'){
                barangayDataService.getBarangayHistory(barangayId).then(function(response){
                    $scope.barangay.history = response.data;
                });
            }
        }
    }
]);