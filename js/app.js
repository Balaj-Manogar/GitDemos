/* Main javascript file */

var a = 10;
var b = 20;

$(document).ready(function() {

  $('#trendingJcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
      var element = $(this),
        width = element.innerWidth();

      if (width > 900) {
        width = width / 3;
      } else if (width > 600) {
        width = width / 2;
      } else if (width < 600) {
        width = width;
      }

      element.jcarousel('items').css('width', width + 'px');
    })
    .jcarousel({
      wrap: 'circular'
    });

  $('.jcarousel-control-prev')
    .jcarouselControl({
      target: '-=2'
    });

  $('.jcarousel-control-next')
    .jcarouselControl({
      target: '+=2'
    });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .on('click', function(e) {
      e.preventDefault();
    })
    .jcarouselPagination({
      perPage: 2,
      item: function(page) {
        return '<a href="#' + page + '">' + page + '</a>';
      }
    });
  /*$('#trendingCarousel').carousel();
  $('.testC .item').each(function() {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
      next.children(':first-child').clone().appendTo($(this));
    }
    //next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 2; i++) {

      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
      next = next.next();
    }
  });
  */
});
