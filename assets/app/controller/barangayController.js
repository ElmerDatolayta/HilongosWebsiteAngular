'use strict';

app.controller('barangayController',[
    '$scope',
    'sharedDateService',
    '$stateParams',
    '$state',
    'barangayDataService',
    function(
        $scope,
        sharedDateService,
        $stateParams,
        $state,
        barangayDataService
    )
    {

        $scope.barangay = {};

        $scope.barangay.barangayId = $stateParams.barangayId || 'main';

        getBarangayData();

        var imageUrl = 'assets/images/map_search/';
        var imageExtension = '.jpg';
        $scope.barangay.imageSrc =  imageUrl + $scope.barangay.barangayId + imageExtension;
        $scope.barangay.barangayImageSrc =  'assets/images/barangay_map/' + $scope.barangay.barangayId + '.png';
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


    
        //Slick JS codes by Darwin Maturan
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
          });
          $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
          });
        
          $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
        
          $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
          $(".generalInformation .container .col-12 a").click(function(e){
                e.preventDefault();
                var id=$(this).attr('href');
                $('.collapse').collapse('hide');
                $(id).collapse('show');
          });
    }
]);