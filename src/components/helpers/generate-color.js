function generateColor(value) {
  let red = Math.min(255, Math.floor(((100 - value) * 255) / 50));
  let green = Math.min(255, Math.floor((value * 255) / 50));

  let redHex = red.toString(16).padStart(2, '0');
  let greenHex = green.toString(16).padStart(2, '0');

  return `#${redHex}${greenHex}30`;
}

export default generateColor;
