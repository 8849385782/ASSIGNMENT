alert("JS Loaded");

setTimeout(function() {

    alert("5 seconds completed");

    document.body.style.backgroundColor = "blue";

    document.getElementById("heading").innerHTML = "Color Changed!";

    document.getElementById("heading").style.color = "white";

}, 5000);
