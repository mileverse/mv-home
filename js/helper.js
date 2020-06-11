$(document).ready(function(){
    $('.header-img').addClass('scale')
    setTimeout(function(){
        $('.header-txt-color').height('116%');
    },1000)

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
    });
    // if($(window).height()>918){
    //     scrollEvent()
    // }

    // $(window).resize(bindScrollEvent)
    // function bindScrollEvent(){
    //     if($(window).height()<918){
    //         $('.scroll-point').unbind("mousewheel DOMMouseScroll")        
    //     } else {
    //         scrollEvent()
    //     }
    // }
    function scrollEvent() {
        $('.scroll-point').each(function(index){
            $(this).on("mousewheel DOMMouseScroll",function(e){
                if($(window).scrollTop() >=4800 && $(window).scrollTop() <=5542) {
                    return;
                } else if($(window).scrollTop() >=9101 && $(window).scrollTop() <=9740){
                    return;
                
                } else if($(window).scrollTop() >=6509 && $(window).scrollTop() <=7132){
                    return;
                }
                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } 
                else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(".scroll-point").eq(index);
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(elmSelecter).next() != undefined) {
                        try{
                            var _next = $(elmSelecter).next()
                            moveTop = _next.offset().top;
                        }catch(e){
                            moveTop = $(elmSelecter).offset().top+100;
                        }
                    }else {
                        console.log(456)
                    }
                // 마우스휠을 아래에서 위로
                } else {
                    if ($(elmSelecter).prev() != undefined) {
                        try{
                            var _prev = $(elmSelecter).prev()
                            moveTop = _prev.offset().top;
                            if(_prev.data('mark') === 'app') moveTop = 5542;
                            else if(_prev.data('mark') === 'members') moveTop = 9740;
                            else if(_prev.data('mark') === 'token') moveTop = 7132;
                        }catch(e){}
                    }
                }
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    }
                });
            })
        })
    }
    window.addEventListener('load', AOS.refresh);

    // $('body').wheel(function (e) {
    //     if(e.delta >0 ) { //내린거
    //         $('.header').removeClass('up').addClass('down')
    //     } else if( e.delta <0 ) { //올린거
    //         $('.header').removeClass('down').addClass('up')
    //     }
    // });
    $(window).on('scroll',function(){
        if($('.header').offset().top<693) {
            headerDark()
        }else {
            headerWhite()
        }
        var currentPercentage = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
        $('.progressbar').width(currentPercentage+'%');
    })
           
    $('.business-eco-card-wrapper').waypoint(function(direction){
        if(direction === 'down') {
            $('.business-eco-card-wrapper li').animate({
                height:'310px',
                padding:'30px 0'
            },800);
        }else if(direction === 'up') {
            $('.business-eco-card-wrapper li').animate({
                height:'0px',
                padding:'0'
            },800);
        }
    },{ offset: '80%' })


    $('.token-border').waypoint(function(direction){
        if(direction === 'down') {
            $('.token-border').addClass('border-active').removeClass('border-passive');
        }else if(direction === 'up') {
            $('.token-border').addClass('border-passive').removeClass('border-active');
        }
    },{ offset: '80%' })

    $('#svg-ci').waypoint(function(direction){
        if(direction === 'down') {
            svgDownAnimation('#svg-ci','path')
            $('.svg-ci-txt').removeClass('fade-out').addClass('fade-in')
        } else if(direction === 'up') {
            svgUpAnimation('#svg-ci','path')
            $('.svg-ci-txt').removeClass('fade-in').addClass('fade-out')
        }
    },{offset: '80%'})

    $('#roadmap').waypoint(function(direction){
        if(direction === 'down') {
            svgDownAnimation('#roadmap','polyline')
            $('.road-map-txt').removeClass('fade-out').addClass('fade-in')
            $('.road-map-line').removeClass('fade-out').addClass('fade-in')
        } else if(direction === 'up') {
            svgUpAnimation('#roadmap','polyline')
            $('.road-map-txt').removeClass('fade-in').addClass('fade-out')
            $('.road-map-line').removeClass('fade-in').addClass('fade-out')
        }
    },{offset:'80%'})

    $('.bs-overview-container').waypoint(function(direction){
        if(direction === 'down') {
            $('.mask-right').css('right','100%');
            $('.mask-left').css('left','100%');
            $('.mask-top').css('top','100%');
            $('.mask-bottom').css('bottom','100%');
            $('.bs-overview-arrow-txt').removeClass('fade-out').addClass('fade-in')
        } else if(direction === 'up') {
            $('.mask-right').css('right','0');
            $('.mask-left').css('left','0');
            $('.mask-top').css('top','0');
            $('.mask-bottom').css('bottom','0');
            $('.bs-overview-arrow-txt').removeClass('fade-in').addClass('fade-out')
        }
    },{offset:'40%'});

    $('.app-btn').click(function(){
        alert('출시 대기 중 입니다.')
    });

    $('.email-btn').click(function(){
        var _name = $('#name').val();
        var _email = $('#email').val();
        var _title = $('#title').val();
        var _contents = $('#contents').val();
        if(_name === "") {
            alert('이름을 입력해 주세요.')
            return;
        } else if(_email === "") {
            alert('이메일을 입력해 주세요.')
            return;
        } else if(_title === "") {
            alert('제목을 입력해 주세요.')
            return;
        } else if(_contents === "") {
            alert('내용을 입력해 주세요.')
            return;
        }
        let data  = new FormData();
        data.append('from',_email);
        data.append('title',_title);
        data.append('contents',_name+"님 으로부터<br><br><br>"+_contents);
        $.ajax({
            type: "POST",
            url: "http://13.209.142.239:3000/api/notice/sendMailWithOutFile",
            type: 'POST',
            data: data,
            contentType: false,
            processData: false, // Don't process the files
            success: function (result) {
                alert('문의가 접수되었습니다.\r등록된 메일로 답변이 전송됩니다.');
            }
        })
    })

    $('.menu_link').click(function(){
        var _target = $(this).data('target')
        var position = {};
        if (_target === "home") position.top = 0;
        else if(_target === "brand-story") position = $('.brand-story').offset();
        else if(_target === "business-eco") position = $('.business-eco').offset();
        else if(_target === "app") position = $('.app').offset();
        else if(_target === "token-archi") position = $('.token-archi').offset();
        else if(_target === "road-map") position = $('.road-map').offset();
        else if(_target === "members") position = $('.members').offset();
        else if(_target === "partners") position = $('.partners').offset();
        else if(_target === "contact") position = $('.contact').offset();
        $("html,body").stop().animate({scrollTop:position.top},500)
    })
    
    $(".contact-btn").click(function(){
        $("html,body").stop().animate({scrollTop:$('.contact').offset().top},500)
    })

    function headerWhite(){
        $('.header').removeClass('dark').addClass('white')
        $('.menu_link').css('color','rgba(0,0,0,.6)');
        $('.btn_white_paper').removeClass('btn_white').addClass('btn_dark');
        $('.logo-link').addClass('bl')
    }

    function headerDark(){
        $('.header').removeClass('white').addClass('dark')
        $('.menu_link').css('color','white')
        $('.btn_white_paper').removeClass('btn_dark').addClass('btn_white');
        $('.logo-link').removeClass('bl')
    }

    function svgDownAnimation(el,find) {
        var pathes = $(el).find(find)
        pathes.each(function(i,path){
            var total_length = path.getTotalLength();
            path.style.strokeDasharray = total_length + " " + total_length;
            path.style.strokeDashoffset = total_length;
            $(path).animate({
                "strokeDashoffset" : 0
            }, 1500);
        })
    }

    function svgUpAnimation(el,find) {
        var pathes = $(el).find(find)
        pathes.each(function(i,path){
            var total_length = path.getTotalLength();
            path.style.strokeDasharray = total_length;
            $(path).animate({
                "strokeDashoffset" : total_length
            }, 500);
        })      
    }
})
$.fn.wheel = function (callback) {
    return this.each(function () {
        $(this).on('mousewheel DOMMouseScroll', function (e) {
            e.delta = null;
            if (e.originalEvent) {
                if (e.originalEvent.wheelDelta) e.delta = e.originalEvent.wheelDelta / -40;
                if (e.originalEvent.deltaY) e.delta = e.originalEvent.deltaY;
                if (e.originalEvent.detail) e.delta = e.originalEvent.detail;
            }

            if (typeof callback == 'function') {
                callback.call(this, e);
            }
        });
    });
};