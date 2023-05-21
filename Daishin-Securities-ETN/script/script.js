// navigation
$(".gnb").on("mouseenter", function () {
    $(".gnb li ul").css("background", "#fff");
    $(".gnb li ul").css("height", "300px");
    $(".gnb_bg").css("height", "300px");
    $(".gnb_bg").slideDown();
    $(".gnb li ul").slideDown(); // 2초에 걸쳐서 진행
});
$(".gnb li ul").on("mouseleave", function () {
    $(".gnb li ul").slideUp(); // 2초에 걸쳐서 진행
    $(".gnb_bg").slideUp(); // 2초에 걸쳐서 진행
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

// sider

// footerbar
$(function () {
    $(".family").on("click", function () {
        $(".family span").toggleClass("rotate");
        $(".family ul").slideToggle(); // 2초에 걸쳐서 진행
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
