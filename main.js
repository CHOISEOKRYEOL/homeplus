
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 300,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let img = document.querySelector(".item > a");
let itemNav = document.querySelector(".item_nav");
// img.addEventListener("mouseover", () => {
//     itemNav.classList.add("show");
// });
// img.addEventListener("mouseout", () => {
//     itemNav.classList.remove("show");
// });
document.querySelectorAll(".content1_items ul li div").forEach(el => {
    img.addEventListener("mouseover", () => {
        el.classList.add("show");
    });
    img.addEventListener("mouseout", () => {
        el.classList.remove("show");
    })
});

