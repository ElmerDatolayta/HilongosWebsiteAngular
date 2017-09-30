'use strict';

app.controller('homeController',[
    '$scope',
    function($scope)
    {
        $("section #about #bannerimage").slick({
            arrows: false,
            dots: true
        });
        $(document).ready(function(){
            $("#tourist #spot #image-left .imagecontent .imagehover .info button").on("click",function(){
                var x = $(this).attr("data-image");
                var des = $(this).prev().html();
                $("#view img").attr("src",x);
                $("#view #box2 p").html(des);
                var num = $("#view").offset().top - 50 
                $('html,body').animate({
                    scrollTop: num
                }, 600);
            });
            $("#tourist #spot #image-right .imagecontent .imagehover .info button").on("click",function(){
                var x = $(this).attr("data-image");
                var des = $(this).prev().html();
                $("#view img").attr("src",x);
                $("#view #box2 p").html(des);
                var num = $("#view").offset().top - 50 
                $('html,body').animate({
                    scrollTop: num
                }, 600);
            });
            $("#tourist #spot #center-image .imagehover .info button").on("click",function(){
                var x = $(this).attr("data-image");
                var des = $(this).prev().html();
                $("#view img").attr("src",x);
                $("#view #box2 p").html(des);
                var num = $("#view").offset().top - 50 
                $('html,body').animate({
                    scrollTop: num
                }, 600);
            });
            $("#tourist #spot2 .image-content .imagehover .info button").on("click",function(){
                var x = $(this).attr("data-image");
                var des = $(this).prev().html();
                $("#view img").attr("src",x);
                $("#view #box2 p").html(des);
                var num = $("#view").offset().top - 50 
                $('html,body').animate({
                    scrollTop: num
                }, 600);
            });
        });
    }
]);