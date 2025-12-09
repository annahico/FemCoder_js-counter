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
    const newValue = Math.max(0, currentValue - 1);
    counterElement.innerHTML = newValue;
};

export { add, reset, decrease }