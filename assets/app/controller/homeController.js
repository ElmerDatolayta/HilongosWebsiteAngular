'use strict';

app.controller('homeController',[
    '$scope',
    function($scope)
    {
        $("section .navbar .container .navbar-header button").click(function(){
            $(".navbar .container .navbar-header button").addClass("click");
            $("#mobileview #navmenu").addClass("showmobile");
        
        });
        $("section #mobileview #navmenu button").click(function(){
            $("#mobileview #navmenu").removeClass("showmobile");
        });
        $("section #bannerimage").slick({
            arrows: false,
            dots: true
        });
        $("section #about #bannerimage").slick({
            arrows: false,
            dots: true
        });
        function collapsenav(){
            if ($("section .navbar").offset().top > 80){
                $('section .navbar').addClass("scroll-change");
            }else{
                $('section .navbar').removeClass("scroll-change");
            }
        };
        $(window).scroll(collapsenav);
        $(document).ready(collapsenav);
    }
]);