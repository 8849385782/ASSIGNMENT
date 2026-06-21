function handleGreet() {

    let userName =
        document.getElementById("userName").value;

    if (userName.trim() === "") {

        alert("Please enter your name!");

        return;
    }

    document.getElementById("displayGreeting").innerHTML =
        "Hello, " + userName + "!";
}
