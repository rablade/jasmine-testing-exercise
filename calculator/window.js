window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const values  = { amount: 5000, years: 5, rate: 2 };
  const loanAmout = document.querySelector('#loan-amount')
    loanAmout.value = values.amount
  const loanYears = document.querySelector('#loan-years')
    loanYears.value = values.years
  const loanRate = document.querySelector('#loan-rate')
    loanRate.value = values.rate 
  update();
}

function update() {
    const UIvalues = getCurrentUIValues()
    const monthPayment = calculateMonthlyPayment(UIvalues)
    updateMonthly(monthPayment)
}

function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}