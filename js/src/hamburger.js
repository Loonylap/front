$(".hamburger").click(function(){
    $(".header nav").toggleClass("hamburger-menu")
    $(".header nav").toggleClass("menu")
    $("body").toggleClass("inactive")
    
})

$(".menu__link").click(function(){
    if ($(".header nav").hasClass('hamburger-menu')) {
        $(".header nav").toggleClass("hamburger-menu")
        $(".header nav").toggleClass("menu")
        $("body").toggleClass("inactive")
    }
})

$(document).on('click', '.hamburger-menu', function (e) {
    if(e.offsetX<0) {
        $(".header nav").toggleClass("hamburger-menu")
        $(".header nav").toggleClass("menu")
        $("body").toggleClass("inactive")
    }
  })