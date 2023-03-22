function gridMaker (userinput = 16) {
  const gridNumber = userinput
  const container = document.getElementById("container");
  container.style.display = "flex";

  for (let i = 1; i <= gridNumber; i++) {  
    const column = document.createElement("div");
    container.appendChild(column).className = "gridColumn";

    for (let j = 1; j <= gridNumber; j++) {
      const row = document.createElement("div");
      row.style.display = "flex";
      column.appendChild(row).className = "cell";
    }
     
  }
  hoverEffect();
}
  
function hoverEffect () {
  const gridCells = document.querySelectorAll("div.cell");
  gridCells.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("hover");
    });
    //item.addEventListener("mouseout", () => {
    //  item.classList.remove("hover");
    //});
  });
}

function userButton () {
const button = document.getElementById("button");
button.addEventListener("click", function() {
  removeGridmaker();
  const userInput = prompt("how big do you want the square to be?")
  gridMaker(userInput);
})
}

function removeGridmaker() {
  container.innerHTML = "";
}

gridMaker();
hoverEffect();
userButton();
