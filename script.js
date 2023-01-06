const BigNumber = require('bignumber.js');

function convert(input, base) {
  BigNumber.set({ DECIMAL_PLACES: 100 })
  let x = new BigNumber(input).toString(base);

  return x;
}

function calculate() {
  let inputField = document.getElementById("input-field");
  let inputValue = inputField.value;

  let selectElement = document.getElementById("dropdown");
  let selectedValue = selectElement.value;

  let textarea = document.getElementById("textarea");

  BigNumber.set({ DECIMAL_PLACES: 100 })
  let result = new BigNumber(input).toString(base);

  console.log(result);
  textarea.value = result;
}