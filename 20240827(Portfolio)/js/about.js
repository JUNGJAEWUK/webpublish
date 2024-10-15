$(document).ready(function () {
  function progressBar(id, percent) {
    let bar = new ProgressBar.Line(id, {
      strokeWidth: 3,
      easing: "easeInOut",
      duration: 2000,
      color: "#ffd",
      trailColor: "#dff",
      trailWidth: 3,
      text: {
        style: {
          color: "#0046ff",
          position: "absolute",
          right: "0",
          top: "0",
        },
        autoStyleContainer: false,
      },
      from: { color: "#5ff" },
      to: { color: "#0046ff" },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
        bar.path.setAttribute("stroke", state.color);
      },
    });
    bar.animate(percent);
  }
  progressBar(html, 1);
  progressBar(css, 0.8);
  progressBar(js, 0.95);
  progressBar(ps, 0.92);
  progressBar(is, 0.96);
  progressBar(of, 0.9);
});
