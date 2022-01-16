
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

// img hover시 생성
let item1 = document.querySelector(".content1_items .items.one .item.one > a > img");
item1.addEventListener("mouseover", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.one > div").forEach(el => {
        el.classList.add("show");
    });
});
item1.addEventListener("mouseout", () => {
    document.querySelectorAll(".content1_items .items.one .item.one div").forEach(el => {
        el.classList.remove("show");
    });
});
let item2 = document.querySelector(".content1_items .items.one .item.two a img");
item2.addEventListener("mouseover", () => {
    document.querySelectorAll(".content1_items .items.one .item.two div").forEach(el => {
        el.classList.add("show");
    });
});
item2.addEventListener("mouseout", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.two > div").forEach(el => {
        el.classList.remove("show");
    });
});
let item3 = document.querySelector(".content1_items > .items.one > .item.three > a > img");
item3.addEventListener("mouseover", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.three > div").forEach(el => {
        el.classList.add("show");
    });
});
item3.addEventListener("mouseout", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.three > div").forEach(el => {
        el.classList.remove("show");
    });
});
let item4 = document.querySelector(".content1_items > .items.one > .item.four > a > img");
item4.addEventListener("mouseover", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.four > div").forEach(el => {
        el.classList.add("show");
    });
});
item4.addEventListener("mouseout", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.four > div").forEach(el => {
        el.classList.remove("show");
    });
});
let item5 = document.querySelector(".content1_items > .items.one > .item.five > a > img");
item5.addEventListener("mouseover", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.five > div").forEach(el => {
        el.classList.add("show");
    });
});
item5.addEventListener("mouseout", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.five > div").forEach(el => {
        el.classList.remove("show");
    });
});
let item6 = document.querySelector(".content1_items > .items.one > .item.six > a > img");
item6.addEventListener("mouseover", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.six > div").forEach(el => {
        el.classList.add("show");
    });
});
item6.addEventListener("mouseout", () => {
    document.querySelectorAll(".content1_items > .items.one > .item.six > div").forEach(el => {
        el.classList.remove("show");
    });
});

// menu 클릭시 ul 생성, 삭제
let button = document.querySelectorAll(".content1_menu button").forEach(el => {
    el.addEventListener("click", (e) => {
        e.target.classList.add("active");
    });
});
