function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a === 0 || b === 0 ? 0 : a * b;
}

function dividir(a, b) {
    return a === 0 || b === 0 ? "No se puede dividir entre 0" : a / b;
}

function operador(operacion, a, b) {
    if (operacion.toLowerCase() === "+") {
        sumar(a, b);
    }
    if (operacion.toLowerCase() === "-") {
        restar(a, b);
    }
    if (operacion.toLowerCase() === "x") {
        multiplicar(a, b);
    }
    if (operacion.toLowerCase() === "a/b") {
        dividir(a, b);
    }
}

export { sumar, restar, dividir, multiplicar, operador };
