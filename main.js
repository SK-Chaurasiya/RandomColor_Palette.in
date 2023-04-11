
const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');

const maxPaletteBoxes = 30;

const generatePalette = () =>{
  container.innerHTML = ""; // clearing the container
  for (let i = 0; i < maxPaletteBoxes; i++){
    // generating a random hex color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(10);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = document.createElement('li');
    color.classList.add("color");
    color.innerHTML =  `
    <div class="rect-box" style="background:${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>`;
    color.addEventListener('click', () => copyColor(color, randomHex));
    container.appendChild(color);
  }
}
generatePalette();

const copyColor = (elem, hexVal) =>{
  const colorElement = elem.querySelector(".hex-value");
  // Copying the hex value, updating the text to copied,
  // and changing text back to original hex after a second

  navigator.clipboard.writeText(hexVal).then(() =>{
    colorElement.innerHTML = "Copied";
    setInterval(() => colorElement.innerHTML = hexVal, 1000)
  }).catch(() => alert('Failed to the color code!'));
}

refreshBtn.addEventListener('click', generatePalette);

