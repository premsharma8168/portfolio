(function ($) {
    "use strict";
    
    // JS Index
    //----------------------------------------
    // 1. sticky menu
    // 2. mobile-menu(mean-menu)
    // 3. preloader
    // 4. One Page Nav
    // 5. mobile-menu-sidebar
    // 6. background image
    // 7. brand active
    // 8. wow animation  active
    // 9. back top
    // 10. parallax
    //-------------------------------------------------

    // 1. sticky menu
    // ---------------------------------------------------------------------------
    var wind = $(window);
    var sticky = $("#header-sticky");
    wind.on('scroll', function () {
        var scroll = $(wind).scrollTop();
        if (scroll < 2) {
            sticky.removeClass("sticky-menu");
        } else {
            $("#header-sticky").addClass("sticky-menu");
        }
    });



        // 6. background image
    //---------------------------------------------------------------------------
    $("[data-background]").each(function (){
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
    });



    // slider - active
    //---------------------------------------------------------------------------
    function mainSlider() {
        var BasicSlider = $('.slider-active');

        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });

        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });

        BasicSlider.slick({
            dots: false,
            fade: true,
            // autoplay: true,
            // autoplaySpeed: 3000,
            arrows: true,
            prevArrow:'<b><i class="l-a fas fa-arrow-left"></i></b>',
            nextArrow:'<b><i class="r-a fas fa-arrow-right"></i></b>',
            responsive: [
                { breakpoint: 767, settings: {
                    arrows: false,
                } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();





    // 2. mobile-menu(mean-menu)
    //---------------------------------------------------------------------------
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });



    // 3. preloader
    //---------------------------------------------------------------------------
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    


    // 4. One Page Nav
    //---------------------------------------------------------------------------
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });



    // 5. mobile-menu-sidebar
    //---------------------------------------------------------------------------
    $(".mobile-menubar").on("click", function(){
        $(".side-mobile-menu").addClass('open-menubar');
        $(".body-overlay").addClass("opened");
    });
    $(".close-icon").click(function(){
        $(".side-mobile-menu").removeClass('open-menubar');
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function () {
		$(".side-mobile-menu").removeClass('open-menubar');
		$(".body-overlay").removeClass("opened");
	});




    // 7. testimonial active
    //---------------------------------------------------------------------------
    $('.testimonial-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    
//brand active------------------------
$('.brand-active').slick({
    dots: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});




    //blog active------------------------
    $('.blog-active').slick({
        dots: false,
        arrows: true,
        prevArrow:'<b><i class="l-a fas fa-angle-left"></i></b>',
        nextArrow:'<b><i class="r-a fas fa-angle-right"></i></b>',
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


// 8. wow animation  active
// ---------------------------------------------------------------------------












	////////////////////////////////////////////////////
    // 07. Scroll To Top Js
	// function smoothSctollTop() {
	// 	$('.smooth-scroll a').on('click', function (event) {
	// 		var target = $(this.getAttribute('href'));
	// 		if (target.length) {
	// 			event.preventDefault();
	// 			$('html, body').stop().animate({
	// 				scrollTop: target.offset().top - 0
	// 			}, 1500);
	// 		}
	// 	});
	// }
	// smoothSctollTop();

	// // Show or hide the sticky footer button
	// $(window).on('scroll', function(event) {
	// 	if($(this).scrollTop() > 600){
	// 		$('#scroll').fadeIn(200)
	// 	} else{
	// 		$('#scroll').fadeOut(200)
	// 	}
	// });

	// //Animate the scroll to yop
	// $('#scroll').on('click', function(event) {
	// 	event.preventDefault();

	// 	$('html, body').animate({
	// 		scrollTop: 0,
	// 	}, 1500);
	// });


// $('.counter').counterUp({
//     delay: 100,
//     time: 1000
// });
// // $(".counter").counterUp({
// //     // time: 1e3
// // });



// 10. tilt js
// ---------------------------------------------------------------------------
$('.tilt').tilt({
    maxTilt:        15,
    perspective:    1500,
});





// 10. counter js
// ---------------------------------------------------------------------------
$('.counter').counterUp({
    delay: 10,
    time: 3000
});






  /*---------------------

        Circular Bars - Knob

     --------------------- */



     if (typeof ($.fn.knob) != 'undefined') {

        $('.knob').each(function () {
    
          var $this = $(this),
    
            knobVal = $this.attr('data-rel');
    
    
    
          $this.knob({
    
            'draw': function () {
    
              $(this.i).val(this.cv + '%')
    
            }
    
          });
    
    
    
          $this.appear(function () {
    
            $({
    
              value: 0
    
            }).animate({
    
              value: knobVal
    
            }, {
    
              duration: 2000,
    
              easing: 'swing',
    
              step: function () {
    
                $this.val(Math.ceil(this.value)).trigger('change');
    
              }
    
            });
    
          }, {
    
            accX: 0,
    
            accY: -150
    
          });
    
        });
    
    };






// 10. aos js
// ---------------------------------------------------------------------------
AOS.init();





//lsotope----------------------------
    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
        }
      });
      $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
      });

    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });







/*================================================================= 
    Map
==================================================================*/
var map = L.map('mapwrapper').setView([-37.817160, 144.955937], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var greenIcon = L.icon({
    iconUrl: "images/map-marker.png",

    iconSize:     [78, 78], // size of the icon
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [72, 72],
});

L.marker([-37.817160, 144.955937], {icon: greenIcon}).addTo(map);



 // 3. Animate the scroll to top
// --------------------------------------------------------------------------
// Show or hide the sticky footer button
$(window).on('scroll', function() {
    // if($(this).scrollTop() > 600){
    //     $('#scroll').fadeIn(1000);
    // } else{
    //     $('#scroll').fadeOut(1000);
    // }
    if($(this).scrollTop() > 900){
        $('#scroll').fadeIn(1200)
    } else{
        $('#scroll').fadeOut(1200)
    }
});

$('#scroll').on('click', function(event) {
    event.preventDefault();
    
    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});



  

})(jQuery);	  