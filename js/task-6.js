function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const inp = document.querySelector("input");
  const createBtn = document.querySelector("#controls button[data-create]");
  const destroyBtn = document.querySelector("#controls button[data-destroy]");
  const boxesDiv = document.querySelector("#boxes");
  
  function destroyBoxes() {
    boxesDiv.innerHTML = "";
  }
  
  function createBoxes(amount) {
    let size = 30;
    const fragments = document.createDocumentFragment();
  
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.margin = "5px";
      fragments.appendChild(div);
      size += 10;
    }
  
    boxesDiv.appendChild(fragments);
  }
  
  createBtn.addEventListener("click", () => {
    const amount = Number(inp.value.trim());
  
    if (amount < 1 || amount > 100) return;
  
    destroyBoxes();
    createBoxes(amount);
    inp.value = "";
  });
  
  destroyBtn.addEventListener("click", destroyBoxes);
  