let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
    expression += value;
    display.innerHTML = expression;
}

function clearDisplay() {
    expression = "";
    display.innerHTML = "0";
}

function calculate() {
    try {
        expression = eval(expression).toString();
        display.innerHTML = expression;
    } catch (error) {
        display.innerHTML = "Error";
        expression = "";
    }
}
