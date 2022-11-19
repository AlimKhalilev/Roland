let swiper;

if (window.innerWidth >= 1020 && document.documentElement.offsetWidth >= 1020) {

    swiper = new Swiper(".fullPage__swiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        //effect: "fade",
        speed: 1200,
        mousewheel: true,
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
    
    let swiperPagination = document.querySelector(".fullPage__pagination");
    
    swiper.on("slideChange", function(e) { // на событие смены слайда скрываем пагинацию на первом и последнем слайде
        if (e.isBeginning || e.isEnd) {
            swiperPagination.classList.add("fullPage__pagination--hidden");
        }
        else {
            swiperPagination.classList.remove("fullPage__pagination--hidden");
        }
    });

    document.querySelectorAll(".footer__scrollBlock").forEach(item => {
        item.addEventListener("click", (e) => {
            swiper.slideTo(swiper.activeIndex - 1);
        });
    });
    
}

// Скролл по секциям из меню

document.querySelectorAll("[data-scrollSection]").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.innerWidth >= 1020 && document.documentElement.offsetWidth >= 1020) {
            swiper.slideTo(+item.dataset.scrollsection);
        }
        else {
            Scroll.moveTo(+item.dataset.scrollsection)
        }
    });
});

let swiperProject = new Swiper(".projects__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".projects__pagination .swiper-button-next",
        prevEl: ".projects__pagination .swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 480px
        821: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        // when window width is >= 640px
        1020: {
          slidesPerView: 2,
          spaceBetween: 0
        }
    }
});

let swiperCommand = new Swiper(".newCommand__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".newCommand__pagination .swiper-button-next",
        prevEl: ".newCommand__pagination .swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 480px
        821: {
          slidesPerView: 2,
          spaceBetween: 32
        },
        // when window width is >= 640px
        1020: {
          slidesPerView: 2,
          spaceBetween: 32
        }
    }
});

let swiperPublications = new Swiper(".publications__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".publications__pagination .swiper-button-next",
        prevEl: ".publications__pagination .swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 480px
        821: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        // when window width is >= 640px
        1020: {
          slidesPerView: 3,
          spaceBetween: 75
        }
    }
});


// PRODUCTS //

let swiperProducts = new Swiper(".products__swiper", {
    slidesPerView: 1,
    effect: "fade",
    allowTouchMove: false
});

let tablistActiveId = 0;

document.querySelectorAll(".tablist .tablist__input").forEach(item => {
    item.addEventListener("change", (e) => {
        swiperProducts.slideTo(e.target.value);
    });
});

// /* PRODUCTS /*

// REVIEWS //

let swiperReviewsPreview = new Swiper(".reviews__thumbsSwiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 480px
        821: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        // when window width is >= 640px
        1020: {
          slidesPerView: 5,
          spaceBetween: 16
        }
    }
});

let swiperReviews = new Swiper(".reviews__swiper", {
    slidesPerView: 1,
    effect: "fade",
    allowTouchMove: false,
    thumbs: {
        swiper: swiperReviewsPreview,
    },
});

// /* REVIEWS */ //