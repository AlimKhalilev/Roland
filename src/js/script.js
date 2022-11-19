--include("_webpsup.js");
    
--include("_globals.js")

--include("_modal.js")
--include("_burger.js")
//-include("_slider.js")
--include("_scroll.js")

--include("_passwordSwitcher.js")
--include("_customSelect.js")
--include("_details.js")
--include("_dropdown.js")

--include("_adaptImg.js")
--include("_intersection.js")

--include("_contentSelect.js")
--include("_swiper.js")

document.querySelectorAll(".version").forEach(item => { // устанавливаем на нужных элементах версию разработки
    item.innerHTML = "1.2.4";
});

$(".field__input--number").each(function() {
    $(this).mask("+380 99 999 9999");
});

// ПЕРЕКЛЮЧЕНИЕ ПОЛЯ ПОИСКА В ХЕАДЕРЕ

let header_search_show = document.querySelector(".header__search .socialMenu__icon");
let header_search_hide = document.querySelector(".header__search .c-field__icon--left");
let header_search_class_container = document.querySelector(".header__controls");

if (header_search_show !== null && header_search_hide !== null && header_search_class_container !== null) {
    
    header_search_show.addEventListener("click", (e) => {
        header_search_class_container.classList.toggle("searchActive");
    });

    header_search_hide.addEventListener("click", (e) => {
        header_search_class_container.classList.toggle("searchActive");
    });
}