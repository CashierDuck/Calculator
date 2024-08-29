// Output Variables
let botScreen = document.getElementById("bottomScreen");
let botScreenText = document.createElement("div");
let a = "";
let b = "";
let ans = 0;
let op = "";

// Document Variables
const outputScreen = document.getElementById("bottomScreen");
const topScreen = document.getElementById("topScreen");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equal = document.getElementById("equals");
const opposite = document.getElementById("neg");
const backspace = document.getElementById("back");

//functions
function updateScreen(){
    botScreen.textContent = `${a} ${op} ${b}`;
}

numbers.forEach(button => {
    button.addEventListener("click", function() {
        handleNumberInput(button.textContent);
    });
});

operators.forEach(button => {
    button.addEventListener("click", function() {
        topScreen.textContent = "";
        handleOperatorInput(button.textContent);
    });
});

opposite.addEventListener("click", function() {
    if(op === ""){
        if(a !== ""){
            a = (parseFloat(a) * -1).toString();
        }
    } else {
        if(b !== ""){
            b = (parseFloat(b) * -1).toString();
        }
    }
});

function handleNumberInput(num){
    if(op === ""){
        a += num;
    } else {
        b += num;
    }
    updateScreen();
}

function handleOperatorInput(operator){
    if(a !== ""){
        op = operator;
        updateScreen();
    }
}

function calculateResult(){
    if(a !== "" && b !== "" && op !== ""){
        switch(op){
            case "+":
                ans = parseFloat(a) + parseFloat(b);
                break;
            case "-":
                ans = parseFloat(a) - parseFloat(b);
                break;
            case "*":
                ans = parseFloat(a) * parseFloat(b);
                break;
            case "/":
                ans = parseFloat(a) / parseFloat(b);
                break;
        }
        topScreen.textContent = `${a} ${op} ${b} =`
        botScreen.textContent = ans;
        a = ans.toString();
        b = "";
        op = "";
    }
}

clear.addEventListener("click", function() {
    a = "";
    b = "";
    ans = "";
    op = "";
    topScreen.textContent = "";
    botScreen.textContent = "";
});

backspace.addEventListener("click", function() {
    if(op === ""){
        a = a.slice(0,-1);
    } else if (b !== ""){
        b = b.slice(0,-1);
    } else {
        op = "";
    }
    updateScreen();
});

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if(!isNaN(key)){
        handleNumberInput(key);
    }

    if(key === "+" || key === "-" || key === "/" ||  key === "*"){
        handleOperatorInput(key);
    }

    if(key === "Enter" || key === "="){
        calculateResult();
    }

    if(key === "Backspace"){
        backspace.click();
    }

    if(key.toLowerCase() === "c"){
        this.clear.click();
    }
});

equal.addEventListener("click", calculateResult);