/*
$.scrollToID();
specify a #anchor-link in a link href, make sure
there is a corresponding id in the page. 
that's about it. 
accepts 'speed' and 'offset' arguments.  
*/

(function ($) {
  $.fn.scrollToID = function (args) {
    var options = {
      speed:        500, 
      offset:       20 
    };
   
    $.extend( options, args );
    
    this.off('click.scrolltoid').on('click.scrolltoid',function(e){
          
      e.preventDefault();

      var url       = $(this).attr('href'),
          urlArray  = url.split('#'),
          id        = urlArray[1],
          topOffset = $('#' + id).offset().top - options.offset;

      $('body, html').animate({
        scrollTop: topOffset
      },options.speed);

    });

    return this;

  };
}( jQuery ));
