$( document ).ready(function() {
  $('.navbar-header').find('a').off('click').on('click', function(e){
    e.preventDefault();
    var inicio = $(this).find('a').attr('href');
    $.scrollTo( inicio, 900, {axis:'y', offset:-95} );
  });

  $('.navbar-nav').find('li').off('click').on('click', function(e){
    e.preventDefault();
    var direcction = $(this).find('a').attr('href');
    $.scrollTo( direcction, 900, {axis:'y', offset:-80} );
  });

  $(window).scroll(function() {
   if ($('.navbar').offset().top > 70) {
     $('.navbar-fixed-top').addClass('top-nav-collapse');
   } else {
     $('.navbar-fixed-top').removeClass('top-nav-collapse');
   }
 });

  $('#descarga').click(function() {
    $('.modal').modal('show');
  });

    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init()

});
