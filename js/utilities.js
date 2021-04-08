/**
 * @param {time} Number
 *
 * @returns String Formatted with mm:ss (01:05)
 */
const getSecondsToPrettyTime = (time) => {
  if (isNaN(time)) {
    time = 0;
  }
  let min = "00";
  let sec = "00";
  let secondsLeft = parseInt(time);

  if (time > 60) {
    const minInt = Math.floor(secondsLeft / 60);
    min = minInt > 9 ? `${minInt}` : `0${minInt}`;
    secondsLeft = secondsLeft - minInt * 60;
  }
  sec = secondsLeft > 9 ? `${secondsLeft}` : `0${secondsLeft}`;

  return `${min}:${sec}`;
};

const seekPrev10 = () => {
  seekNewTime(videoEl.currentTime - 10);
};

const seekNext10 = () => {
  seekNewTime(videoEl.currentTime + 10);
};

/**
 * Change video current time at the specified time
 * @param {newTime}
 */
const seekNewTime = (newTime) => {
  if (newTime < 0) {
    newTime = 0;
  }
  if (newTime > videoEl.duration) {
    newTime = videoEl.duration - 1;
  }
  videoEl.currentTime = newTime;
  if (videoEl.paused) {
    videoEl.play();
  }
};

const togglePlay = () => {
  if (videoEl.paused) {
    playBtn.querySelector("i").classList.remove("fa-play");
    playBtn.querySelector("i").classList.add("fa-pause");
    videoEl.play();
  } else {
    playBtn.querySelector("i").classList.remove("fa-pause");
    playBtn.querySelector("i").classList.add("fa-play");
    videoEl.pause();
  }
};

const goToPreviousVideo = () => {
  goToVideo(playlistIndex - 1);
};
const goToNextVideo = () => {
  goToVideo(playlistIndex + 1);
};

const goToVideo = (newPlaylistIndex, autoplay = true) => {
  if (newPlaylistIndex < 0) {
    newPlaylistIndex = playlist.length - 1;
  }
  if (newPlaylistIndex >= playlist.length) {
    newPlaylistIndex = 0;
  }

  playlistIndex = newPlaylistIndex;
  videoEl.src = playlist[playlistIndex];
  if (autoplay) {
    videoEl.play();
  }
};
