$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
    $('.slick-slider').each(function () {
        let slider = $(this);

        let options = {
            prevArrow: slider.parent().find('.slider-prev'),
            nextArrow: slider.parent().find('.slider-next'),
            infinite: true,
            autoplay: true,
            dots: false
        };

        let extraOptions = {};

        if (slider.hasClass('directions')) {
            extraOptions = {
                slidesToShow: 3.3,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            };
        }


        slider.slick($.extend({}, options, extraOptions));
    });
});