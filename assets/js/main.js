const nodes = document.querySelectorAll(".node");
const infoBox = document.getElementById("diagramInfo");

nodes.forEach(node => {
  node.addEventListener("mouseenter", () => {
    infoBox.innerHTML = `
      <h3>Architecture Details</h3>
      <p>${node.dataset.info}</p>
    `;
  });

  node.addEventListener("mouseleave", () => {
    infoBox.innerHTML = `
      <h3>Architecture Details</h3>
      <p>Hover or tap a node to view technical details.</p>
    `;
  });

  node.addEventListener("click", () => {
    infoBox.innerHTML = `
      <h3>Architecture Details</h3>
      <p>${node.dataset.info}</p>
    `;
  });
});
