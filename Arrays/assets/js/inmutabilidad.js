//Inmutabilidad: No se puede modificar el objeto original
// Siempre devuelve un nuevo elemento

//JS es un lenguaje debilmente tipado
let a = 10;
console.log(typeof(a));

a = "Diez";
console.log(typeof(a));

//Tipos de datos primitivos (inmutables) y no primitivos (mutables)
//  Primitivos: String, Number, Boolean, Null, Undefined, Symbol -> se pasan por valor
//  No primitivos: Objects, Arrays, Functions -> se pasan por referencia



//Primitivos inmutables
let string1 = "Juan";
console.log(string1);

let string2 = string1;
console.log(string2);

string2 = "Maria";
console.log(string2);

//Arrays
let colores1 = ["Azul", "Rojo"];

let colores2 = [...colores1]; //esto es un spread operator, se usa para copiar el arreglo
//console.log(colores2);

//Se modifica la copia
colores2[1] = "Verde"; //Se hace referencia al valor por lo que en ambos casos cambia
console.log(colores2);

console.log(colores1);


//Objetos
const producto1 = {
    descripcion : "Coca Cola",
    stock : 10
}

const producto2 = {...producto1};
producto2.price = 20.25;

console.log(producto2);
console.log(producto1);


console.log("--------------------------------------------------");

//Arreglos con objetos
const productos1 = [
    {descripcion : "Coca Cola", stock : 18},
    {descripcion : "Fanta", stock : 15}
]

const productos2 = productos1.map(product => {
    const price = 20.25;
    return {
        ...product, 
        price : price
    }
});

console.log(productos2);
console.log(productos1);