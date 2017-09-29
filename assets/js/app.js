$(".navbar .container .navbar-header button").click(function(){
    $(".navbar .container .navbar-header button").addClass("click");
    $("#mobileview #navmenu").addClass("showmobile");

});
$("#mobileview #navmenu button").click(function(){
    $("#mobileview #navmenu").removeClass("showmobile");
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