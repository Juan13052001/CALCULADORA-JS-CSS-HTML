function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a === 0 || b === 0
        ? "No se puede dividir entre 0"
        : Number.parseFloat(a / b).toFixed(2);
}

export { sumar, restar, dividir, multiplicar };
