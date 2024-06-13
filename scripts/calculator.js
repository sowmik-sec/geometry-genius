function calculateTriangleArea() {
  const base = getInputValue("base");
  const height = getInputValue("height");
  const area = 0.5 * base * height;
  setValue("triangle-area", area);
}

function getInputValue(id) {
  return Number(document.getElementById(id).value);
}

function setValue(id, value) {
  document.getElementById(id).innerText = value;
}
