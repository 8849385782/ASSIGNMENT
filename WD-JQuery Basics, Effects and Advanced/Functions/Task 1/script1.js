// Function to show greeting
function handleGreet(){

    // Get entered name
    const userName =
        document.getElementById(
            "userName"
        ).value;

    // Check empty input
    if(userName.trim() === ""){

        alert(
            "Please enter your name!"
        );

        return;
    }

    // Display Greeting
    document.getElementById(
        "displayGreeting"
    ).innerHTML =
        `Hello, ${userName}!`;

}