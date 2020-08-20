$(document).ready(function(){
    var agent = navigator.userAgent.toLowerCase();

    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
        $(".language-btnWrap").css('right','0')
    }
    
    $(window).scroll(function() {
        $('.header').css({left: 0 - $(this).scrollLeft()});
    });
    
    $('.menu_link').click(function(){
        var _target = $(this).data('target')
        var position = {};
        if (_target === "home") position.top = 0;
        else if(_target === "business") position = $('.value-area').offset();
        else if(_target === "app") position = $('.app-area').offset();
        else if(_target === "token") position = $('.token-area').offset();
        else if(_target === "roadmap") position = $('.road-area').offset();
        else if(_target === "members") position = $('.team-area').offset();
        else if(_target === "partners") position = $('.partners-area').offset();
        else if(_target === "footer") position = $('footer').offset();
        $("html,body").stop().animate({scrollTop:position.top},500)
    })

    $('.play-store').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.cordova.mileverse","_blank")
    })
    $('.app-store').click(function(){
        window.open("https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%BC%EB%B2%8C%EC%8A%A4/id1521818622","_blank")
    })
    $(".whitePaperBtn, .footer-btn").click(function(){
        $(this).data('lang') === "kr" ? window.open("https://drive.google.com/file/d/1xuifltQOWcW1P9CH2mIYq8PBXhc3ruxY/view?usp=sharing","_blank") : alert("업로드 예정입니다.")
    })
    $('#lang').change(function(e){
        $(this).prop('checked') === true ? location.href= '/en' : location.href= '/'
    })
})