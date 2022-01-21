
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
    autoplay: {
        delay: 5000,
    },
});

// img hover시 생성

// let item1 = document.querySelector(".content1_menu .items > ul > .item.one > a > img");
// item1.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content1_menu .items .item.one > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item1.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content1_menu .items .item.one > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item2 = document.querySelector(".content1_menu .items > ul > .item.two > a > img");
// item2.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content1_menu .items .item.two > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item2.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content1_menu .items .item.two > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item3 = document.querySelector(".content1_menu .items > ul > .item.three > a > img");
// item3.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content1_menu .items .item.three > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item3.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content1_menu .items .item.three > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item4 = document.querySelector(".content1_menu .items > ul > .item.four > a > img");
// item4.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content1_menu .items .item.four > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item4.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content1_menu .items .item.four > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item5 = document.querySelector(".content1_menu .items > ul > .item.five > a > img");
// item5.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content1_menu .items .item.five > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item5.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content1_menu .items .item.five > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item6 = document.querySelector(".content1_menu .items > ul > .item.six > a > img");
// item6.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content1_menu .items .item.six > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item6.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content1_menu .items .item.six > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });

// let item7 = document.querySelector(".content2_menu .items > ul > .item.one > a > img");
// item7.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content2_menu .items .item.one > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item7.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content2_menu .items .item.one > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item8 = document.querySelector(".content2_menu .items > ul > .item.two > a > img");
// item8.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content2_menu .items .item.two > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item8.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content2_menu .items .item.two > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item9 = document.querySelector(".content2_menu .items > ul > .item.three > a > img");
// item9.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content2_menu .items .item.three > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item9.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content2_menu .items .item.three > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item10= document.querySelector(".content2_menu .items > ul > .item.four > a > img");
// item10.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content2_menu .items .item.four > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item10.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content2_menu .items .item.four > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item11 = document.querySelector(".content2_menu .items > ul > .item.five > a > img");
// item11.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content2_menu .items .item.five > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item11.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content2_menu .items .item.five > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });
// let item12 = document.querySelector(".content2_menu .items > ul > .item.six > a > img");
// item12.addEventListener("mouseover", () => {
//     document.querySelectorAll(".content2_menu .items .item.six > div").forEach(el => {
//         el.classList.add("show");
//     });
// });
// item12.addEventListener("mouseout", () => {
//     document.querySelectorAll(".content2_menu .items .item.six > div").forEach(el => {
//         el.classList.remove("show");
//     });
// });

document.querySelectorAll(".content1_menu .items > ul > .item").forEach((el) => {
    el.addEventListener("mouseover", (e) => {
        let target = e.currentTarget;
        target.querySelectorAll("div").forEach((el) => {
            el.classList.add("show");
        });
    });
    el.addEventListener("mouseout", (e) => {
        let target = e.currentTarget;
        target.querySelectorAll("div").forEach((el) => {
            el.classList.remove("show");
        });
    });
});

document.querySelectorAll(".content2_menu .items > ul > .item").forEach((el) => {
    el.addEventListener("mouseover", (e) => {
        let target = e.currentTarget;
        target.querySelectorAll("div").forEach((el) => {
            el.classList.add("show");
        });
    });
    el.addEventListener("mouseout", (e) => {
        let target = e.currentTarget;
        target.querySelectorAll("div").forEach((el) => {
            el.classList.remove("show");
        });
    });
});

document.querySelectorAll(".content3_menu .items > ul > .item").forEach((el) => {
    el.addEventListener("mouseover", (e) => {
        let target = e.currentTarget;
        target.querySelectorAll("div").forEach((el) => {
            el.classList.add("show");
        });
    });
    el.addEventListener("mouseout", (e) => {
        let target = e.currentTarget;
        target.querySelectorAll("div").forEach((el) => {
            el.classList.remove("show");
        });
    });
});

// menu 클릭시 ul 생성, 삭제

$(document).ready(function(){

    $('.menu_btn1 > ul > li').on("click", function(e) {

        e.preventDefault();

        $('.menu_btn1 > ul > li').removeClass("active");
        $(this).addClass("active");

        var tab_id = $(this).attr('data-tab');

		$('.menu_btn1 > ul > li').removeClass('current');
		$('.content1_menu > .items').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    });

});

$(document).ready(function(){

    $('.menu_btn2 > ul > li').on("click", function(e) {

        e.preventDefault();

        $('.menu_btn2 > ul > li').removeClass("active");
        $(this).addClass("active");

        var tab_id = $(this).attr('data-tab');

		$('.menu_btn2 > ul > li').removeClass('current');
		$('.content2_menu > .items').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    });
});

// topbutton

document.querySelector(".topbutton").addEventListener("click", (e) => {
    document.querySelector("#header").scrollIntoView({behavior:'smooth'});
});