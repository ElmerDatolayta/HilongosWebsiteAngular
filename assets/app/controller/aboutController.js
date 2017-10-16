'use strict';

app.controller('aboutController',[
    '$scope',
    'sharedDateService',
    function(
        $scope,
        sharedDateService
    )
    {
        $scope.about = {};

        $scope.about.tabs = 1;

        
        $scope.eventFunc = {
             timelineOnLoad : function(){
                var timelineBlocks = $('.timeline-item'),
                offset = 0.8;
        
                //hide timeline blocks which are outside the viewport
                hideBlocks(timelineBlocks, offset);
        
                //on scolling, show/animate timeline blocks when entering the viewport
                $(window).on('scroll', function(){
                    (!window.requestAnimationFrame)
                        ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
                        : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
                });
        
                function hideBlocks(blocks, offset) {
                    blocks.each(function(){
                        ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
                    });
                }
        
                function showBlocks(blocks, offset) {
                    blocks.each(function(){
                        ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) && $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('animate-it');
                    });
                }
             }
        };

        $(".drop .option").click(function() {
            var val = $(this).attr("data-value"),
                $drop = $(".drop"),
                prevActive = $(".drop .option.active").attr("data-value"),
                options = $(".drop .option").length;
            $drop.find(".option.active").addClass("mini-hack");
            $drop.toggleClass("visible");
            $drop.removeClass("withBG");
            $(this).css("top");
            $drop.toggleClass("opacity");
            $(".mini-hack").removeClass("mini-hack");
            if ($drop.hasClass("visible")) {
              setTimeout(function() {
                $drop.addClass("withBG");
              }, 400 + options*100); 
            }
            triggerAnimation();
            if (val !== "placeholder" || prevActive === "placeholder") {
              $(".drop .option").removeClass("active");
              $(this).addClass("active");
              if(Number(val)>0){
                $scope.about.tabs = Number(val);
                $scope.$apply();
              }
            };

        });
          
        function triggerAnimation() {
        var finalWidth = $(".drop").hasClass("visible") ? 22 : 20;
        $(".drop").css("width", "24em");
        setTimeout(function() {
            $(".drop").css("width", finalWidth + "em");
        }, 400);
    }
    }
]);