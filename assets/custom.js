$(function () {
    "use strict";

    /*------ MENU Fixed ------*/
    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();
        var $navbar = $(".navbar");
        var $header = $("#header ");
        if ($scroll > 100) {
            $navbar.addClass("scroll-nav");
            $header.addClass("bar-color");
        } else {
            $navbar.removeClass("scroll-nav");
            $header.removeClass("bar-color");
        }
    });

$('.banner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img alt='left-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/left.png'>","<img alt='right-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/right.png'>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.guess-slider1').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    navText: ["<img alt='left-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/left.png'>","<img alt='right-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/right.png'>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
});
$('.meet-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img alt='left-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/left.png'>","<img alt='right-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/right.png'>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.routine-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<img alt='left-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/left.png'>","<img alt='right-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.join-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<img alt='left-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/left.png'>","<img alt='right-arrow' src='https://cdn.shopify.com/s/files/1/0729/9370/2193/files/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


function brandSliderClasses() {
    $('.slider-nav').each(function() {
        var total = $(this).find('.slick-slide.slick-active').length;
        $(this).find('.slick-slide').removeClass('firstItem');
        $(this).find('.slick-slide').removeClass('lastItem');
        $(this).find('.slick-slide.slick-active').each(function(index) {
            if (index === 0) {
                console.log("here")
                $(this).addClass('firstItem')
            }
            if (index === total - 1 && total > 1) {
                $(this).addClass('lastItem');
            }

        })
    })
}
brandSliderClasses()

$('.slick-arrow, .slide-prev, .slide-next').on('click', function(event) {
    brandSliderClasses()
}); 

$('.member-slider').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,    
    smartSpeed:450,
    dots:false,
    arrow:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




  $(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});
$(document).ready(function(){
    $(".faqs .question").click(function(){
        $(this).closest(".faqs").find(".answer").slideToggle();
        $(this).closest(".faqs").prevAll(".faqs").find(".question").removeClass('active');
        $(this).closest(".faqs").nextAll(".faqs").find(".question").removeClass('active');
        $(this).toggleClass("active");
        $(this).closest(".faqs").nextAll(".faqs").find(".answer").hide();
        $(this).closest(".faqs").prevAll(".faqs").find(".answer").hide();
})
});


$('document').ready(function(){
// slick slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  if(screen.width>1024){
    
        // my slick slider options
        var options = {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            arrows: false,
            dotsClass: 'slick-dots slick-dots-black',
            adaptiveHeight: true,
            draggable: false
        };
        // my slick slider as constant object
        const mySlider = $('.slider-nav').on('init', function(slick) {
            multiSlideAdaptiveHeight(this);
        }).on('beforeChange', function(slick, currentSlide, nextSlide) {
            multiSlideAdaptiveHeight(this);
        }).slick(options);
        
        function multiSlideAdaptiveHeight(slider) {
            
            let activeSlides = [];
            let tallestSlide = 0;
            
            setTimeout(function() {
                $('.slick-track .slick-active', slider).each(function(i) {
                    activeSlides[i] = $(this).outerHeight();
                    
                });
                activeSlides.forEach(function(item) {
                    if (item > tallestSlide) {
                        tallestSlide = item;
                    }
                });
                $('.slick-list', slider).height(tallestSlide);
                
            }, 10);
            
        }
        
        $(window).on('resize', function() {
            multiSlideAdaptiveHeight(mySlider);
        });
  }
  else {
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
        arrows: false,
        centerMode: false
      });
  }

 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });


   
	$('.slide-prev').click(function(e){ 
        //e.preventDefault(); 
      $('.slider-for, .slider-nav').slick('slickPrev');
  } );
  
  $('.slide-next').click(function(e){
      //e.preventDefault(); 
      $('.slider-for, .slider-nav').slick('slickNext');
  } );  

 
});


    // partners slick slider

    $('.partner-ctm-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true, 
        responsive: [
            {
                breakpoint: 1191,
                settings: {
                  slidesToShow: 2,
                            
                },
              },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                arrows: true,
                prevArrow:
        '<span class="slick-prev arrow-btn"><img src="images/left.png"/></span>',
      nextArrow:
        '<span class="slick-next arrow-btn"><img src="images/right.png"/></span>',       
              },
            }
          ],       
      });

});



// humberger menu JS

const humbergerIcon = document.querySelector('.humber-menu .bars');
const humbergerInput = document.querySelector('.humber-menu input');
const mobileMenu = document.querySelector('.mobile-menu');

const overflowVisible = ()=>{
  document.documentElement.style.overflowY = "auto";
  document.body.style.overflowY  = "auto";
  
}

humbergerIcon.addEventListener('click',()=>{
    if(humbergerInput.checked == 0){        
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
      mobileMenu.style.cssText= 'transform:translateX(0);transition:.4s ease all;';
    }
    else {          
      overflowVisible(); 
      mobileMenu.style.cssText= 'transform:translateX(-100%);transition:.4s ease all;';    
    }
});