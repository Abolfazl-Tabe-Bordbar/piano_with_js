const keys = document.querySelectorAll(".key");
const hints = document.querySelectorAll(".hints");
window.addEventListener("keydown",function (event) { 
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (! key ) return;
    const keynote  =  key.getAttribute("data-note");
    const nowplaying = this.document.getElementById("nowplaying");
    nowplaying.innerHTML = keynote;
    key.classList.add("playing");
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
});
keys.forEach((a) => {
    a.addEventListener("transitionend",function () { this.classList.remove("playing")})
});
hints.forEach(function (a,index) {
    a.style = `transition-delay:${index * 50}ms`;
});