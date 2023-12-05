/////////////////////
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function simpleCalculator(elem) {
  const value1 = parseFloat(document.getElementById("value1").value) || 0;
  const value2 = parseFloat(document.getElementById("value2").value) || 0;

  const result = elem(value1, value2);

  document.getElementById("result").innerText = result;
}

function resetCalculator() {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("result").innerHTML = "0";
}

document.querySelector(".addition").addEventListener("click", function () {
  simpleCalculator(add);
});

document.querySelector(".subtract").addEventListener("click", function () {
  simpleCalculator(subtract);
});

document.querySelector(".multiply").addEventListener("click", function () {
  simpleCalculator(multiply);
});

document.querySelector(".divide").addEventListener("click", function () {
  simpleCalculator(divide);
});

document.getElementById("resetBtn").addEventListener("click", resetCalculator);
