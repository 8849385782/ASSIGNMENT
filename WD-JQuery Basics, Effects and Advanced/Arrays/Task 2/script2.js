function findSum() {

    // Get input value
    let input = document.getElementById("numbers").value;

    // Convert string into array
    let arr = input.split(",");

    // Store total sum
    let sum = 0;

    // Loop through array
    for (let i = 0; i < arr.length; i++) {

        sum = sum + Number(arr[i]);

    }

    // Show Result
    document.getElementById("result").innerHTML =
        "Sum = " + sum;
    console.log("Input: " + input);
    console.log("Output: " + sum);
}
findSum();