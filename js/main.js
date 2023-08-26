// start menu
let btn1 = document.querySelector(".hidden-one");
let btn2 = document.querySelector(".hidden-two");
let list = document.querySelector(".hidden-one + ul");
btn1.addEventListener("click", () => {
  list.style = "  transform: translateX(0%);";
});

btn2.addEventListener("click", () => {
  list.style = "  transform: translateX(100%);";
});
let all = document.querySelector("header + div");
all.addEventListener("click", () => {
  list.style = "  transform: translateX(100%);";
});
// end menu
// Start arrow top page
let arrow = document.querySelector("body span");
window.onscroll = () => {
  this.scrollY >= 850
    ? arrow.classList.add("block")
    : arrow.classList.remove("block");
};
arrow.onclick = () => {
  window.scrollTo({
    top: 0,
  });
};
