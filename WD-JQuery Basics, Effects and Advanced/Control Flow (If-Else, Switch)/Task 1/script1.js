function checkNumber() {

    const input = document.getElementById("userInput").value.trim();

    const display = document.getElementById("result");

    const card = document.getElementById("mainCard");

    if (input === "") {
        display.innerHTML = "Please enter numbers";
        return;
    }

    const numbers = input.split(",");

    let result = "";

    card.classList.remove("positive-border", "negative-border");

    for (let i = 0; i < numbers.length; i++) {

        let num = Number(numbers[i].trim());

        if (num > 0) {
            result += num + " is Positive Integer<br>";
            card.classList.add("positive-border");
        }

        else if (num < 0) {
            result += num + " is Negative Integer<br>";
            card.classList.add("negative-border");
        }

        else {
            result += num + " is Zero<br>";
        }
    }

    display.innerHTML = result;
}
