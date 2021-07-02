$(document).ready(function(){

    $('#headers').load('../common/header.html');
    $('#footers').load('../common/footer.html');

    // var agent = navigator.userAgent.toLowerCase();

    // if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
    //     $(".language-btnWrap").css('right','0')
    // }
    
    // $(window).scroll(function() {
    //     $('.header').css({left: 0 - $(this).scrollLeft()});
    // });
    
    // $('.menu_link').click(function(){
    //     var _target = $(this).data('target')
    //     var position = {};
    //     if (_target === "home") position.top = 0;
    //     else if(_target === "business") position = $('.value-area').offset();
    //     else if(_target === "app") position = $('.app-area').offset();
    //     else if(_target === "token") position = $('.token-area').offset();
    //     else if(_target === "roadmap") position = $('.road-area').offset();
    //     else if(_target === "members") position = $('.team-area').offset();
    //     else if(_target === "partners") position = $('.partners-area').offset();
    //     else if(_target === "footer") position = $('footer').offset();
    //     $("html,body").stop().animate({scrollTop:position.top},500)
    // })

    // $('.play-store').click(function(){
    //     window.open("https://play.google.com/store/apps/details?id=com.cordova.mileverse","_blank")
    // })
    // $('.app-store').click(function(){
    //     window.open("https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%BC%EB%B2%8C%EC%8A%A4/id1521818622","_blank")
    // })
    // $(".whitePaperBtn, .footer-btn").click(function(){
    //     if($(this).data('lang') === "kr") {
    //         window.open("https://drive.google.com/file/d/1xuifltQOWcW1P9CH2mIYq8PBXhc3ruxY/view?usp=sharing","_blank")
    //     } else if($(this).data('lang') === "en") {
    //         window.open("https://drive.google.com/file/d/1lUH4fnsnpI8bCrgpFKa0mPPttV7yNHJn/view?usp=sharing","_blank")
    //     } else if($(this).data('lang') === "cn") {
    //         window.open("https://drive.google.com/file/d/1W7J40XCaiVsoTXRh3cAg718kNzTFEx2g/view?usp=sharing","_blank")
    //     }
    // })
})