let fun = function() {
    $(".header nav").toggleClass("hamburger-menu")
    $(".header nav").toggleClass("menu")
    $("body").toggleClass("inactive")
}

$(".hamburger").click(fun);

$(".menu__link").click(function(){
    if ($(".header nav").hasClass('hamburger-menu')) {
        fun();
    }
})

$(document).on('click', '.hamburger-menu', function (e) {
    if(e.offsetX<0) {
        fun();
    }
})

