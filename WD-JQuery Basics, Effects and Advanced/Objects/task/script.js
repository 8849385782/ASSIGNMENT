// Create object
const car = {

    brand: "Tesla",
    model: "Model S",
    year: 2022

};

// Console output
console.log("Brand:", car.brand);
console.log("Model:", car.model);

// Update year
car.year = 2024;

// Add new property
car.color = "Midnight Silver";

// Display output
const outputDiv = document.getElementById("output");

outputDiv.innerHTML = `

    <p><strong>Brand:</strong> ${car.brand}</p>

    <p><strong>Model:</strong> ${car.model}</p>

    <p><strong>Updated Year:</strong> ${car.year}</p>

    <p><strong>Color:</strong> ${car.color}</p>

`;