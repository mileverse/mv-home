$(document).ready(function(){
    $('.menu-slider').click(function(){
        var slider = $('.menu_slider');
        if(slider.hasClass('on') === true) {
            slider.removeClass('on')
            bodyHidden(false)
        } else {
            slider.addClass('on')
            bodyHidden(true)
        }
    });
    $('.menu-name').click(function(){
        var _target = $(this).data('target');
        var position = {};
        if(_target === "brand") position = $('.section_brand').offset();
        else if(_target === "business") position = $('.section_business').offset();
        else if(_target === "app") position = $('.section_app').offset();
        else if(_target === "token") position = $('.section_token').offset();
        else if(_target === "roadmap") position = $('.section_roadmap').offset();
        else if(_target === "members") position = $('.section_members').offset();
        else if(_target === "partners") position = $('.section_partners').offset();
        $('.menu_slider').removeClass('on')
        bodyHidden(false)
        $("html,body").stop().animate({scrollTop:position.top},500)
    });
    $('#contact').click(function(){
        layer_popup("#layer")
    })
    $('.mail-fixed-btn').click(function(){
        layer_popup("#layer")
    })
    $('.email-btn').click(function(e){
        e.preventDefault();
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
        showLoading(true)
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
                $('#name').val('')
                $('#email').val('')
                $('#title').val('')
                $('#contents').val('')
                showLoading(false);
                $('.layer-close-ico').click();
            }
        })
    })
    function showLoading(flag){
        flag?$('.loading-dimm').show() : $('.loading-dimm').hide()
    }
    function bodyHidden(flag){
        flag ? $('body').css("overflow","hidden"):$('body').css("overflow","scroll");
    }
    function layer_popup(el){

        var $el = $(el);        //레이어의 id를 $el 변수에 저장
        var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

        isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

        var $elWidth = ~~($el.outerWidth()),
            $elHeight = ~~($el.outerHeight()),
            docWidth = $(document).width(),
            docHeight = $(document).height();

        // 화면의 중앙에 레이어를 띄운다.
        if ($elHeight < docHeight || $elWidth < docWidth) {
            $el.css({
                marginTop: -$elHeight /2,
                marginLeft: -$elWidth/2
            })
        } else {
            $el.css({top: 0, left: 0});
        }

        bodyHidden(true)

        $el.find('.layer-close-ico').click(function(){
            isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
            if($('.menu_slider').hasClass('on') === false) bodyHidden(false)
            
            return false;
        });
    }
})
