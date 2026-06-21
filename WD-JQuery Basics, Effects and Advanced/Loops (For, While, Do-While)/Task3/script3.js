const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const logList = document.getElementById("logList");

submitBtn.onclick = function () {

    let number = parseFloat(userInput.value);

    let li = document.createElement("li");

    if (isNaN(number)) {

        li.textContent = "Invalid input";

    } else if (number <= 10) {

        li.textContent =
            "Loop continues because " + number +
            " is not greater than 10.";

    } else {

        li.textContent =
            "Success! " + number +
            " is greater than 10.";

        userInput.disabled = true;
        submitBtn.disabled = true;
    }

    logList.appendChild(li);

    userInput.value = "";
};
