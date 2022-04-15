$(document).ready(function () {
  AOS.init();

  $("#headers").load("/kr/common/header.html");
  $("#footers").load("/kr/common/footer.html");

  if ($(".main").length === 0) {
    //scroll event;;
    $(window).scroll(function () {
      //스크롤 이동시 작동코드
      var _height = isMobile() ? 240 : 540;
      if ($(window).scrollTop() <= _height) {
        $(".header-wrap").removeClass("bl");
      } else {
        $(".header-wrap").addClass("bl");
      }
    });
  } else {
    $(".header-wrap").addClass("bl");
  }
  $(".input-file").change(function (e) {
    $("#fileTxt").text($(this).val());
  });
  $("#fileBtn").click(function (e) {
    e.preventDefault();
    $(".input-file").click();
  });
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  $(".play-store").click(function () {
    window.open(
      "https://play.google.com/store/apps/details?id=com.cordova.mileverse",
      "_blank"
    );
  });
  $(".app-store").click(function () {
    window.open(
      "https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%BC%EB%B2%8C%EC%8A%A4/id1521818622",
      "_blank"
    );
  });

  $("#send").click(function () {
    var name = $("#name").val();
    var mail = $("#mail").val();
    var title = $("#title").val();
    var contents = $("#contents").val();
    if (name === "" || mail === "" || title === "" || contents === "") {
      alert("항목을 모두 채워주세요.");
    } else {
      var formData = new FormData();
      formData.append("name", name);
      formData.append("from", mail);
      formData.append("title", title);
      formData.append("contents", contents);
      if ($("#file")[0].files.length !== 0) {
        formData.append("avatar", $("#file")[0].files[0]);
      }
      $.ajax({
        type: "POST",
        url: "https://server.mileverse.com/adm-svr/operate/mail",
        data: formData,
        contentType: "multipart/form-data",
        processData: false,
        contentType: false,
        success: function (data) {
          if (data.result) {
            alert("메일을 발송하였습니다.");
          } else {
            alert("메일을 발송에 실패하였습니다.");
          }
        },
      });
    }
  });
  if (location.href.indexOf("pr.html") !== -1) {
    $.ajax({
      type: "GET",
      url: "https://server.mileverse.com/adm-svr/get-news",
      success: function (data) {
        let sb = "";
        if (data.rows) {
          $.each(data.rows, function (index, item) {
            sb += '<div class="news-wrap" data-link=' + item.NEWS_LINK + ">";
            sb +=
              '<p class="news-header">' +
              ellipsisContent(item.TITLE, 30) +
              "</p>";
            sb += '<p class="news-date">' + item.PUB_DT + "</p>";
            sb += '<div class="news-dash"></div>';
            sb +=
              '<p class="news-contents">' +
              ellipsisContent(item.CONTENT, 61) +
              "</p>";
            sb += "</div>";
          });
          $(".news-total-wrap").html(sb);
          $(".news-wrap").click(function (e) {
            e.preventDefault();
            window.open($(this).data("link"));
          });
        }
      },
    });
  }

  function ellipsisContent(text, num) {
    if (text.length > num) {
      return text.substr(0, num) + "...";
    } else {
      return text;
    }
  }
});

// application fade -in animation
// observer 객체 생성
const animationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // 관찰 대상이 viewport 안에 들어온 경우
    if (entry.intersectionRatio > 0) entry.target.classList.add('fade-in-box');
    else entry.target.classList.remove('fade-in-box');
  })
})

document.querySelectorAll('.contents-init-wrap').forEach((el) => animationObserver.observe(el));



