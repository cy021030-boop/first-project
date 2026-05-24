const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const clearBtn = document.getElementById("clearBtn");

function calculateTip() {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value);

  if (bill <= 0 || tipPercent < 0) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  tipAmount.textContent = `$${tip.toFixed(2)}`;
  totalAmount.textContent = `$${total.toFixed(2)}`;
}

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);

clearBtn.addEventListener("click", () => {
  billInput.value = "";
  tipInput.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
