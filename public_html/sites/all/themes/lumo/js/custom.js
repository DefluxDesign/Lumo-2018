(function ($) {
$(document).ready(function() {

$(".toggle-item").hide();

//#dhtml_menu-504 a
    $("#dhtml_menu-527 a, #dhtml_menu-556 a, , #dhtml_menu-559 a, #dhtml_menu-564 a, .toggle-item #close a").click(function() {
            $('#article').html("");
               $('html').animate({scrollTop:0}, 'very-slow');    
   $('body').animate({scrollTop:0}, 'very-slow');
        $("#block-block-3").stop().animate({
height: 0,
opacity: 0
}, "slow");
        var x =  $(this).attr("className");
        var $item = $('div.toggle-item-' + x);
        if (!$item.is(":visible")) $(".toggle-item").hide('medium');
       if (!$item.is(":visible")) $(".sortable ul.ui-sortable li").stop().animate({
width: '25%' 
}, "slow"); 

        $('div.toggle-item-' + x).animate({width: 'toggle'});
        return false;
    });

$(function() {
$(".title a").css( "opacity","0" );
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
       
       $('.sortable ul.ui-sortable li').hover(function() {
//hover on
$('.title a', $(this)).stop().animate({opacity: 1}, 1000);
$('.sortable ul.ui-sortable li').not(this).animate({opacity: 0.7}, 1);
},function() {
//hover off
$('.title a', $(this)).stop().animate({opacity: 0}, 500);
$('.sortable ul.ui-sortable li').not(this).animate({opacity: 1}, 1);
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

if($("#block-3").height() > 200){
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
       
if($(window).height()  < 620){
$("#block-block-2").stop().animate({
opacity: 0
}, "slow");
}

$("ul.grid.ui-sortable a").click(function () {

   $('html').animate({scrollTop:0}, 'very-slow');    
   $('body').animate({scrollTop:0}, 'very-slow');

$("ul.grid.ui-sortable li").stop().delay(600).animate({
width: '16.65%',
opacity: .8
},1000);

$("#block-block-3").stop().animate({
height: 650,
opacity: 1
}, "slow");

$(".page-portrait-photography #block-block-3, .front #block-block-3").stop().animate({
height: 750,
opacity: 1
}, "slow");

}); 

 

$("#block-block-3 #close a").click(function () {

$(".sortable ul.ui-sortable li").stop().animate({
opacity: 0,
width: '25%'
}, 0);

$(".sortable ul.ui-sortable li").stop().delay(500).animate({
opacity: 1
}, 2000);

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

   
$('#.sortable ul.ui-sortable li a').addClass('ready').each(function () {   
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

// Inject the new content into <div id="our-div"></div>
$('#article').html($('.node', data));
$('.node').bind('load', function () {
$('.node').fadeIn(4000);
$.getScript("/sites/all/modules/jscrollpane/js/jquery.jscrollpane.min.js");
});
$('.node-blog .field-name-body').columnize({ columns: 2 });
 $('#article img').bind('load', function () {
$('.group-right .field-items').jScrollPane();
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
$('.wedding-about-content').html($('.node-page', data));
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
$('.toggle-item-enquiry .enquiry-content').html($('#node-101 .content', data));
$('.hasDatepicker').datepicker();
}
});
});
}); 

$('#dhtml_menu-564 a').addClass('commercial-about').each(function () {
  $('.toggle-item-commercial-about .about-commercial-photography').html("");
  $('.toggle-item-commercial-about .about-commercial-photography').html("<div id='loading'>LOADING</div>");
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
$('.about-commercial-photography').html($('.view-mode-full', data));
}
});
});
}); 

// $('li#dhtml_menu-504 a').addClass('hello').each(function () {
// $('.toggle-item-hello .hello-content').html("");
//   $('.toggle-item-hello .hello-content').html("<div id='loading'>LOADING</div>");
// $(this).click(function (e) {
// Remove the default click handler.
// e.preventDefault();
// Get the URL of the clicked link.
// var toLoad = $(this).attr('href');
// Now load the content
// xhr = $.ajax({
// url: toLoad,
// success: function (data) {
// Inject the new content into <div id="our-div"></div>
// $('.hello-content').html($('#content', data));
// }
// });
// });
// }); 


});   
});


})(jQuery);