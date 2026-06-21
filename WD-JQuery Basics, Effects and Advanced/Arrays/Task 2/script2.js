function findSum() {
    let input = document.getElementById("numbers").value;

    if (input.trim() === "") {
        document.getElementById("result").innerHTML =
            "Please enter some numbers";
        return;
    }

    let numbers = input.split(",");

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i].trim());
    }

    document.getElementById("result").innerHTML =
        "Sum = " + sum;
}
