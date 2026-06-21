function getDay() {

    let day = Number(document.getElementById("dayInput").value);

    switch(day) {
        case 1:
            document.getElementById("result").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("result").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("result").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("result").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("result").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("result").innerHTML = "Saturday";
            break;
        case 7:
            document.getElementById("result").innerHTML = "Sunday";
            break;
        default:
            document.getElementById("result").innerHTML = "Invalid Input";
    }
}
