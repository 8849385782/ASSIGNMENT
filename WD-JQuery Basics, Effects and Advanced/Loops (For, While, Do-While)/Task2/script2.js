let sum = 0;

let i = 1;

// While loop
while(i <= 20){

    // Check even number
    if(i % 2 === 0){

        sum += i;

    }

    i++;

}

// Display result
document.getElementById("result").innerText =
`Total Sum: ${sum}`;

// Console output
console.log("The sum is:", sum);