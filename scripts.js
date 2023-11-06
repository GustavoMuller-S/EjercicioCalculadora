/* BOTONES DE OPERACIONES MATEMATICAS */

function btnSumar() {
    // Obtener los valores ingresados por el usuario
    var numeroUno = parseFloat(document.getElementById("primerNum").value);
    var numeroDos = parseFloat(document.getElementById("segundoNum").value);

    // Verificar si los valores ingresados son números válidos
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor, ingrese números válidos.");
    return;
    }

    // Calcular la suma
    var suma = numeroUno + numeroDos;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = suma;
}

function btnRestar() {
    // Obtener los valores ingresados por el usuario
    var numeroUno = parseFloat(document.getElementById("primerNum").value);
    var numeroDos = parseFloat(document.getElementById("segundoNum").value);

    // Verificar si los valores ingresados son números válidos
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor, ingrese números válidos.");
    return;
    }

    // Calcular la resta
    var resta = numeroUno - numeroDos;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = resta;
}

function btnMulti() {
    // Obtener los valores ingresados por el usuario
    var numeroUno = parseFloat(document.getElementById("primerNum").value);
    var numeroDos = parseFloat(document.getElementById("segundoNum").value);

    // Verificar si los valores ingresados son números válidos
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor, ingrese números válidos.");
    return;
    }

    // Calcular la multiplicacion
    var multi = numeroUno * numeroDos;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = multi;
}

function btnDivid() {
    // Obtener los valores ingresados por el usuario
    var numeroUno = parseFloat(document.getElementById("primerNum").value);
    var numeroDos = parseFloat(document.getElementById("segundoNum").value);

    // Verificar si los valores ingresados son números válidos
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor, ingrese números válidos.");
    return;
    }

    // Calcular la division
    var divid = numeroUno / numeroDos;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = divid;
}