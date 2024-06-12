var valores = [true, false, 2, "hola", "mundo", 3, "char"];

//En primer lugar elimino con .shift los dos primeros elementos del array porque no son palabras ni numeros
//y no son necesarios para resolver ninguno de los problemas.
//Luego, ordeno con .sort los elementos del array de menor a mayor.
valores.shift();
valores.shift();
valores.sort();

//Sabiendo que el ultimo elemento del array es el mayor, imprimo por pantalla el mensaje indicandolo.
document.write(`El elemento de texto que contiene mas letras es "${valores[4]}".<br>`)

//Sabiendo que los dos primeros elementos del array son los numeros, y el resto son las 
//palabras ordenadas de menor a mayor. Imprimo por pantalla las palabras ordenadas.

document.write(`Palabras ordenadas de menor a mayor longitud son: ${valores[2]}, ${valores[3]}, ${valores[4]}. <br>`);

//Realizo las operaciones matematicas basicas e imprimo los resultados por pantalla.
suma = valores[0] + valores[1];
resta = valores[0] - valores[1];
multiplicacion = valores[0] * valores[1];
division =  valores[0] / valores[1];

document.write(`${valores[0]} + ${valores[1]} = ${suma} <br>`);
document.write(`${valores[0]} - ${valores[1]} = ${resta} <br>`);
document.write(`${valores[0]} * ${valores[1]} = ${multiplicacion} <br>`);
document.write(`${valores[0]} / ${valores[1]} = ${division} <br>`);