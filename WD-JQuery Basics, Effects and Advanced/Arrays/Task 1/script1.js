// Initial Array
let fruits = ["apple", "banana", "cherry"];

// Get Elements
const arrayDisplay = document.getElementById("arrayDisplay");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// Display Function
function updateDisplay() {
    arrayDisplay.innerHTML = JSON.stringify(fruits);
}

// Initial Display
updateDisplay();

// Add Orange
addBtn.onclick = function () {
    fruits.push("orange");
    updateDisplay();
};

// Remove First Fruit
removeBtn.onclick = function () {
    if (fruits.length > 0) {
        fruits.shift();
        updateDisplay();
    } else {
        arrayDisplay.innerHTML = "Array is Empty";
    }
};
