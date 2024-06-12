//Creo el array meses, donde almaceno los nombres de los meses
meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

//Pido por pantalla al usuario que me de un numero del 1 al 12
nroMes = window.prompt("Ingrese un número del 1 al 12:"); 

//Si el numero es menor a 1 o mayor a 12, le indico por pantalla al usuario
//el error y le pido que ingrese un numero del 1 al 12 nuevamente
while (nroMes>12 || nroMes<1) {
    window.alert("El número ingresado no es válido. Intente nuevamente.");
    nroMes = window.prompt("Ingrese un número del 1 al 12:"); 
}

//Si el numero ingresado es valido, imprimo por pantalla un mensaje indicando
//a que mes corresponde el numero.
document.write("El mes número ", nroMes, " es ", meses[nroMes - 1], ".");


