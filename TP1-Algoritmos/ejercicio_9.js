//Creo la variable suma 
let suma = 0 

//Creo un bucle for que se repita 5 veces.
for (let i = 1; i < 6; i++) {
    //Pido al usuario que ingrese por teclado 5 notas.
    nota = parseInt(window.prompt("Ingrese la nota numero " + i))

    //Si la nota es un valor menor o igual a 0 o mayor a 10.
    //Indico por pantalla el error y vuelvo a pedir que ingrese la nota.
    while (nota <= 0 || nota > 10) {
        window.alert("Ingrese un valor entre 1 y 10.")
        nota = parseInt(window.prompt('Ingrese la nota numero ' + i))
    } 
    //En la variable suma almaceno la sumatoria de las notas.
    suma=suma+nota
}

//Calculo el promedio.
promedio = suma/5

//Si el promedio es menor a 6 imprimo por pantalla "Reprobado"
if (promedio < 6){
    document.write("Reprobado");
} else{
    //Si el promedio es mayor o igual a 6 o menor a 8 imprimo por pantalla "Aprobado"
    if (promedio>=6 & promedio<8){
        document.write('Aprobado');
    } else {
        //Si el promedio es mayor o igual a 8 imprimo por pantalla "Sobresaliente"
        if (promedio>=8){
            document.write("Sobresaliente");
        }
    }
}

