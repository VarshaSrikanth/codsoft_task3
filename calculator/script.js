let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  const lastChar = displayValue[displayValue.length - 1];
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    displayValue = displayValue.slice(0, -1);
  }
  displayValue += operator;
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}