let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function showResult() {
  try {
    display.value = eval(display.value);
  } catch (error) { 
    display.value = "Error";
  }
}
