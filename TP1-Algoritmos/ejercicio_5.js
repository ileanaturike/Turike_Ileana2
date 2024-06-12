let dato, resultado; 
//Se crean las variables "dato" y "resultado".

val1 = window.prompt("Introduce tu nombre", "..."); 
//Se muestra en un cuadro de dialogo el mensaje "Introduce tu nombre" al usuario y se pone "..." como valor predeterminado.
//El nombre ingresado por el usuario se guarda en la variable "val1".

val2 = window.prompt("Introduce tu apellido", "..."); 
//Se muestra en un cuadro de dialogo el mensaje "Introduce tu apellido" al usuario y se pone "..." como valor predeterminado.
//El apellido ingresado por el usuario se guarda en la variable "val2".

resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `;
//Se crea un mensaje con el nombre y el apellido ingresados y se guarda en la variable "resultado".
document.write(resultado);
//Se imprime por pantalla el mensaje.