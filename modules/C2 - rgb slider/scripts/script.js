const rouge = document.getElementById("rouge");
const vert = document.getElementById("vert");
const bleu = document.getElementById("bleu");
const colorContainer = document.getElementById("color-container");

function updateColor() {
  const rougeValue = rouge.value;
  const vertValue = vert.value;
  const bleuValue = bleu.value;

  const color = `rgb(${rougeValue}, ${vertValue}, ${bleuValue})`;
  colorContainer.style.backgroundColor = color;
}

rouge.addEventListener("input", updateColor);
vert.addEventListener("input", updateColor);
bleu.addEventListener("input", updateColor);

// Initial color update
updateColor();
