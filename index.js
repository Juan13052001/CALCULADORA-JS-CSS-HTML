import { sumar, restar, dividir, multiplicar } from "./operaciones.js";

let valueActual = "";
let valueAnterior = "";
let operador = "";

const pantalla = document.querySelector(".pantalla");

const valorPrevio = document.querySelector(".previous-value");

const valorActual = document.querySelector(".valor-actual");

const botonesNumero = document.querySelectorAll(".numeros");

const botonesOperando = document.querySelectorAll(".operando");

const igual = document.querySelector(".igual");

igual.addEventListener("click", resultado);

const reset = document.querySelector(".borrar");

reset.addEventListener("click", borrar);

botonesNumero.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

botonesOperando.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleNumber(number) {
    if (valueAnterior !== "" && valueActual !== "" && operador === "") {
        valueAnterior = "";
        valorActual.textContent = valueActual;
    }
    valueActual += number;
    valorActual.textContent = valueActual;
}

function handleOperator(op) {
    if (valueAnterior === "") {
        valueAnterior = valueActual;
        operatorCheck(op);
    } else if (valueActual === "") {
        operatorCheck(op);
    } else {
        resultado();
        operador = op;
        valorActual.textContent = "0";
        valorPrevio.textContent = valueAnterior + " " + operador;
    }
}

function resultado() {
    valueAnterior = Number(valueAnterior);
    valueActual = Number(valueActual);
    console.log(typeof valueActual);
    console.log(typeof valueAnterior);
    console.log(operador);
    console.log(typeof operador);
    if (operador === "+") {
        valueAnterior = sumar(valueAnterior, valueActual);
    } else if (operador === "-") {
        valueAnterior = restar(valueAnterior, valueActual);
    } else if (operador === "x") {
        valueAnterior = multiplicar(valueAnterior, valueActual);
    } else if (operador === "/") {
        valueAnterior = dividir(valueAnterior, valueActual);
    }
    valueAnterior = valueAnterior.toString();
    displayResults();
}
function displayResults() {
    if (valueAnterior.length <= 11) {
        valorActual.textContent = valueAnterior;
    } else {
        valorActual.textContent = valueAnterior.slice(0, 11) + "...";
    }
    valorPrevio.textContent = "";
    operador = "";
    valueActual = "";
}
function borrar() {
    valueActual = "";
    valueAnterior = "";
    operador = "";
    valorActual.textContent = "0";
    valorPrevio.textContent = "";
}
function operatorCheck(text) {
    operador = text;
    valorPrevio.textContent = valueAnterior + " " + operador;
    valorActual.textContent = "0";
    valueActual = "";
}
