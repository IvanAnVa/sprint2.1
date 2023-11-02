"use strict";
function debounce(func, delay) {
    let timer; //Aqui se declara una variable que almacena el identificador de tiempo de JS/TS
    return function () {
        clearTimeout(timer); //Aqui, al llamar a la funcion interna, se reinicia el temporizador
        timer = setTimeout(func, delay); //Se establece un nuevo temporizador
        //para ejecutar la funcion depues del delay
    };
}

//Las funciones de 'printMessage' y 'printMessageAlternative' son funcionalidades de interaccion con el DOM, y no tienen TDD
function printMessage() {
    const mensajeElement = document.getElementById("message");
    if (mensajeElement) {
        mensajeElement.textContent = "Debounce messsage";
    }
}
function printMessageAlternative() {
    const mensajeElement = document.getElementById("message");
    if (mensajeElement) {
        mensajeElement.textContent = "Another debounce message";
    }
}
const debouncedPrintMessage = debounce(printMessage, 1000);
const debouncedPrintMessage1 = debounce(printMessageAlternative, 2000);
debouncedPrintMessage();
debouncedPrintMessage1();
