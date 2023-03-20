document.addEventListener("DOMContentLoaded", function () {
const flexContainer = document.getElementById("flex-box");
  for (let i = 1; i <= 16; i++) {
    const div = document.createElement("div");
    div.id = "div" + i;
    div.className = "flex-div";
    div.textContent = "div" + i;
    flexContainer.appendChild(div);
  }
});
