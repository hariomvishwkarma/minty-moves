$(document).ready(function() {
    var scrollAmount = 0;
    var carouselWidth = $(".carousel").width();
    var contentWidth = 0;

    $(".carousel-content").each(function() {
        contentWidth += $(this).outerWidth(true);
    });

    var itemWidth = $(".carousel-content").outerWidth(true);

    $(".next").on("click", function() {
        if (scrollAmount < contentWidth - carouselWidth) {
            $(".carousel").animate({
                scrollLeft: scrollAmount + itemWidth
            }, 200, function() {
                scrollAmount += itemWidth;
            });
        }

        updateButtonStatus();
    });

    $(".prev").on("click", function() {
        if (scrollAmount != 0) {
            $(".carousel").animate({
                scrollLeft: scrollAmount - itemWidth
            }, 200, function() {
                scrollAmount -= itemWidth;
            });
        }

        updateButtonStatus();
    });

    function updateButtonStatus() {
        $(".prev").prop('disabled', scrollAmount == 0);
        $(".next").prop('disabled', scrollAmount >= contentWidth - carouselWidth);
    }

    $(window).resize(function() {
        carouselWidth = $(".carousel").width();
        updateButtonStatus();
    });

    updateButtonStatus();
});

$(document).ready(function() {
    $('.tab').each(function() {
        var $highlight = $(this).parent().siblings('.highlight');
        var $activeTab = $(this).parent().find('.active');

        $highlight.width($activeTab.outerWidth());
        $highlight.offset({ left: $activeTab.offset().left });
    });

    $('.tab').click(function() {
        var $highlight = $(this).parent().siblings('.highlight');
        var $activeTab = $(this).parent().find('.active');
        var contentId = $(this).data('tab'); // get content div index from data-tab attribute
        var $activeContent = $(this).closest('.top-head').siblings('.tab-content.active');

        $activeTab.removeClass('active');
        $activeContent.hide().removeClass('active');
        $(this).addClass('active');
        $(this).closest('.top-head').siblings('.tab-content[data-content=' + contentId + ']').hide().addClass('active').fadeIn(600);
        $activeTab = $(this);
        $activeContent = $(this).closest('.top-head').siblings('.tab-content.active');

        $highlight.width($activeTab.outerWidth());
        $highlight.offset({ left: $activeTab.offset().left });
    });
});


// $(document).ready(function() {
const heroSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const destinationSwiper = new Swiper('.destination-section .swiper', {
    // Optional parameters
    // direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    // centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        // When screen width is 768 pixels or less
        996: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        300: {
            slidesPerView: 1,
        },
        // Add more breakpoints if needed
    },
});
// });


$(document).ready(function() {
    $('.second-sec-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        nextArrow: '<svg class="slick-arrow nextArrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle opacity="0.1" cx="20" cy="20" r="20" transform="matrix(-1 0 0 1 40 0)" fill="black"/><path d="M17.6031 14.4L23.2031 20.8L17.6031 26" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
        prevArrow: '<svg class="slick-arrow prevArrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle opacity="0.1" cx="20" cy="20" r="20" fill="black"/><path d="M22.3969 14.4L16.7969 20.8L22.3969 26" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 596,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.fourth-sec-tab-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        dots: true,
        // nextArrow: '<svg class="slick-arrow nextArrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle opacity="0.1" cx="20" cy="20" r="20" transform="matrix(-1 0 0 1 40 0)" fill="black"/><path d="M17.6031 14.4L23.2031 20.8L17.6031 26" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
        // prevArrow: '<svg class="slick-arrow prevArrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle opacity="0.1" cx="20" cy="20" r="20" fill="black"/><path d="M22.3969 14.4L16.7969 20.8L22.3969 26" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 596,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.third-sec-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 800,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        dots: true,
        fade: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                fade: false,
                arrows: false,
            }
        }]
    });
});