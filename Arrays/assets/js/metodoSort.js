//El metodo sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

// 1) Inmutabilidad
// 2) Siempre devuelve un nuevo elemento
// 3) El elemento siempre va a ser un arreglo

//Strings
const arreglo = ["Manzana", "Pera", "Sandia", "Melon", "Banano"];
arreglo.sort();
console.log(arreglo); // ordena alfabeticamente

//Numeros
const arreglo2 = [75, 19, 10, 90, 25, 110]; // se convierten a strings y se ordenan alfabeticamente
arreglo2.sort();
console.log(arreglo2);

//Funcion de comparacion
arreglo2.sort(comparacion);
console.log(arreglo2);

function comparacion(a,b){
    // -1 si va situar a en un indice menor que b
    // 0 si son iguales
    // 1 si va a situar b en un indice menor que a
    return a-b;
}
