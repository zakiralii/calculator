function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/÷/g, "/").replace(/×/g, "*"));
    } catch {
        display.value = "Error";
    }
}

// Event: When key is pressed on keyboard
document.addEventListener("keydown", function runCode(event){
    // isNan: is not a number ()
    if (!isNaN(event.key) || "+-*/.%".includes(event.key)) {
        append(event.key);
    } 
    else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});
