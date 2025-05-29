let display = document.getElementById('display');

// Append value to the display
function appendToDisplay(value) {
  if (display.innerText === '0') {
    display.innerText = value;  // Replace 0 if the display is clear
  } else {
    display.innerText += value;  // Otherwise, append the value
  }
}

// Clear the display
function clearDisplay() {
  display.innerText = '0';
}

// Calculate the result
function calculateResult() {
  try {
    // Evaluate the expression in the display
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = 'Error';  // Show error if expression is invalid
  }
}