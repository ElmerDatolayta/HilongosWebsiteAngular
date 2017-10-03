'use strict';

app.controller('homeController',[
    '$scope',
    function($scope)
    {
        $("section #about #bannerimage").slick({
            arrows: false,
            dots: true,
            autoplay: true
        });
        $(document).ready(function(){
            $("#tourist #spot #image-left .imagecontent .imagehover a").on("click",function(){
                var x = $(this).attr("data-image");
                var url = $(this).attr("href");
                $("#view #box2 a").attr("href",url);
                var des = $(this).find("p").html()
                $("#view").attr("style","background-image:url('"+x+"')");
                //$("#view img").attr("src",x);
                $("#view #box2 h3").html(des);
                var num = $("#view").offset().top - 50 
                $('html,body').animate({
                    scrollTop: num
                }, 600);
            });
            $("#tourist #spot #image-right .imagecontent .imagehover a").on("click",function(){
                var x = $(this).attr("data-image");
                var url = $(this).attr("href");
                $("#view #box2 a").attr("href",url);
                var des = $(this).find("p").html()
                $("#view").attr("style","background-image:url('"+x+"')");
                //$("#view img").attr("src",x);
                $("#view #box2 h3").html(des);
                var num = $("#view").offset().top - 50 
                $('html,body').animate({
                    scrollTop: num
                }, 600);
            });
            $("#tourist #spot #center-image .imagehover a").on("click",function(){
                var x = $(this).attr("data-image");
                var url = $(this).attr("href");
                $("#view #box2 a").attr("href",url);
                var des = $(this).find("p").html()
                $("#view").attr("style","background-image:url('"+x+"')");
                //$("#view img").attr("src",x);
                $("#view #box2 h3").html(des);
                var num = $("#view").offset().top - 50 
                $('html,body').animate({
                    scrollTop: num
                }, 600);
            });
            $("#tourist #spot2 .image-content .imagehover a").on("click",function(){
                var x = $(this).attr("data-image");
                var url = $(this).attr("href");
                $("#view #box2 a").attr("href",url);
                var des = $(this).find("p").html()
                $("#view").attr("style","background-image:url('"+x+"')");
                $("#view #box2 h3").html(des);
                var num = $("#view").offset().top - 50 
                $('html,body').animate({
                    scrollTop: num
                }, 600);
            });
           
        });
    }
]);