function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const spn = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  
  document.body.style.backgroundColor = randomColor;
  spn.textContent = randomColor;




})