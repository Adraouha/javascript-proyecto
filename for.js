/* Instructions

1- Imprime los números entre 20 y 50, ambos incluidos, en orden DESCENDENTE

2- Imprime los números pares entre dos números que introduzca el usuario

3- CARRITO DE LA COMPRA: se le pide al usuario el precio de 5 productos. Se calcula el total. En el caso de sumar 100 euros o más, se le da un descuento del 15%. Imprimir en tal caso el precio original y el precio final con el descuento. Si no, solo el precio total. Nota: te servirá crear una variable que vaya acumulando el precio total a medida que se vayan introduciendo precios (acumulador)*/

// --- EJERCICIO 1: Números 50 a 20 Descendente ---
function mostrarDescendente() {
    let output = "";
    for (let i = 50; i >= 20; i--) {
        output += i + (i > 20 ? ", " : "");
    }
    document.getElementById("result-1").innerText = output;
}

// Ejecutar automáticamente al cargar
mostrarDescendente();


// --- EJERCICIO 2: Pares entre dos números ---
function ejecutarEjercicio2() {
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    let resultDiv = document.getElementById("result-2");

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Por favor, introduce números válidos.";
        return;
    }

    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);
    let pares = [];

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    resultDiv.innerText = pares.length > 0
        ? `Números pares entre ${inicio} y ${fin}: \n${pares.join(", ")}`
        : "No hay números pares en ese rango.";
}


// --- EJERCICIO 3: Carrito de la Compra ---
function ejecutarEjercicio3() {
    let total = 0;
    let precios = [];
    let resultDiv = document.getElementById("result-3");

    for (let i = 1; i <= 5; i++) {
        let precio = parseFloat(prompt(`Introduce el precio del producto ${i}:`));
        if (isNaN(precio) || precio < 0) {
            alert("Precio no válido. Se contará como 0.");
            precio = 0;
        }
        precios.push(precio);
        total += precio;
    }

    let output = `Precios introducidos: ${precios.join("€, ")}€\n`;
    output += `Precio original total: ${total.toFixed(2)}€\n`;

    if (total >= 100) {
        let descuento = total * 0.15;
        let precioFinal = total - descuento;
        output += `¡Descuento del 15% aplicado! (-${descuento.toFixed(2)}€)\n`;
        output += `PRECIO FINAL: ${precioFinal.toFixed(2)}€`;
    } else {
        output += `Total: ${total.toFixed(2)}€ (No aplica descuento)`;
    }

    resultDiv.innerText = output;
}

// --- FUNCIÓN PARA LIMPIAR RESULTADOS ---
function limpiarEjercicio(numero) {
    const resultDiv = document.getElementById(`result-${numero}`);
    if (numero === 2) {
        resultDiv.innerText = "Esperando entrada...";
    } else if (numero === 3) {
        resultDiv.innerText = "Esperando compra...";
    }
}
