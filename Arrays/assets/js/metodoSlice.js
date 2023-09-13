
/*Metodo slice
    Devuelve un nuevo arreglo con los elementos que se le indiquen
    - El primer parametro es el indice de inicio
    - El segundo parametro es el indice de fin (opcional)
    - Si no se indica el segundo parametro, se toman todos los elementos hasta el final
*/

const arreglo = [1,2,3,4,5,6,7,8];

const numeros = arreglo.slice(4,7); //No hace modificaciones solo copia, el valor final no se incluye
console.log(numeros); // [5,6,7]

