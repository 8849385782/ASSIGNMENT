const userInput = document.getElementById("userInput");

const submitBtn = document.getElementById("submitBtn");

const logList = document.getElementById("logList");

function addLog(text, success = false){

    const li = document.createElement("li");

    li.textContent = "• " + text;

    li.className = success ? "success" : "error";

    logList.appendChild(li);
}

function waitForInput(){

    return new Promise(resolve => {

        submitBtn.onclick = () => {

            const value = parseFloat(userInput.value);

            userInput.value = "";

            resolve(value);

        };

    });
}

(async function runLoop(){

    let number;

    do{

        number = await waitForInput();

        if(isNaN(number)){

            addLog("Invalid input. Please enter a valid number.");

        }

        else if(number <= 10){

            addLog(`Loop continues because ${number} is not greater than 10.`);
        }

    }while(isNaN(number) || number <= 10);

    addLog(`Success! ${number} is greater than 10.`, true);

    userInput.disabled = true;
    submitBtn.disabled = true;

})();
