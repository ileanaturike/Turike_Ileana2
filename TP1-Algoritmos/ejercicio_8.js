//Pido al usuario que ingrese por teclado una palabra.
var palabra = window.prompt("Ingrese una palabra:")

//Pongo toda la palabra en minisculas.
palabra = palabra.toLowerCase()

//Creo un array donde almaceno las vocales.
vocales = ["a", "e", "i", "o", "u"]

//Con un bucle for recorro la palabra ingresada letra por letra.
for (let i = 0; i < palabra.length; i++) {
    
    //Con un segundo bucle for evaluo si cada letra de la palabra coincide o no con alguna de las 
    //vocales del array.
    for (let j = 0; j < vocales.length; j++) {

        //Si la letra coindice con una vocal, imprimo por pantalla un mensaje indicandolo.
        if (palabra[i].includes(vocales[j]) == true) {
            document.write(`${palabra} = "${vocales[j]}" es la letra Nº ${i+1}`)
            
            //Como quiero que los bucles terminen una vez que encuentro la primera vocal
            //igualo i y j a los valores en que su respectivo bucle finaliza.
            i = palabra.length
            j = vocales.length
        }   
        
    }
}