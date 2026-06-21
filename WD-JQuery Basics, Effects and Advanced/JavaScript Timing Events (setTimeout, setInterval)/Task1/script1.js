setTimeout(function() {

    document.body.classList.remove("bg-light");

    document.body.classList.add("bg-primary");

    document.getElementById("heading").textContent =
        "Color Changed!";

    document.getElementById("heading").style.color =
        "white";

}, 5000);
