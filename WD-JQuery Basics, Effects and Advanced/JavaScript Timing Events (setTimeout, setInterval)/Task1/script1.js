alert("JS Loaded");

setTimeout(function() {

    alert("5 seconds completed");

    const heading = document.getElementById("heading");

    heading.textContent = "Color Changed!";

    heading.style.color = "white";

    document.body.style.backgroundColor = "blue";

}, 5000);
