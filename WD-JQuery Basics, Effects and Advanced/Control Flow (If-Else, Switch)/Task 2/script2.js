function getDay() {

    // Get Input Value
    let input = document.getElementById("dayInput").value;

    // Convert to Number
    let day = parseInt(input);

    let result = "";

    // Switch Case
    switch(day) {

        case 1:
            result = "Monday";
            break;

        case 2:
            result = "Tuesday";
            break;

        case 3:
            result = "Wednesday";
            break;

        case 4:
            result = "Thursday";
            break;

        case 5:
            result = "Friday";
            break;

        case 6:
            result = "Saturday";
            break;

        case 7:
            result = "Sunday";
            break;

        default:
            result = "Invalid Input";
    }

    // Display Result
    document.getElementById("result").innerHTML = result;
}