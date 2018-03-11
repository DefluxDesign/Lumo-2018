(function ($) {

$(function() {
// OPACITY OF BUTTON SET TO 10%
$("#thegrid .hello").css( "opacity","0.0" );

// ON MOUSE OVER
$("#thegrid a").mouseover(function () {

$("#thegrid img").not(this).stop().animate({
opacity: 0.5
}, "slow");

$("#thegrid a:hover img").stop().animate({
opacity: 1.0
}, "slow");

$("#thegrid a .created").stop().animate({
opacity: 0.1
}, "slow");

$("#thegrid a .created-1").stop().animate({
opacity: 0.1
}, "slow");

$("#thegrid a:hover .created").stop().animate({
opacity: 1.0
}, "slow");

$("#thegrid a:hover .created-1").stop().animate({
opacity: 1.0
}, "slow");

$("#thegrid a:hover .hello").stop().animate({
opacity: 1.0
}, "slow");
 
},

// ON MOUSE OUT
(function () {
 
// SET OPACITY BACK TO 50%
$("#thegrid img").stop().animate({
opacity: 1.0
}, "slow");

$("#thegrid .hello").stop().animate({
opacity: 0.0
}, "slow");

$("#thegrid a .created").stop().animate({
opacity: 1.0
}, "slow");

$("#thegrid a .created-1").stop().animate({
opacity: 1.0
}, "slow");


});
});


})(jQuery);