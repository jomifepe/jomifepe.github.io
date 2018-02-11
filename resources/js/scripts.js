$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

// $(document).ready(function() {
//     if(!$('#skill-tags-canvas').tagcanvas({
//         textColour : '#000',
//         outlineThickness : 0.5,
//         outlineColour : '#000',
//         maxSpeed : 0.06,
//         freezeActive:true,
//         shuffleTags:true,
//         shape:'sphere',
//         zoom:1,
//         noSelect:true,
//         textFont:null,
//         pinchZoom:true,
//         freezeDecel:true,
//         fadeIn:2000,
//         // shadow: '#000',
//         // shadowBlur: 2,
//         // shadowOffset: [1, 1],
//         zoomMax: 1,
//         zoomMin: 1,
//         initial: [0.07,-0.07],
//         depth: 1
//     })) {
//         $('.skill-tags').hide();
//     }
// });

// $('.card').tilt({
//     reverse:            false,
// 	max:                35,
// 	perspective:        2000,
// 	scale:              1,
// 	speed:              300,
// 	transition:         true,
// 	axis:               null,
// 	reset:              true,
//     easing:             "cubic-bezier(.03,.98,.52,.99)",
//     glare:              false,
//     "max-glare":        1,
//     "glare-prerender":  false
// });

// (function($) {
// 	skel.breakpoints({
// 		xlarge:	'(max-width: 1680px)',
// 		large:	'(max-width: 1280px)',
// 		medium:	'(max-width: 980px)',
// 		small:	'(max-width: 736px)',
// 		xsmall:	'(max-width: 480px)'
// 	});

// 	$(function() {
// 		var	$window = $(window),
// 			$body = $('body'),
// 			$sidebar = $('.sidebar');

// 		// Hack: Enable IE flexbox workarounds.
//         if (skel.vars.IEVersion < 12)
//             $body.addClass('is-ie');

// 		// Disable animations/transitions until the page has loaded.
//         if (skel.canUse('transition'))
//             $body.addClass('is-loading');

//         $window.on('load', function() {
//             window.setTimeout(function() {
//                 $body.removeClass('is-loading');
//             }, 100);
//         });

//         var $sidebar_a = $sidebar.find('a');

//         $sidebar_a.addClass('scrolly').on('click', function() {
    
//             var $this = $(this);
//             // External link? Bail.
//             if ($this.attr('href').charAt(0) != '#')
//                 return;

//             // Deactivate all links.
//             $sidebar_a.removeClass('active');

//             // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
//             $this.addClass('active').addClass('active-locked');

//         }).each(function() {
            
//             var	$this = $(this),
//                 id = $this.attr('href'),
//                 $section = $(id);

//             // No section for this link? Bail.
//             if ($section.length < 1)
//                 return;

//             // Scrollex.
//             $section.scrollex({
//                 mode: 'middle',
//                 top: '-20vh',
//                 bottom: '-20vh',
//                 initialize: function() {

//                     // Deactivate section.
//                     if (skel.canUse('transition'))
//                         $section.addClass('inactive');
//                 },
//                 enter: function() {
//                     // Activate section.
//                     $section.removeClass('inactive');

//                     // No locked links? Deactivate all links and activate this section's one.
//                     if ($sidebar_a.filter('.active-locked').length == 0) {
//                         $sidebar_a.removeClass('active');
//                         $this.addClass('active');
//                     } else if ($this.hasClass('active-locked')) {
//                         // Otherwise, if this section's link is the one that's locked, unlock it.
//                         $this.removeClass('active-locked');
//                     }
//                 }
//             });
//         });

// 		// Scrolly.
//         $('.scrolly').scrolly({
//             speed: 800,
//             offset: function() {
//                 // If <=large, >small, and sidebar is present, use its height as the offset.
//                 if (skel.breakpoint('large').active
//                 &&	!skel.breakpoint('small').active
//                 &&	$sidebar.length > 0)
//                     return $sidebar.height();

//                 return 0;
//             }
//         });

// 		// Spotlights.
//         $('.spotlights > section').scrollex({
//             mode: 'middle',
//             top: '-10vh',
//             bottom: '-10vh',
//             initialize: function() {
//                 // Deactivate section.
//                 if (skel.canUse('transition'))
//                     $(this).addClass('inactive');
//             },
//             enter: function() {
//                 // Activate section.
//                 $(this).removeClass('inactive');
//             }
//         }).each(function() {
//             var	$this = $(this),
//                 $image = $this.find('.image'),
//                 $img = $image.find('img'),
//                 x;

//             // Assign image.
//             $image.css('background-image', 'url(' + $img.attr('src') + ')');

//             // Set background position.
//             if (x = $img.data('position'))
//                 $image.css('background-position', x);

//             // Hide <img>.
//             $img.hide();
//         });

// 		// Features.
//         if (skel.canUse('transition')) {
//             $('.features').scrollex({
//                 mode: 'middle',
//                 top: '-20vh',
//                 bottom: '-20vh',
//                 initialize: function() {

//                     // Deactivate section.
//                     $(this).addClass('inactive');
//                 },
//                 enter: function() {
//                     // Activate section.
//                     $(this).removeClass('inactive');
//                 }
//             });
//         }
// 	});
// })(jQuery);

particlesJS('particles',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#555",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top-right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 10,
          "duration": 1,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100
        },
        "push": {
          "particles_nb": 1
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#333",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);