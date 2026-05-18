// Variables
let textData = "Hello, World!";
let numberData = 42;
let booleanData = true;
let nullData = null;
let undefinedData;

// Console in browser
console.log("Value:", textData, "| Type:", typeof textData);
console.log("Value:", numberData, "| Type:", typeof numberData);
console.log("Value:", booleanData, "| Type:", typeof booleanData);
console.log("Value:", nullData, "| Type:", typeof nullData);
console.log("Value:", undefinedData, "| Type:", typeof undefinedData);

// Show console visually on webpage
const consoleOutput = document.getElementById("consoleOutput");

consoleOutput.innerHTML = `

<div>
Value:
<span class="string">${textData}</span>
| Type:
<span class="string">${typeof textData}</span>
</div>

<div>
Value:
<span class="number">${numberData}</span>
| Type:
<span class="number">${typeof numberData}</span>
</div>

<div>
Value:
<span class="boolean">${booleanData}</span>
| Type:
<span class="boolean">${typeof booleanData}</span>
</div>

<div>
Value:
<span class="object">${nullData}</span>
| Type:
<span class="object">${typeof nullData}</span>
</div>

<div>
Value:
<span class="undefined">${undefinedData}</span>
| Type:
<span class="undefined">${typeof undefinedData}</span>
</div>

`;