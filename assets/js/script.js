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
const heroSwiper = new Swiper('.hero-section .swiper', {
    // Optional parameters
    // direction: 'horizontal',
    slidesPerView: 'auto',
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