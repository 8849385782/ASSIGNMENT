function handleGreet() {

    let name = document.getElementById("userName").value;

    if(name === "") {
        document.getElementById("displayGreeting").innerHTML =
            "Please enter your name";
        return;
    }

    document.getElementById("displayGreeting").innerHTML =
        "Hello, " + name + "!";
}
