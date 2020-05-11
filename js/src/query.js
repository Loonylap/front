let fun1 = function() {
    $("#3").toggleClass("purchase-window__active")
    $("#3").toggleClass("purchase-window")
    $("body").toggleClass("inactive")
    $('.success_msg').hide()
    $('.fail_msg').hide()
}



$("#2").click(fun1);

$('#1').click(function () {
    let fn = $(".name").val();
    let ln = $(".phone").val();
    $.ajax({
        url: "https://httpbin.org/status/200",
        data: fn&ln,
        success: function () {
            $('.success_msg').toggle()
        },
        error: function () {
            $('.fail_msg').toggle()
        }
    })
});


jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#3"); // тут указываем ID элемента
        
		if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0
            && div.hasClass('purchase-window__active'))
            { // и не по его дочерним элементам
			fun1()
		}
	});
});