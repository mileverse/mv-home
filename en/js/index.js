$(document).ready(function(){
    AOS.init();

    $('#headers').load('/en/common/header.html');
    $('#footers').load('/en/common/footer.html');

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

    $('.play-store').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.cordova.mileverse","_blank")
    })
    $('.app-store').click(function(){
        window.open("https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%BC%EB%B2%8C%EC%8A%A4/id1521818622","_blank")
    })
    $("#send").click(function(){
        var name = $("#name").val();
        var mail = $("#mail").val();
        var title = $("#title").val();
        var contents = $("#contents").val();
        if(name === "" || mail === "" || title === "" || contents === "") {
            alert("Please fill in all the items.")
        } else {
            var formData = new FormData();
            formData.append('name',name)
            formData.append("from",mail)
            formData.append("title",title)
            formData.append("contents",contents)
            if($('#file')[0].files.length !== 0) {
                formData.append("avatar",$('#file')[0].files[0])
            }
            $.ajax({
                type:"POST",
                url:'http://192.168.0.16:3010/api/notice/mail',
                data:formData,
                contentType:"multipart/form-data",
                processData: false,
                contentType: false,
                success:({result})=>{
                    if(result) {
                        alert("Success to send mail");
                    }else {
                        alert("Failed to send mail");
                    }
                }
            })
        }
    })
})