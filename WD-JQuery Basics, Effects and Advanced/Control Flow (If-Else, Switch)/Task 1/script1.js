function checkNumber() {

    // Get Input
    const input =
        document.getElementById("userInput").value;

    // Result Element
    const display =
        document.getElementById("result");

    // Card Element
    const card =
        document.getElementById("mainCard");

    // Split Values
    const numbers = input.split(",");

    // Result Variable
    let result = "";

    // Remove Old Borders
    card.classList.remove(
        "positive-border",
        "negative-border"
    );

    // Loop Through Numbers
    for (let i = 0; i < numbers.length; i++) {

        let num = parseInt(numbers[i]);

        // Positive Number
        if (num > 0) {

            result +=
                num + " is Positive Integer <br>";

            card.classList.add("positive-border");
        }

        // Negative Number
        else if (num < 0) {

            result +=
                num + " is Negative Integer <br>";

            card.classList.add("negative-border");
        }

        // Zero
        else {

            result +=
                num + " is Zero <br>";
        }
    }

    // Display Result
    display.innerHTML = result;
}