function calculate() {

    // Get values from inputs
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);

    // Arithmetic Operators
    document.getElementById('add').innerText = a + b;
    document.getElementById('sub').innerText = a - b;
    document.getElementById('mul').innerText = a * b;

    document.getElementById('div').innerText =
        b !== 0 ? (a / b).toFixed(2) : "Cannot divide by 0";

    // Comparison Operators
    document.getElementById('equal').innerText = (a == b);
    document.getElementById('greater').innerText = (a > b);

    // Logical Operator
    const logicalResult = (a > 10 && b < 5);

    document.getElementById('logical').innerText = logicalResult;
}

// Run automatically when page loads
window.onload = calculate;