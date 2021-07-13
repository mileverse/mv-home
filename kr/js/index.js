$(document).ready(function(){
    AOS.init();

    $('#headers').load('/kr/common/header.html');
    $('#footers').load('/kr/common/footer.html');

    if($('.main').length ===0) {
        //scroll event;;
        $(window).scroll(function(){
            //스크롤 이동시 작동코드
            var _height = isMobile() ? 240 : 540;
            if($(window).scrollTop() <=_height) {
                $('.header-wrap').removeClass("bl")
            } else {
                $('.header-wrap').addClass("bl")
            }
        });
    } else {
        $('.header-wrap').addClass("bl");
    }
    $('.input-file').change(function(e){
        $('#fileTxt').text($(this).val());
    })
    $('#fileBtn').click(function(e){
        e.preventDefault();
        $('.input-file').click();
    })
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
})