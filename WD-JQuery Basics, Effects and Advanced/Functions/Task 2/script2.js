// Function to calculate sum
function calculateSum(a, b){

    return a + b;

}

// Button Function
function handleCalculation(){

    // Input Values
    const num1 =
        parseFloat(
            document.getElementById(
                "num1"
            ).value
        );

    const num2 =
        parseFloat(
            document.getElementById(
                "num2"
            ).value
        );

    // Result Box
    const resultBox =
        document.getElementById(
            "result"
        );

    // Validation
    if(isNaN(num1) || isNaN(num2)){

        resultBox.className =
            "alert alert mt-5 text-center";

        resultBox.innerHTML =
            "Please enter valid numbers";

        return;
    }

    // Calculate
    const sum =
        calculateSum(num1, num2);

    // Show Result
    resultBox.className =
        "alert alert-success mt-5 text-center";

    resultBox.innerHTML =`Result: +{sum}`;

}