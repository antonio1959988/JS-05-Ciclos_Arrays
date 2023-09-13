//Desestructuracion de objetos: extraer propiedades de un objeto


//PRIMERA PRUEBA
const arreglo = [1,2,3,4,5];

const [valor1, valor2, valor3] = arreglo;
console.log(valor1);
// console.log(arreglo[2]);

//SEGUNDA PRUEBA
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
// console.log(dias[3]);
//let [dia1, dia2, dia3, dia4, dia5, dia6, dia7] = dias; //No es necesario poner todos los elementos del arreglo
//let [dia1, , , , , dia6, dia7] = dias; //Se puede saltar elementos
let [dia1, , , , , ...restoDias] = dias; //Se puede saltar elementos
console.log(restoDias);


//PRUEBA DE OBJETOS
const persona = {
    id : 10,
    nombre : "Juan"
}
// console.log(persona.nombre);
const {id, nombre} = persona;
console.log(nombre);

//ACCEDER A PROPIEDADES DE OBJETOS
const cadena = "Jose";

const {length} = cadena;
console.log(length);