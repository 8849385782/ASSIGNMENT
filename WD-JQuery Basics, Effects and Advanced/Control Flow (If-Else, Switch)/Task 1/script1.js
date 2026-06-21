function checkNumber() {

    let input = document.getElementById("userInput").value;

    let arr = input.split(",");

    let output = "";

    for(let i = 0; i < arr.length; i++) {

        let num = Number(arr[i]);

        if(num > 0) {
            output += num + " is Positive<br>";
        }

        else if(num < 0) {
            output += num + " is Negative<br>";
        }

        else {
            output += num + " is Zero<br>";
        }
    }

    document.getElementById("result").innerHTML = output;
}
