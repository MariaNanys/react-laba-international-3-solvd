document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid-container");

  for (let row = 1; row <= 30; row++) {
    const tr = document.createElement("tr");

    for (let col = 1; col <= 20; col++) {
      const td = document.createElement("td");
      td.classList.add(`col-${col}`);
      td.classList.add(`row-${row}`);

      tr.appendChild(td);
    }
    gridContainer.appendChild(tr);
  }

  gridContainer.addEventListener("mouseover", (event) => {
    let tdTarget = event.target;
    if (tdTarget.tagName === "TD") {
      let col = Array.from(tdTarget.classList)
        .find((cls) => cls.startsWith("col-"))
        .split("-")[1];
      let row = Array.from(tdTarget.classList)
        .find((cls) => cls.startsWith("row-"))
        .split("-")[1];

      document
        .querySelectorAll(`.col-${col}`)
        .forEach((cell) => cell.classList.add("active"));
      document
        .querySelectorAll(`.row-${row}`)
        .forEach((cell) => cell.classList.add("active"));
    }
  });
  gridContainer.addEventListener("mouseout", (event) => {
    let tdTarget = event.target;
    if (tdTarget.tagName === "TD") {
      let col = Array.from(tdTarget.classList)
        .find((cls) => cls.startsWith("col-"))
        .split("-")[1];
      let row = Array.from(tdTarget.classList)
        .find((cls) => cls.startsWith("row-"))
        .split("-")[1];

      document
        .querySelectorAll(`.col-${col}`)
        .forEach((cell) => cell.classList.remove("active"));
      document
        .querySelectorAll(`.row-${row}`)
        .forEach((cell) => cell.classList.remove("active"));
    }
  });
  gridContainer.addEventListener("click", (event) => {
    let tdTarget = event.target;
    if (tdTarget.tagName === "TD") {
      let col = Array.from(tdTarget.classList)
        .find((cls) => cls.startsWith("col-"))
        .split("-")[1];
      let row = Array.from(tdTarget.classList)
        .find((cls) => cls.startsWith("row-"))
        .split("-")[1];

      if (event.shiftKey && lastClicked) {
        const lastCol = Array.from(lastClicked.classList)
          .find((cls) => cls.startsWith("col-"))
          .split("-")[1];
        const lastRow = Array.from(lastClicked.classList)
          .find((cls) => cls.startsWith("row-"))
          .split("-")[1];

        const colRange = [Math.min(col, lastCol), Math.max(col, lastCol)];
        const rowRange = [Math.min(row, lastRow), Math.max(row, lastRow)];

        for (let r = rowRange[0]; r <= rowRange[1]; r++) {
          for (let c = colRange[0]; c <= colRange[1]; c++) {
            const cell = gridContainer.querySelector(`.col-${c}.row-${r}`);
            cell.classList.add("selected");
            cell.textContent = `${c}/${r}`;
          }
        }
      } else {
        tdTarget.classList.toggle("selected");
        if (tdTarget.classList.contains("selected")) {
          tdTarget.textContent = `${col}/${row}`;
        } else {
          tdTarget.textContent = "";
        }
        lastClicked = tdTarget;
      }
    }
  });
});
