$(function () {


    // search click
    $(".btn_search").click(function () {
        $(".overlay").addClass("active");
        $("body").addClass("overflow_hide");
    });

    $(".fa-close").click(function () {
        $(".overlay").removeClass("active");
        $("body").removeClass("overflow_hide");
    });

    // navbar
    var subMenu = $(".navbar-nav .submenu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });

        var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".submenu").slideToggle();
            return false
        });

    }

    // banner slider
    function mainSlider() {
        var BasicSlider = $('.slider_active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.slider_active[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
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

    // work isotopes
    var $grid = $('.work_active').isotope({
        // options
        itemSelector: '.single_items',
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $('.work_btns').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // work venobox
    $('.work_item').venobox({
        share: ['facebook', 'twitter', 'download'],
        spinner: 'three-bounce'
    });

    // counter
    $('.counter').counterUp({
        time: 2000
    });

    // team slider
    $('.clint_slide').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    // faq area
    $('.faq_header').on('click', function () {
        $('.faq_header button').removeClass('faq_active');
        $(this).children('button').addClass('faq_active');
    });

    // animated 
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();


    // color picker
    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
        el: '.color_picker_box',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                input: true,
            }
        }
    });
    

    pickr.on('change', (color, instance) => {
        var colorCode = color.toHEXA().toString();
        
        document.documentElement.style.setProperty('--themecolor', colorCode)
        
    })




});
