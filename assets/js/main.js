const nodes = document.querySelectorAll(".node");
const infoBox = document.getElementById("diagramInfo");

nodes.forEach(node => {
  const showInfo = () => {
    infoBox.innerHTML = `
      <h3>Architecture Details</h3>
      <p>${node.dataset.info}</p>
    `;
  };

  const resetInfo = () => {
    infoBox.innerHTML = `
      <h3>Architecture Details</h3>
      <p>Hover or tap a node to view technical details.</p>
    `;
  };

  node.addEventListener("mouseenter", showInfo);
  node.addEventListener("mouseleave", resetInfo);
  node.addEventListener("focus", showInfo);
  node.addEventListener("blur", resetInfo);
  node.addEventListener("click", showInfo);
  node.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showInfo();
    }
  });
});
