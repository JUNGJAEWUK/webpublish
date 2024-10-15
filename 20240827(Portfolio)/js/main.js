$(document).ready(function () {
  new Typed(`#animatingStr`, {
    stringsElement: `#typedStr`,
    typeSpeed: 50,
  });
  $(`#wave-1`).wavify({
    height: 800, //파도 높이
    bones: 3, //낙타 혹 개수
    amplitude: 40, // 파도 겹겹이 사이 높이
    // color: "#9a48fa",
    color: "#0046ff",
    speed: 0.15,
  });
  $(`#wave-2`).wavify({
    height: 700, //파도 높이
    bones: 3, //낙타 혹 개수
    amplitude: 40, // 파도 겹겹이 사이 높이
    // color: "#140a42",
    color: "#233169",
    speed: 0.25,
  });
});
