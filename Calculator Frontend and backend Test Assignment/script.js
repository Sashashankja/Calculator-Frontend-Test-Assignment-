function deleteLastDigit() {
    let inputOutput = document.getElementById('input-output');
    let value = inputOutput.value;
    if (value.length > 0) {
      value = value.slice(0, -1);
      inputOutput.value = value;
      calculateOutput();
    }
  }
  
  function calculatePercentage() {
    let inputOutput = document.getElementById('input-output');
    let value = inputOutput.value;
    let percentage = parseFloat(value) / 100;
    inputOutput.value = percentage.toString();
    calculateOutput();
  }
  