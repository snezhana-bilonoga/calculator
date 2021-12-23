const submitButton = document.getElementById('calculate');

submitButton.addEventListener('click', function() {
    const firstNumber = +document.getElementById('first_number').value;
    const secondNumber = +document.getElementById('second_number').value;
    const operator = document.getElementById('operator').value;

    let result;

    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber + secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else {
        result = firstNumber / secondNumber;
    } 
    
    alert(`Calculation result: ${Math.round(result)}`);
});