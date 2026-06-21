setTimeout(function() {

    document.getElementById("heading").innerHTML =
        "Color Changed!";

    document.getElementById("heading").style.color =
        "white";

    document.body.style.setProperty(
        "background-color",
        "blue",
        "important"
    );

}, 5000);
