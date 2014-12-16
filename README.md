$.scrollToID()
==========
##Smooth Scrolling to an ID on the page. 

scrollToID is a jQuery plugin that attaches to an anchor link. Just make the anchor reference an id with the # tag. It nicely falls back to standard anchor links and accepts an offset and speed argument. 

##Example
It's so easy:

####HTML

    <a href="#infobox" class="js-scrolltoid">Click Me</a>
    
####Javascript

    $('.js-scrolltoid').scrollToID({
      speed: 1000, //expressed in Milliseconds
      offset: 30   //in pixels
    });

  
