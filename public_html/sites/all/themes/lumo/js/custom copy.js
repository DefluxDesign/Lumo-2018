(function ($) {
$(document).ready(function() {
$(".toggle-item").hide();

    $('#dhtml_menu-527 a, #dhtml_menu-556 a, #dhtml_menu-504 a, #dhtml_menu-559 a, #dhtml_menu-564 a, .toggle-item #close a').click(function() {
            $('#article').html("<div id='loading'>CLOSING</div>");
        $("#block-block-3").stop().animate({
height: 0,
opacity: 0
}, "slow");
        var x =  $(this).attr("className");
        var $item = $('div.toggle-item-' + x);
        if (!$item.is(":visible")) $('.toggle-item').hide('medium');
        if (!$item.is(":visible")) $('#thegrid a').css( "display","none" );
        if (!$item.is(":hidden")) $('#thegrid a').css( "display","block" );
       if (!$item.is(":visible")) $(".sortable ul.ui-sortable li").stop().animate({
width: '25%' 
}, "slow");

        $('div.toggle-item-' + x).animate({width: 'toggle'});
        return false;
    });
   


$(function() {
//$("#thegrid .hello").css( "display","none" );
$(".title").css( "opacity","0" );
$("#block-block-3").css( "opacity","0" );
$("#block-block-3").css( "height","0px" );
  if($(window).width() < 1201){
       $(".sortable ul.ui-sortable li").css( "width","33.3%" );
$(".sortable ul.ui-sortable li").css( "height","25%" );
       }
if($(window).width() > 1200){
        $(".sortable ul.ui-sortable li").css("height","33%");
       $(".sortable ul.ui-sortable li").css( "width","25%" );
       }
       
if($(window).height()  < 620){
$("#block-block-2").stop().animate({
opacity: 0
}, "slow");
}

$("#thegrid a").click(function () {

   $('html').animate({scrollTop:0}, 'very-slow');    
   $('body').animate({scrollTop:0}, 'very-slow');

$(".sortable ul.ui-sortable li").stop().animate({
width: '16.67%',
opacity: .8
}, "slow");

$("#block-block-3").stop().animate({
height: 680,
opacity: 1
}, "slow");

});  

$("#close a").click(function () {

$('#article').html("<div id='loading'>CLOSING</div>");

$(".sortable ul.ui-sortable li").stop().animate({
width: '25%' 
}, "slow");

$("#block-block-3").stop().animate({
height: 0,
opacity: 0
}, "slow");

});  
 
              
// ON MOUSE OVER

$("#block-block-2 a").mouseover(function () {
$("#block-block-2 a").not(this).stop().animate({
opacity: 0.5
}, "slow");
});

$("#block-block-2 a").mouseout(function () {
$("#block-block-2 a").not(this).stop().animate({
opacity: 1
}, "slow");
});

$("#thegrid a").mouseover(function () {

$("#thegrid img").not(this).stop().animate({
opacity: 0.8
}, "slow");

$("#thegrid a:hover img").stop().animate({
opacity: 0.95
}, "slow");

$("#thegrid a:hover div.title").stop().animate({
opacity: 1
}, "slow");
});

$(".views-row-1 #thegrid a, .views-row-5 #thegrid a, .views-row-9 #thegrid a, .views-row-13 #thegrid a").mouseover(function () {
$(".views-row-1 #thegrid a:hover, .views-row-5 #thegrid a:hover, .views-row-9 #thegrid a:hover, .views-row-13 #thegrid a:hover").css("background-color","#D5CA9F");
});

$(".views-row-2 #thegrid a, .views-row-6 #thegrid a, .views-row-10 #thegrid a, .views-row-14 #thegrid a").mouseover(function () {
$(".views-row-2 #thegrid a:hover, .views-row-6 #thegrid a:hover, .views-row-10 #thegrid a:hover, .views-row-14 #thegrid a:hover").css("background-color","#1EA5CE");
});

$(".views-row-3, .views-row-7, .views-row-11, .views-row-15").mouseover(function () {
$(".views-row-3 #thegrid a:hover, .views-row-7 #thegrid a:hover, .views-row-11 #thegrid a:hover, .views-row-15 #thegrid a:hover").css("background-color","#991A2F");
});

$(".views-row-4, .views-row-8, .views-row-12, .views-row-16").mouseover(function () {
$(".views-row-4 a:hover, .views-row-8 a:hover, .views-row-12 a:hover, .views-row-16 a:hover").css("background-color","#5E7F64");
});

$("#thegrid a").mouseout(function () {

$("#thegrid a:hover img").not(this).stop().animate({
opacity: 1.0
}, "slow");

$("#thegrid img").stop().animate({
opacity: 1.0
}, "slow");

$("#thegrid a div.title").stop().animate({
opacity: 0
}, "slow");
});

$(window).resize(function() {
     if($(window).width() < 1201){
       $(".sortable ul.ui-sortable li").css( "width","33.3%" );
       $(".sortable ul.ui-sortable li").css( "height","25%" );
       }
if($(window).width() > 1200){
       $(".sortable ul.ui-sortable li").css( "width","25%" );
       $(".sortable ul.ui-sortable li").css( "height","33%" );      
      }
if($(window).height()  < 700){
$("#block-block-2").stop().animate({
opacity: 0
}, "slow");
}
 if($(window).height()  > 700){
$("#block-block-2").stop().animate({
opacity: 1
}, "slow");
}     
      
  });
  

    
  $('#thegrid a').addClass('ready').each(function () {   
  $('#article').html("<div id='loading'>LOADING</div>").fadeIn(10000);
$(this).click(function (e) {
  $('#article').html("<div id='loading'>LOADING</div>").fadeIn(10000);
// Remove the default click handler.
e.preventDefault();
// Get the URL of the clicked link.
var toLoad = $(this).attr('href');
// Now load the content
xhr = $.ajax({
url: toLoad,
success: function (data) {
$.getScript("/blog/sites/all/modules/jscrollpane/js/jquery.jscrollpane.min.js");
// Inject the new content into <div id="our-div"></div>
$('#article').html($('.node', data));
$('.node').bind('load', function () {
$('.node').fadeIn(4000);
});
$('.node-blog .field-name-body').columnize({ columns: 2 });
 $('#article img').bind('load', function () {
$('.group-right .field-items').jScrollPane();
  return false;
});
}
});
});
}); 





  $('#dhtml_menu-527 a').addClass('about').each(function () {
  $('.toggle-item-about .about-content').html("");
  $('.toggle-item-about .about-content').html("<div class='about-content'><div id='loading'>LOADING</div></div>");
$(this).click(function (e) {
// Remove the default click handler.
e.preventDefault();
// Get the URL of the clicked link.
var toLoad = $(this).attr('href');
// Now load the content
xhr = $.ajax({

url: toLoad,
success: function (data) {
// Inject the new content into <div id="our-div"></div>
$('.about-content').html($('.field-item', data));
$('.about-content #lumo-text').columnize({ columns: 2 });
}
});
});
}); 

  $('#dhtml_menu-559 a').addClass('wedding-about').each(function () {
  $('.toggle-item-wedding-about .wedding-about-content').html("");
  $('.toggle-item-wedding-about .wedding-about-content').html("<div class='enquiry-content'><div id='loading'>LOADING</div></div>");
$(this).click(function (e) {
// Remove the default click handler.
e.preventDefault();
// Get the URL of the clicked link.
var toLoad = $(this).attr('href');
// Now load the content
xhr = $.ajax({
url: toLoad,
success: function (data) {
// Inject the new content into <div id="our-div"></div>
$('.wedding-about-content').html($('.view-mode-full', data));
}
});
});
}); 

  $('#dhtml_menu-556 a').addClass('enquiry').each(function () {
  $('.toggle-item-enquiry .enquiry-content').html("");
  $('.toggle-item-enquiry .enquiry-content').html("<div class='enquiry-content'><div id='loading'>LOADING</div></div>");
$(this).click(function (e) {
// Remove the default click handler.
e.preventDefault();
// Get the URL of the clicked link.
var toLoad = $(this).attr('href');
// Now load the content
xhr = $.ajax({
url: toLoad,
success: function (data) {
// Inject the new content into <div id="our-div"></div>
$('.enquiry-content').html($('#node-101', data));
$('#focusin').append('<input class="datePick" name="datepicker" />');
}
});
});
}); 

$('#dhtml_menu-564 a').addClass('enquiry').each(function () {
  $('.toggle-item-commercial-about .about-commercial-photography').html("");
  $('.toggle-item-commercial-about .about-commercial-photography').html("<div class='enquiry-content'><div id='loading'>LOADING</div></div>");
$(this).click(function (e) {
// Remove the default click handler.
e.preventDefault();
// Get the URL of the clicked link.
var toLoad = $(this).attr('href');
// Now load the content
xhr = $.ajax({
url: toLoad,
success: function (data) {
// Inject the new content into <div id="our-div"></div>
$('.enquiry-content').html($('.node-page', data));
}
});
});
}); 

 $('#dhtml_menu-504 a').addClass('hello').each(function () {
  $('.toggle-item-hello .hello-content').html("");
  $('.toggle-item-hello .hello-content').html("<div id='loading'>LOADING</div>");
$(this).click(function (e) {
// Remove the default click handler.
e.preventDefault();
// Get the URL of the clicked link.
var toLoad = $(this).attr('href');
// Now load the content
xhr = $.ajax({
url: toLoad,
success: function (data) {
// Inject the new content into <div id="our-div"></div>
$('.hello-content').html($('#content', data));
}
});
});
}); 


});   
});


})(jQuery);