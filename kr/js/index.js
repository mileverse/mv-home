$(document).ready(function(){
    $('#headers').load('/kr/common/header.html');
    $('#footers').load('/kr/common/footer.html');

    console.log($('.main').length)
    if($('.main').length ===0) {
        //scroll event;;
        $(window).scroll(function(){
            //스크롤 이동시 작동코드
            if($(window).scrollTop() <=540) {
                $('.header-wrap').removeClass("bl")
            } else {
                $('.header-wrap').addClass("bl")
            }
        });
    } else {
        $('.header-wrap').addClass("bl")
    }
    $('.input-file').change(function(e){
        $('#fileTxt').text($(this).val());
    })
    $('#fileBtn').click(function(e){
        e.preventDefault();
        $('.input-file').click();
    })
})