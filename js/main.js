$(function() {
    $(window).on("scroll resize", function() {
        var o = $(window).scrollTop() / ($(document).height() - $(window).height());
        $(".progress-bar").css({
            "width": (100 * o | 0) + "%"
        });
    })
});
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});
$(function() {
    $(window).on("load", function() {
        setTimeout(() => $(".preload").css({"display": "none"}), 1000);
    })
});
//Created by Maksim Klimenkov