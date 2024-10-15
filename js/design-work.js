$(document).ready(function () {
  const work_img_content = [
    "https://via.placeholder.com/1200x2000",
    "https://via.placeholder.com/1200x2000/da9",
    "https://via.placeholder.com/1200x2000/ca9",
    "https://via.placeholder.com/1200x2000/8e9",
    "https://via.placeholder.com/1200x2000/6a9",
    "https://via.placeholder.com/1200x2000/6ff",
    "https://via.placeholder.com/1200x2000/e99",
    "https://via.placeholder.com/1200x2000/f49",
    "https://via.placeholder.com/1200x2000/dd9",
  ];
  //   console.log(work_img_content);
  $(".content .design .work-content").click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $(".window").fadeIn();
    $(".window-content").slideDown();
    $(".window-content-close").fadeIn();
    $(".window-content img").attr("src", work_img_content[idx]);
    $("html,body").css("overflow", "hidden");
  });
  $(".window, .window-content-close").click(function (e) {
    e.preventDefault();
    $(".window").fadeOut();
    $(".window-content").slideUp();
    $(".window-content-close").fadeOut();
    $("html,body").css("overflow", "visible");
  });
});
