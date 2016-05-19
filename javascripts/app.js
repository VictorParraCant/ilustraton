$( document ).ready(function() {
  $('.navbar-nav').find('li').off('click').on('click', function(e){
    e.preventDefault();
    var direcction = $(this).find('a').attr('href');
    $.scrollTo( direcction, 900, {axis:'y', offset:-95} );
  });
});
