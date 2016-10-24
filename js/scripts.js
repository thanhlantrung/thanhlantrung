$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background-color', 'transparent');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
   // $(document).trigger('scroll')

   $("#pj, #zug, #pf").mouseenter(function() {
    $(this).css('background-color', 'black'),
    $(this).css('color', 'white'),
    $(this).css('cursor', 'pointer');
  }).mouseleave(function(){
    $(this).css('background-color', 'white'),
    $(this).css('color', 'black')
  });

//$('html,body').css('cursor','crosshair');

$("#zug").click(function() {
    window.open("http://www.zugvoegelblog.com");
});

$("#chat").click(function() {
    window.open("http://www.google.com");
});
$("#pf").click(function() {
    window.open("http://tuktuktravels.bitballoon.com");
});
$("#pj").click(function() {
    window.open("http://thepyjamashop.herokuapp.com");
});
});
