$(".navbar .container .navbar-header button").click(function(){
    $(".navbar .container .navbar-header button").addClass("click");
    $("#mobileview #navmenu").addClass("showmobile");

});
$("#mobileview #navmenu button").click(function(){
    $("#mobileview #navmenu").removeClass("showmobile");
});
$("#bannerimage").slick({
    arrows: false,
    dots: true
});
$("section #about #bannerimage").slick({
    arrows: false,
    dots: true
});
function collapsenav(){
    if ($(".navbar").offset().top > 80){
        $('.navbar').addClass("scroll-change");
    }else{
        $('.navbar').removeClass("scroll-change");
    }
};
$(window).scroll(collapsenav);
$(document).ready(collapsenav);
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