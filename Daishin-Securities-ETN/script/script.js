// navigation
$(".gnb").on("mouseenter", function () {
    $(".gnb li ul").css("background", "#fff");
    $(".gnb li ul").css("height", "300px");
    $(".gnb_bg").css("height", "300px");
    $(".gnb_bg").slideDown();
    $(".gnb li ul").slideDown();
});
$(".gnb li ul").on("mouseleave", function () {
    $(".gnb li ul").slideUp(); 
    $(".gnb_bg").slideUp();
});

// mobile-navigation
const Menu = document.querySelector(".menu");
const Nav = document.querySelector(".nav");
const Close = document.querySelector(".m-close");

Menu.addEventListener("click", () => {
    document.querySelector(".nav").style.display = "block";
    Nav.classList.add("nav-open");
});

Close.addEventListener("click", () => {
    Nav.classList.remove("nav-open");
});

// footerbar
$(function () {
    $(".family").on("click", function () {
        $(".family span").toggleClass("rotate");
        $(".family ul").slideToggle(); 
    });
});

// top
//top버튼 시작
window.addEventListener("scroll", () => {
    let scrollTop =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop; //다써줌 브라우저 호환문제

    // 01
    // if(scrollTop > 0) {
    //   document.querySelector("#parallax__nav").classList.add("show");
    // } else {
    //   document.querySelector("#parallax__nav").classList.remove("show");
    // }

    // 02
    // top 버튼 보여주기/안보여주기
    if (scrollTop + window.innerHeight >= document.body.scrollHeight) {
        // console.log(window.innerHeight);

        document.querySelector(".topBtn").classList.add("show");
    } else {
        document.querySelector(".topBtn").classList.remove("show");
    }
    // top 버튼
    document.querySelector(".topBtn").addEventListener("click", () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    });
});

// swiper
var heroSwiper = new Swiper(".hero-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// fade

var pdtSwiper = new Swiper(".pdt-swiper", {
    spaceBetween: 30,
    speed: 1000,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
