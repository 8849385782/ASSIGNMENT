// Initial Array
let fruits = ["apple", "banana", "cherry"];

// Get HTML Elements
const arrayDisplay = document.getElementById("arrayDisplay");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// Update Display Function
function updateDisplay() {
    arrayDisplay.textContent = JSON.stringify(fruits);
}

// Add Orange
addBtn.addEventListener("click", function () {

    fruits.push("orange");

    updateDisplay();

});

// Remove First Fruit
removeBtn.addEventListener("click", function () {

    if (fruits.length > 0) {

        fruits.shift();

        updateDisplay();

    } else {

        arrayDisplay.textContent = "[] Array is Empty";

    }

});