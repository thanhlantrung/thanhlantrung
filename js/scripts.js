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
});
