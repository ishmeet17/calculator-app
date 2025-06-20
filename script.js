let display = document.getElementById("display");

// Show modal on page load
window.onload = function () {
  document.getElementById("welcomeModal").style.display = "flex";
};

// Hide modal on button click
function closeWelcome() {
  document.getElementById("welcomeModal").style.display = "none";
}

function append(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  let value = display.innerText;
  display.innerText = value.length > 1 ? value.slice(0, -1) : "0";
}

function calculate() {
  try {
    let result = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

function square() {
  try {
    let value = eval(display.innerText);
    display.innerText = value * value;
  } catch {
    display.innerText = "Error";
  }
}

function squareRoot() {
  try {
    let value = eval(display.innerText);
    display.innerText = Math.sqrt(value);
  } catch {
    display.innerText = "Error";
  }
}

function reciprocal() {
  try {
    let value = eval(display.innerText);
    display.innerText = 1 / value;
  } catch {
    display.innerText = "Error";
  }
}

function toggleSign() {
  try {
    let value = eval(display.innerText);
    display.innerText = value * -1;
  } catch {
    display.innerText = "Error";
  }
}
