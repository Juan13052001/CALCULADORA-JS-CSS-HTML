import { sumar, restar, dividir, multiplicar } from "./operaciones.js";

let currentNum = "";
let previousNum = "";
let operador = "";

const valorPrevio = document.querySelector(".previous-value");

const valorActual = document.querySelector(".valor-actual");

const igual = document.querySelector(".igual");

igual.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        resultado();
    }
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", () => {
    agregarDecimal();
});

const reset = document.querySelector(".borrar");

reset.addEventListener("click", borrar);

const botonesNumero = document.querySelectorAll(".numeros");

const botonesOperando = document.querySelectorAll(".operando");

botonesNumero.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if (previousNum !== "" && currentNum !== "" && operador === "") {
        previousNum = "";
        valorActual.textContent = currentNum;
    }
    if (currentNum.length <= 12) {
        currentNum += number;
        valorActual.textContent = currentNum;
    }
}

botonesOperando.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(op);
    } else if (currentNum === "") {
        operatorCheck(op);
    } else {
        resultado();
        operador = op;
        valorActual.textContent = "0";
        valorPrevio.textContent = previousNum + " " + operador;
    }
}

function operatorCheck(text) {
    operador = text;
    valorPrevio.textContent = previousNum + " " + operador;
    valorActual.textContent = "0";
    currentNum = "";
}

function resultado() {
    previousNum = Number(previousNum);

    currentNum = Number(currentNum);

    if (operador === "+") {
        previousNum += currentNum;
    } else if (operador === "-") {
        previousNum -= currentNum;
    } else if (operador === "x") {
        previousNum *= currentNum;
    } else if (operador === "/") {
        if (currentNum <= 0) {
            previousNum = "Error";
            displayResults();
            return;
        }
        previousNum /= currentNum;
    }
    previousNum = redondear(previousNum);
    previousNum = previousNum.toString();
    displayResults();
}

function redondear(numero) {
    return Math.round(numero * 1000000) / 1000000;
}

function displayResults() {
    if (previousNum.length <= 11) {
        valorActual.textContent = previousNum;
    } else {
        valorActual.textContent = previousNum.slice(0, 11) + "...";
    }
    valorPrevio.textContent = "";
    operador = "";
    currentNum = "";
}

function borrar() {
    currentNum = "";
    previousNum = "";
    operador = "";
    valorActual.textContent = "0";
    valorPrevio.textContent = "";
}

function agregarDecimal() {
    if (!currentNum.includes(".")) {
        currentNum += ".";
        valorActual.textContent = currentNum;
    }
}
