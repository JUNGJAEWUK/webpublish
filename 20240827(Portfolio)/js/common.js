$(document).ready(function () {
  $(`.m-btn`).click(function () {
    $(this).toggleClass("on");
    $(`.m-nav`).toggleClass("on");
    $(`.window`).fadeToggle();
  });
  $(window).resize(function () {
    let windowWidth = $(window).width();
    // console.log(windowWidth);
    if (windowWidth > 640) {
      $(`.m-btn`).removeClass(`on`);
      $(`.m-nav`).removeClass(`on`);
      $(`.window`).fadeOut();
    }
  });
  // DarkMode
  // localStorage
  // 웹브라우저의 저장소 기능중 하나 사용자가 브라우저를 종료해도 데이터가 사라지지 않는 영구적인 저장소
  // 사용자 설정 저장 (테마,언어 ...)
  $(`html *`).attr("data-dark", "false");
  let dark_mode = localStorage.getItem(`dark_mode`);
  console.log(dark_mode);
  // 로컬 스토리지의 값을 읽어와서 현재 라이트모드 다크모드인지 상태를 확인!
  if (!dark_mode) {
    //라이트모드인 경우
    $(`html *`).attr(`data-dark`, `false`);
    $(`.header .etc ul li i`).eq(0).removeClass(`fa-moon`).addClass(`fa-sun`);
    $(`.dark-btn i`).eq(0).removeClass(`fa-moon`).addClass(`fa-sun`);
  } else {
    //다크모드인 경우
    $(`html *`).attr(`data-dark`, `true`);
    $(`.header .etc ul li i`).eq(0).removeClass(`fa-sun`).addClass(`fa-moon`);
    $(`.dark-btn i`).eq(0).removeClass(`fa-sun`).addClass(`fa-moon`);
    $(`.contact-content .sns ul li`)
      .eq(4)
      .find(`img`)
      .attr(`src`, `img/talk-dark.png`);
  }
  $(`.dark-btn`).click(function () {
    if ($(`html *`).attr(`data-dark`) == "true") {
      // 다크모드 비활성화 전환(라이트모드로 전환)
      $(`html *`).attr(`data-dark`, `false`);
      localStorage.removeItem(`dark_mode`);
      $(`.contact-content .sns ul li`)
        .eq(4)
        .find(`img`)
        .attr(`src`, `img/talk.png`);
    } else {
      // 다크모드 활성화로 전환(다크모드로 전환)
      $(`html *`).attr(`data-dark`, `true`);
      localStorage.setItem(`dark_mode`, `fa-moon`);
      $(`.contact-content .sns ul li`)
        .eq(4)
        .find(`img`)
        .attr(`src`, `img/talk-dark.png`);
    }
    $(this).find("i").toggleClass(`fa-moon fa-sun`);
    $(`.header .etc ul li i`).eq(0).toggleClass(`fa-moon fa-sun`);
  });
  $(`.header .etc ul li`)
    .eq(0)
    .click(function () {
      if ($(`html *`).attr(`data-dark`) == "true") {
        // 다크모드 비활성화 전환(라이트모드로 전환)
        $(`html *`).attr(`data-dark`, `false`);
        localStorage.removeItem(`dark_mode`);
        $(`.contact-content .sns ul li`)
          .eq(4)
          .find(`img`)
          .attr(`src`, `img/talk.png`);
      } else {
        // 다크모드 활성화로 전환(다크모드로 전환)
        $(`html *`).attr(`data-dark`, `true`);
        localStorage.setItem(`dark_mode`, `fa-moon`);
        $(`.contact-content .sns ul li`)
          .eq(4)
          .find(`img`)
          .attr(`src`, `img/talk-dark.png`);
      }
      $(this).find("i").toggleClass(`fa-moon fa-sun`);
      $(`.dark-btn a i`).eq(0).toggleClass(`fa-moon fa-sun`);
    });
});
