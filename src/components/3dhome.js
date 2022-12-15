const container = document.querySelector(".body-content");
const card = document.querySelector(".content-bos");
const title = document.querySelector(".content-main");
const santa = document.querySelector(".button");
//card rotate on mouse move
container.addEventListener("mousemove", (rotate) => {
  let x = (innerWidth / 2 - rotate.pageX) / 15;
  let y = (innerHeight / 2 - rotate.pageY) / 15;
  card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});
//card effects on mouse over the card
container.addEventListener("mouseover", () => {
  title.style.transform = "translate3d(0, 0, 160px)";
  santa.style.transform = "translate3d(0, 0, 200px)";
  tree.style.transform = "translate3d(0, 0, 120px)";
  card.style.transition = "all 0.1s ease";
});
//card back to normal when mouse out
container.addEventListener("mouseout", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  card.style.transition = "all 0.5s ease";
  title.style.transform = "translate3d(0, 0, 0)";
  santa.style.transform = "translate3d(0, 0, 0)";
  tree.style.transform = "translate3d(0, 0, 0)";
});