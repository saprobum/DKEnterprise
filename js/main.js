(function ($) {
    "use strict";
  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.nav_bar').addClass('sticky-top');
    } else {
        $('.nav_bar').removeClass('sticky-top');
    }
});
checkScroll();
function checkScroll() {
    let nav = document.getElementById("navigation-bar")
    console.log('nav.offsetTop',nav.offsetTop);
    if (nav.offsetTop== 0) {
        $('.nav_bar').addClass('sticky-top');
    } else {
        $('.nav_bar').removeClass('sticky-top');
    }
}

    // Initiate the wowjs
    new WOW().init();


    // // Sticky Navbar
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 0) {
    //         $('.nav_bar').addClass('sticky-top');
    //     } else {
    //         $('.nav_bar').removeClass('sticky-top');
    //     }
    // });
    // let nav = document.getElementById("navigation-bar");
    // let sticky = nav.offsetTop;
    // window.onscroll = function() {sticker()};
    // function sticker() {
    // if (window.pageYOffset >= sticky) {
    //     nav.classList.add("sticky")
    // } else {
    //     nav.classList.remove("sticky");
    // }
    // }
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
  

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0 : {
                nav : false,
            },
            // breakpoint from 480 up
            480 : {
                nav : false,
            },
            // breakpoint from 768 up
            768 : {
                nav : false,
            }
        }
    });
    $(".review").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 4,
        dots: false,
        loop: true,
        nav : false,
        // navText : [
        //     '<i class="bi bi-chevron-left"></i>',
        //     '<i class="bi bi-chevron-right"></i>'
        // ],
        responsiveClass: true,
        responsive: {
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            480 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            },
            991 : {
                items: 3,
            }
        }
    });
    $(".brands").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 5,
        dots: false,
        loop: true,
        nav : false,
        // navText : [
        //     '<i class="bi bi-chevron-left"></i>',
        //     '<i class="bi bi-chevron-right"></i>'
        // ],
        responsiveClass: true,
        responsive: {
            0 : {
                items: 2,
            },
            // breakpoint from 480 up
            480 : {
                items: 2,
            },
            // breakpoint from 768 up
            481 : {
                items: 3,
            },
            768 : {
                items: 3,
            },
            991 : {
                items: 6,
            }
        }
    });
    $(".item_slide").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false,
        
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);
// $(document).ready(function() {
//     $('.select2').select2(
//         {
//             // theme: "classic"
//         }
//     );
    
// });
