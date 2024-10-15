const url = new URL(document.location).searchParams;
console.log(url);
const lang = url.get("Lang");
console.log(lang);

const kr_nav = ["홈", "프로필", "웹퍼블리싱", "디자인", "컨텍드"];
const en_nav = new Array(
  "Home",
  "Profile",
  "Web Publishing",
  "Design",
  "Contact"
);
const typed = new Array(
  "성장하는 웹디자이너 &amp; 웹퍼블리셔 <em>홍길동</em>입니다. <br> 다음 페이지를 보실려면 아래 버튼을 클릭해 주세요",
  "Growing Web Desiner &amp; This is web publisher <em>Hong Gil-dong</em><br> Click the button below to view the next page"
);
const main_btn = new Array("프로필", "Profile");
let nav_link = [];

for (let i = 0; i < $(".header nav ul li").length; i++) {
  nav_link.push($(".header nav ul li").eq(i).find("a").attr("href"));
}
// console.log(nav_link)
if (lang == undefined || lang == "kr") {
  //한꾹말
  // alert("한꾹말")
  $(".header .etc ul li ul li").eq(0).addClass("on");
  $("#typedStr p").html(typed[0]);
  $(".type a").text(main_btn[0]);
  $(".header .logo a").attr("href", nav_link[0] + "?Lang=kr");
  // map()과 each()공통점과 차이점/공통점:반복/차이점:새로운 배열을 만듦(차이)
  kr_nav.map(function (item, index) {
    $(".header nav ul li").eq(index).find("a").text(item);
    $(".header nav ul li")
      .eq(index)
      .find("a")
      .attr("href", nav_link[index] + "?Lang=kr");
  });
} else {
  //미꾹말
  // alert("미꾹말")
  $(".header .etc ul li ul li").eq(1).addClass("on");
  $("#typedStr p").html(typed[1]);
  $(".type a").text(main_btn[1]);
  $(".header .logo a").attr("href", nav_link[0] + "?Lang=en");
  en_nav.map(function (item, index) {
    $(".header nav ul li").eq(index).find("a").text(item);
    $(".header nav ul li")
      .eq(index)
      .find("a")
      .attr("href", nav_link[index] + "?Lang=en");
  });
}
