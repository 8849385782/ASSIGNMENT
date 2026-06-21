setTimeout(() => {

    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-primary");

    document.getElementById("heading").innerText = "Color Changed!";

    document.getElementById("heading").classList.remove("text-dark");
    document.getElementById("heading").classList.add("text-white");

}, 5000);
