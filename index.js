const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const backspaceBtn = document.getElementById("backspace");

let expression = "";

function updateDisplay(value) {
  display.textContent = value || "0";
}

buttons.forEach((btn) => {
  const val = btn.dataset.value;
  if (!val) return;

  btn.addEventListener("click", () => {
    expression += val;
    updateDisplay(expression);
  });
});

clearBtn.addEventListener("click", () => {
  expression = "";
  updateDisplay(expression);
});

backspaceBtn.addEventListener("click", () => {
  expression = expression.slice(0, -1);
  updateDisplay(expression);
});

equalsBtn.addEventListener("click", () => {
  if (!expression) return;
  try {
    const result = Function(`"use strict"; return (${expression})`)();
    expression = String(result);
    updateDisplay(expression);
  } catch {
    updateDisplay("Error");
    expression = "";
  }
});
