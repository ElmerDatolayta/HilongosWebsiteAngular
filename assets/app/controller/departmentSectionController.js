'use strict';

app.controller('departmentSectionController',[
    '$scope',
    'sharedDateService',
    function(
        $scope,
        sharedDateService
    )
    {
        $('.gallery').slick({
            centerPadding: '60px',
            slidesToShow: 3,
            arrows:false,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
    }
]);