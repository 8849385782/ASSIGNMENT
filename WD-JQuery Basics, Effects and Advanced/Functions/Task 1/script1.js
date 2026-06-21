function handleGreet() {
    var name = document.getElementById("userName").value;
    document.getElementById("displayGreeting").innerHTML =
        "Hello " + name;
}
