
/*A la entrada a una discoteca, se pregunta al cliente qué edad tiene. Darle una respuesta diferente si la edad es mayor, menor o igual a 18 años.*/

let edad = parseInt(prompt("¿Cuántos años tienes?"));

if (isNaN(edad) || edad < 0) {
    console.log("Por favor, ingresa una edad válida.");
} else if (edad < 18) {
    console.log("Lo siento, no puedes pasar a la discoteca.");
} else if (edad === 18) {
    console.log("Puedes entrar a la discoteca, ¡feliz mayoría de edad!");
} else {
    console.log("Puedes pasar a la discoteca.");
}

/* *2 - CINCO COLORES**

Se le pide al usuario que escoja un color (azul, verde, rojo, amarillo y violeta) y darle una respuesta en relación al color elegido. Ejemplo: "el azul es como el mar, siempre que el cielo sea azul (y sea de día)". Dar otra respuesta en el caso que NO elija ninguno de los colores anteriores.*/

let color = prompt("¿De qué color es el semáforo?");

if (color === "azul") {
    console.log("El azul es como el mar, siempre que el cielo sea azul (y sea de día)");
} else if (color === "verde") {
    console.log("El verde es como la hierba, siempre que el césped sea verde (y esté vivo)");
} else if (color === "rojo") {
    console.log("El rojo es como la sangre, siempre que el corazón sea rojo (y esté vivo)");
} else if (color === "amarillo") {
    console.log("El amarillo es como el sol, siempre que el sol sea amarillo (y esté brillando)");
} else if (color === "violeta") {
    console.log("El violeta es como la uva, siempre que la uva sea violeta (y esté madura)");
} else {
    console.log("El color elegido no es válido");
}
/* **3- LAMPARA NO ENCIENDE**

Hacer 2 preguntas prompt (si/no). Se puede anidar dos condicionales (uno dentro de otro). Crear el código con condicionales para el algoritmo representado por el siguiente diagrama de flujo: https://andresdevivancocm.wordpress.com/wp-content/uploads/2015/06/lampara2.png */

let estaEnchufada = prompt("¿Está la lámpara enchufada? (si/no)").toLowerCase();

if (estaEnchufada === "no") {
    console.log("Enchufar la lámpara");
    alert("Enchufar la lámpara");
} else if (estaEnchufada === "si") {
    let focoQuemado = prompt("¿Está el foco quemado? (si/no)").toLowerCase();
    
    if (focoQuemado === "si") {
        console.log("Reemplazar el foco");
        alert("Reemplazar el foco");
    } else if (focoQuemado === "no") {
        console.log("Comprar nueva lámpara");
        alert("Comprar nueva lámpara");
    } else {
        console.log("Respuesta no válida para el foco");
    }
} else {
    console.log("Respuesta no válida para el enchufe");
}

