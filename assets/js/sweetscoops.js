$(document).ready(function() {
  mobileNav();
  tidBits();
  demoSlides();
  verticalCenter();
  new WOW().init();
});

if(!Modernizr.touch){
  $.stellar({
    horizontalScrolling: false,
    verticalScrolling: true,
    responsive: true
  });
}

if(Modernizr.touch){
  $('.contact').css({'background-attachment':'scroll'});
  $('.twitter').css({'background-attachment':'scroll'});
  $('.home-header').css({'background-attachment':'scroll'});
}

$(window).resize(function() {
    $.stellar('refresh');
});

$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: false,
		itemWidth: 200,
		minItems: 2,
		maxItems: 3,
		itemMargin: 0
	});
  mapClick();
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});

$(document).foundation();

function demoSlides() {
  $('.the-demos').flexslider({
    animation: "fade",
    selector: "> .demo",
    directionNav: false,
    controlNav: false
  });
  $('.the-reviews').flexslider({
    animation: "fade",
    selector: "> .review",
    directionNav: false,
    controlNav: false
  });
  $('.the-thoughts').flexslider({
    animation: "fade",
    selector: "> .thought",
    directionNav: false,
    controlNav: false
  });
  $(window).resize();
}

function tidBits() {
  var $container = $('.masonry-container');
  $container.masonry({
    columnWidth: $(document).width() > 1024 ? 350 : 250,
    itemSelector: '.tidbit-item',
    gutter: $(document).width() > 1024 ? 30 : 5,
    isFitWidth: true
  });
}

function mapClick() {
  $('#map-east').click(function() {
    window.location = "/locations/";
  });
}

function mobileNav() {
  $('.mobile-nav-link').click(function() {
    $('.mobile-nav').slideToggle();
    return false;
  });
  $('.mobile-nav a').click(function() {
    $('.mobile-nav').slideToggle();
  });
}

function verticalCenter() {
  var element = $('.vert-center');
    element.css({
        'position' : 'absolute',
        'left' : '50%',
        'top' : '50%',
        'margin-left' : -element.outerWidth()/2,
        'margin-top' : -element.outerHeight()/2,
        'width' : '100%'
    });
}

$(window).resize(function() {
  verticalCenter();
});
