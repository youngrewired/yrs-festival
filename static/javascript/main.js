$(document).ready(function() {

    $("#header #nav").hide();

    $("#header .menu").click(function(event) {
    	event.stopPropagation();
        $("#header #nav").slideToggle("slow");
    });

    $(".faq ul li").hide();

    $(".faq ul.general li").show();

    $(".faq ul h2").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find("li").slideToggle("fast");
    });


    $(".day .table").hide();
 
    $(".day h2").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".table").slideToggle("fast");
    });


    $("form .dropdown > div").hide();

    $("form .dropdown h2").click(function() {
        $(this).toggleClass("active");
        $(this).parent().children("div").slideToggle("fast");
    });


});

$(function() {
    $('.banner').unslider({
        delay: 6000
    });
});

var unslider = $('.banner').unslider();

$(".index-block .donate").click(function(e) {
    e.preventDefault();
    $("header .donate form input[type='submit']").click();
});

