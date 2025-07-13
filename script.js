function click1() {
  var bil1 = document.getElementById("bilangan1").value;
  var bil2 = document.getElementById("bilangan2").value;
  var hasil = parseInt(bill1) + parseInt(bill2);
}
let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
