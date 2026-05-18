// Target div
const display = document.getElementById("number-list");

// Loop from 1 to 10
for(let i = 1; i <= 10; i++){

    // Create div
    const numberBox = document.createElement("div");

    // Add class
    numberBox.className = "number-box";

    // Add number
    numberBox.textContent = i;

    // Append to page
    display.appendChild(numberBox);

    // Console
    console.log(i);
}