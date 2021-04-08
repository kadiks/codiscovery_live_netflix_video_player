let videoEl = null;
let playBtn = null;
// let pauseBtn = null;
let timeSpentEl = null;
let totalTimeEl = null;
let prev10Btn = null;
let next10Btn = null;
let nextVidBtn = null;
let prevVidBtn = null;

let playlistIndex = 0;

const playlist = [
  "/media/video1.mp4",
  "/media/video2.mp4",
  "/media/video3.mp4",
  "/media/video4.mp4",
  "/media/video5.mp4",
  "/media/video6.mp4",
];

const init = () => {
  attachElementFromDOM();
  addListeners();

  goToVideo(0, false);
};

const attachElementFromDOM = () => {
  videoEl = document.querySelector("#video");
  playBtn = document.querySelector("#play");
  //   pauseBtn = document.querySelector("#pause");
  timeSpentEl = document.querySelector("#time-spent");
  totalTimeEl = document.querySelector("#total-time");
  prev10Btn = document.querySelector("#prev-10");
  next10Btn = document.querySelector("#next-10");
  prevVidBtn = document.querySelector("#prev-vid");
  nextVidBtn = document.querySelector("#next-vid");
};

const addListeners = () => {
  document.addEventListener("keyup", (e) => {
    // console.log("event keyup", e);
    switch (e.code) {
      case "Space":
        togglePlay();
        break;
      case "ArrowLeft":
        seekPrev10();
        break;
      case "ArrowRight":
        seekNext10();
        break;
    }
  });

  prevVidBtn.addEventListener("click", goToPreviousVideo);
  nextVidBtn.addEventListener("click", goToNextVideo);

  next10Btn.addEventListener("click", seekNext10);
  prev10Btn.addEventListener("click", seekPrev10);

  playBtn.addEventListener("click", togglePlay);

  videoEl.addEventListener("timeupdate", () => {
    // console.log("videoEl.currentTime", videoEl.currentTime);
    // console.log("videoEl.duration", videoEl.duration);
    timeSpentEl.textContent = getSecondsToPrettyTime(videoEl.currentTime);
    totalTimeEl.textContent = getSecondsToPrettyTime(videoEl.duration);
  });

  videoEl.addEventListener("ended", () => {
    goToNextVideo();
  });
};

window.addEventListener("load", init);
