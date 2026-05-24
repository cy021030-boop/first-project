const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const perPersonAmount = document.getElementById("perPersonAmount");
const clearBtn = document.getElementById("clearBtn");
const tipButtons = document.querySelectorAll(".tip-btn");

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

function calculateTip() {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value);
  const people = Math.max(1, Number(peopleInput.value));

  if (bill <= 0 || tipPercent < 0) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    perPersonAmount.textContent = "$0.00";
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  const perPerson = total / people;

  tipAmount.textContent = formatMoney(tip);
  totalAmount.textContent = formatMoney(total);
  perPersonAmount.textContent = formatMoney(perPerson);
}

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    tipInput.value = button.dataset.tip;
    calculateTip();
  });
});

tipInput.addEventListener("input", () => {
  tipButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tip === tipInput.value);
  });

  calculateTip();
});

billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

clearBtn.addEventListener("click", () => {
  billInput.value = "";
  tipInput.value = "15";
  peopleInput.value = "1";

  tipButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tip === "15");
  });

  calculateTip();
});
