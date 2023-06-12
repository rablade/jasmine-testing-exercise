
it('should calculate the monthly rate correctly', function () {
  // ...
  const firstLoan ={amount: 49938.25, years: 6, rate:5.85} 
  const secondLoan ={amount:230000, years:30, rate:3.98} 
  const thirdLoan = {amount:4000, years:3, rate:12.45} 
   expect(calculateMonthlyPayment(firstLoan)).toEqual(824.09)
   expect(calculateMonthlyPayment(secondLoan)).toEqual(1095)
   expect(calculateMonthlyPayment(thirdLoan)).toEqual(133.72)
});


it("should return a result with 2 decimal places", function() {
  // ..
  const Loan = {amount:200, years:3, rate:25} 
   expect(calculateMonthlyPayment(Loan)).toEqual(824.09)
});

/// etc
it(" should return a Nan if amount and rate are empty", function(){
  const missingAmountRate = {amount: 0, years:3, rate:0}
  expect(calculateMonthlyPayment(missingAmountRate)).toBeNaN()
})