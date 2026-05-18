let number;

do {
    // Prompt always returns a string; parseFloat converts it to a number
    let input = prompt("Enter a number greater than 10:");
    number = parseFloat(input);
} while (isNaN(number) || number <= 10);

alert(`Thank you! Loop finished. You entered: ${number}`);
