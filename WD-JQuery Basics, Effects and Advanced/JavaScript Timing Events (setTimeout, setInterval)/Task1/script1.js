// Wait for 5 seconds
setTimeout(() => {

    // Change Bootstrap background class
    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-primary");

    // Change text
    document.getElementById("heading").innerText = "Color Changed!";

    // Change text color
    document.getElementById("heading").classList.remove("text-dark");
    document.getElementById("heading").classList.add("text-white");

}, 5000);