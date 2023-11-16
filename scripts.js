/* BOTONES DE OPERACIONES MATEMATICAS */

function btnSumar() {
    // Obtener los valores ingresados por el usuario
    let numeroUno = parseFloat(document.getElementById("primerNum").value);
    let numeroDos = parseFloat(document.getElementById("segundoNum").value);

    // Verificar si los valores ingresados son números válidos
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor, ingrese números válidos.");
    return;
    }

    // Calcular la suma
    let suma = numeroUno + numeroDos;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = suma;
}

function btnRestar() {
    let numeroUno = parseFloat(document.getElementById("primerNum").value);
    let numeroDos = parseFloat(document.getElementById("segundoNum").value);

    if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor, ingrese números válidos.");
    return;
    }

    // Calcular la resta
    let resta = numeroUno - numeroDos;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = resta;
}

function btnMulti() {
    let numeroUno = parseFloat(document.getElementById("primerNum").value);
    let numeroDos = parseFloat(document.getElementById("segundoNum").value);

    if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor, ingrese números válidos.");
    return;
    }

    // Calcular la multiplicacion
    let multi = numeroUno * numeroDos;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = multi;
}

function btnDivid() {
    let numeroUno = parseFloat(document.getElementById("primerNum").value);
    let numeroDos = parseFloat(document.getElementById("segundoNum").value);

    if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor, ingrese números válidos.");
    return;
    }

    // Calcular la division
    let divid = numeroUno / numeroDos;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = divid;
}