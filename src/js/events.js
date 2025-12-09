import {add, reset, decrease} from './counter.js'


//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas
const addButton = document.getElementById("add");
const resetButton = document.getElementById("reset");
const decreaseButton = document.getElementById("decrease");

addButton.addEventListener("click", () => {
    add();
});

resetButton.addEventListener("click", () =>{
    reset()
});

decreaseButton.addEventListener("click", () => {
    decrease();
});