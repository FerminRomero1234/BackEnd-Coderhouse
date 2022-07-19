// Desafío Complementario 
// Ejemplo 1 
/* Pedir un numero mediante prompt y sumarle otro numero en cada repiticion, realizando una salida por cada resultado. */
//let numero = parseInt(prompt('Ingresa un numero:')); // Pido numero mediante prompt
//let rondas = parseInt(prompt('Rondas:')); // Numero de rondas

/*for (let i = 0; i < rondas; i++) // Bucle
{
    let resultado = numero + i; // Numero a sumar por ronda (i)
    console.log("Vuelta " + i + ": " + numero + " + " + i + " = " + resultado); // Debug de la suma en cada vuelta

}*/


// Ejemplo 2 
// Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa "ESC". */
/*let texto = prompt("Ingrese un texto") // Pido texto mediante Prompt. 
let textoPrompt = "";

while (texto != "ESC") {
    textoPrompt = textoPrompt + texto + " + "// Concatenacion de los textos. 
    console.log(textoPrompt); // Salida por cada resultado. 
    texto = prompt("Ingrese un texto (Toca ESC para salir):"); // Si se ingresa ESC se termina el bucle. 
}*/


// Ejemplo 3
// Pedir un numero por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada. 

/*let veces = parseInt(prompt("Numero de rondas de Hola: ")) // Pido un numero por prompt. 

for (let x = 0; x < veces; x++) Hago un bucle que dure la cantidad de veces ingresada.* {

    console.log("Hola"); // Pongo "Hola" en la consola la cantidad de veces que hayan pedido que dure el bucle. 

}
*/

// Algoritmo Personal 

/*let contar = parseInt(prompt("¿Hasta cuanto querés contar?"))
let v = 0


while (contar == 0 || contar < 0) {
    alert('Numero ingresado incorrecto');
    contar = parseInt(prompt("¿Hasta cuanto querés contar?"))


}
if (contar >= 0) {
    while (v < contar) {
        v++;
        console.log(v);

    }
}*/ 



//Simulador interactivo


let producto = parseInt(prompt("Elige un producto: \n 1- Remera River\n 2- Campera River \n 3- Campera Boca \n 4- Remera Seleccion Argetnina \n 5- Jogging Boca"))

let total = 0;

/* Le decis al usuario de elejir un numero del 1 al 5, de caso contrario le saldra una alerta */
while (producto== NaN || producto > 5 || producto <= 0) {
    alert("No existe un producto para ese valor. Vuelva a intentar.")
     producto = parseInt(prompt("Elige un producto: \n 1- Remera River\n 2- Campera River \n 3- Campera Boca \n 4- Remera Seleccion Argetnina \n 5- Jogging Boca"))
}

/* Le sumara el precio a la consola del producto */
switch (producto) {
    case 1:
        console.log("Has seleccionado  " + producto + "Remera River")
        total = total + 100;
        break;
    case 2:
        console.log("Has seleccionado  " + producto + "Campera River")
        total = total + 100;
        break;
    case 3:
        console.log("Has seleccionado " + producto + "Campera Boca")
        total = total + 100;
        break;
    case 4:
        console.log("Has seleccionado " + producto + "Remera seleccion Argentina")
        total = total + 100;
        break;
    case 5:
        console.log("Has seleccionado " + producto + "Jogging Boca")
        total = total + 100;
        break;

    default:
        break;
}


let confirmacion = confirm("¿Quieres algún producto más?")

// Le preguntas que otros productos quiere en el caso de ser afirmativa la respuesta anteriormente
while (confirmacion) {
    let producto = parseInt(prompt("Elige un producto: \n 1- Remera River\n 2- Campera River \n 3- Campera Boca \n 4- Remera Seleccion Argetnina \n 5- Jogging Boca"))
}
   //Lo mismo para que elija un producto del 1 al 5, en caso contrario le saldra una alerta 
  while (producto== NaN || producto > 5 || producto <= 0) {
    alert("No existe un producto para ese valor. Vuelva a intentar.")
    producto = parseInt(prompt("Elige un producto: \n 1- Remera River\n 2- Campera River \n 3- Campera Boca \n 4- Remera Seleccion Argetnina \n 5- Jogging Boca"))
}
switch (producto) {
    case 1:
        console.log("Has seleccionado  " + producto + "Remera River")
        total = total + 100;
        break;
    case 2:
        console.log("Has seleccionado  " + producto + "Campera River")
        total = total + 20;
        break;
    case 3:
        console.log("Has seleccionado " + producto + "Campera Boca")
        total = total + 25;
        break;
    case 4:
        console.log("Has seleccionado " + producto + "Remera seleccion Argentina")
        total = total + 30;
        break;
    case 5:
        console.log("Has seleccionado " + producto + "Jogging Boca")
        total = total + 250;
        break;

    default:
        break;
}

confirmacion = confirm("¿Quieres algún producto más?")

// Precio final 
let cuotas = confirm("Precio Total: " + total + "\nPrecio Total (+IVA): " + iva(total) )

// Valor IVA 
function iva(valor) {
    let valorAgregado = valor * 1.21
    parseFloat(valorAgregado.toFixed(2))
    return valorAgregado }

// La finalizacion de la compra 
if (total != 0) {
    alert("¡Gracias por su compra!")
}
