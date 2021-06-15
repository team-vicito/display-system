let start, down;

window.addEventListener("mousedown", (event) => startScroll(event));
window.addEventListener("mouseup", (_) => stopScroll());
window.addEventListener("mouseleave", (_) => stopScroll());
window.addEventListener("mousemove", (event) => scrollScreen(event));

const startScroll = (event) => {
  start = event.pageY;
  down = true;
}

const stopScroll = (event) => {
  down = false;
}

const scrollScreen = (event) => {
  if (down) {
    event.preventDefault();

    window.scrollBy(0, (start - event.pageY));
  }
}
