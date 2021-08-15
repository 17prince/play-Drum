function playDrum(e) {
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
  if (!audio) return; // terminate function when there is no sound found with belonging key

  audio.currentTime = 0;
  audio.play();

  key.classList.add("key-animation");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("key-animation");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playDrum);
