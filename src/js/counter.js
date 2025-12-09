function add() {
    const counterElement = document.getElementById("number");
    let currentValue = parseInt(counterElement.innerHTML, 10);
    currentValue += 1;
    counterElement.innerHTML = currentValue;
}

function reset() {
    document.getElementById("number").innerHTML = "0";
}

function decrease() {
    const counterElement = document.getElementById("number");
    let currentValue = parseInt(counterElement.innerHTML, 10);
    if (currentValue > 0) {
        currentValue -= 1;
    }
    counterElement.innerHTML = currentValue;
};

export { add, reset, decrease }