function divideNumbers() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const message = document.getElementById('message');

    // Reset classes
    message.className = "alert mt-3 text-center";

    try {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            throw new Error("Please enter valid numbers.");
        }

        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }

        const result = a / b;

        message.classList.add("alert-success");
        message.innerText = "Result: " + result;

    } catch (error) {
        message.classList.add("alert-danger");
        message.innerText = "Error: " + error.message;
    }
}