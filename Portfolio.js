window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY >2);
})



$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing",{
        strings: ["UI Developer", "UI Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});
