document.addEventListener("DOMContentLoaded", function() {
  const gridNumber = 16;
  const container = document.getElementById("container");
  container.style.display = "flex";

  for (let i = 1; i <= gridNumber; i++) {  
    const column = document.createElement("div");
    container.appendChild(column).className = "gridColumn";

    for (let j = 1; j <= gridNumber; j++) {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.minHeight = "30px";
      row.style.maxHeight = "40px";
      column.appendChild(row).className = "cell";
    }
     
  }
  
  });

document.addEventListener("DOMContentLoaded", function () {
  const gridCells = document.querySelectorAll("div.cell");
  console.log(gridCells);
  gridCells.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("hover");
    });

    //item.addEventListener("mouseout", () => {
    //  item.classList.remove("hover");
    //});
  });
});


