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

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const values = {amount:5000, years:5, rate:11.5} 
  const loanAmout = document.querySelector('#loan-amount')
    loanAmout.value = values.amount
  const loanYears = document.querySelector('#loan-years')
    loanYears.value = values.years
  const loanRate = document.querySelector('#loan-rate')
    loanRate.value = values.rate 
  
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const UIvalues = getCurrentUIValues()
  const monthPayment = calculateMonthlyPayment(UIvalues)
  updateMonthly(monthPayment)

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  

  //let rate =  (values.rate/100 *12)
 //
  //let numPay =  values.years * 12
  // 
  //  let interest = rate * ((1 + rate)**numPay) 
  // let total = values.amount / (((1+ rate)**numPay) -1)
  
  //let monthly = total / interest
  // return monthly.toFixed(2) // add 

  
  const monthlyRate = (values.rate / 100) / 12; // use solution had trouble with formula
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
const month = document.getElementById('monthly-payment')
    month.innerHTML = monthly
}
