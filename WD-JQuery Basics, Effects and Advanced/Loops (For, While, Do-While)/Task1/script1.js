const display = document.getElementById("number-list");

for(let i = 1; i <= 10; i++) {

    display.innerHTML +=
        "<div class='number-box'>" + i + "</div>";
}
