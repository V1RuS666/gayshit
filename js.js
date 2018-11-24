var video = document.getElementbyId("bg")
var btn = document.getElementbyId("pbg")
function btn() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
