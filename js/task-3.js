const inp = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inp.addEventListener("input", () => {
  const name = inp.value.trim();  
  const displayName = name === "" ? "Anonymous" : name;  
  output.innerText = displayName;  
});
