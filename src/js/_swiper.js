let swiper = new Swiper(".fullPage__swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

let swiperPagination = document.querySelector(".fullPage__pagination");

swiper.on("slideChange", function(e) { // на событие смены слайда скрываем пагинацию на первом (нулевой индекс) слайде
    // console.log(e.activeIndex);
    if (e.activeIndex === 0) {
        swiperPagination.classList.add("fullPage__pagination--hidden");
    }
    else {
        swiperPagination.classList.remove("fullPage__pagination--hidden");
    }
});

let swiperProject = new Swiper(".projects__swiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
        nextEl: ".projects__pagination .swiper-button-next",
        prevEl: ".projects__pagination .swiper-button-prev",
    },
});

let swiperPublications = new Swiper(".publications__swiper", {
    slidesPerView: 3,
    spaceBetween: 75,
    navigation: {
        nextEl: ".publications__pagination .swiper-button-next",
        prevEl: ".publications__pagination .swiper-button-prev",
    },
});