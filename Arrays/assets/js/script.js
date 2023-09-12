/*
Arrays

Un array es un conjunto de datos que se pueden almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una coleccion de variables (que pueden ser diferentes, pero con un mismo contexto.)

*/

//Variables que estan "sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "Instructor";


//Usar un array (arreglo) para "juntar" nuestras variables
//Agregamos los elementos al array separados por coma
let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];

//Podemos almacenar cualquier tipo de dato en un array
let cosasRandom = ["Pelota", 31, true, undefined, null];

console.log(typeof(cosasRandom)); //object
console.log(typeof(personasDeLaCH31)); 

//Al imprimir el tipo de dato de nuestro arreglo obtenemos un object porque los arrays son objetosd (despues veremos que tenemos muchos tipos de objetos)

//Los arreglos al ser objetos cuentan con metodos que nos permiten manipularlos


//Ya que tengo mi arreglo, como podemos acceder a esa informacion?
//Para mostrar la cantidad de elementos que tengo en un arreglo usamos el metodo llamado lenght



//Metodo lenght para mostrar los elementos de un array
console.log(personasDeLaCH31.length); //referencia . metodo





//declarar un array
[5,4,3,2,1]


//Inicializar un array
let cuentaRegresiva = [5,4,3,2,1];


//Acceder a un elemento en especifico utilizando los indices

console.log(personasDeLaCH31[0]); //Felipe
console.log(personasDeLaCH31[25]); //undefined porque el elemento aun no existe

//Tambien podemos acceder a un elemento de mi arreglo por medio de una variable

//Declara el index en una variable
let index = 4;

//Pasa esta variable como indice del arreglo
console.log(personasDeLaCH31[index]); //Alejandro



//Ejemplo de un array para un consultorio dental
let pacientes = [];

let dentistas = ["Dr. Smith", "Dr. Garcia", "Dr. House", "Dr. Simi"]


//Para hacer modificaciones usamos el index para acceder al dato, y luego lo reasignamos
dentistas[3] = "Dr. Similares";
dentistas[8] = "Dr. Strange"; //undefined por Dr. Strange

console.log(typeof(dentistas[7]));


//Funcion para imprimir asteriscos y poner una division en la informacion de mi consola
function imprimirAsteriscos(){
    console.log("***********************************");
}

//Invocacion de la funcion
imprimirAsteriscos();


//Metodos de arrays

let listaDelSuper = ["Gansitos", "Coca-cola", "Arroz", "Atun", "Verduras"];


//Metodo lenght para conocer la longitud del array
console.log("La cantidad de elementos de mi array es: ", listaDelSuper.length);

//Metodo push() para poner elementos al final de mi array
listaDelSuper.push("Jabon para ropa", "Jabon para trastes");

console.log(listaDelSuper);


//Metodo pop() para eliminar elementos del final del array
listaDelSuper.pop();

console.log(listaDelSuper);
console.log(listaDelSuper.length);

//Agregar un elemento al principio del array con el metodo unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

//Eliminar el primer elemento del array: shitf elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);

//Saber la posicion de verduras
console.log(listaDelSuper.indexOf("Verduras")); // Case sensitive


//Metodo splice para agregar eliminar o reenplazar elementos

//NombreArreglo.splice(inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInsertar2, ...);


listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");

console.log(listaDelSuper);

listaDelSuper.splice(5, 2, "Platano");

console.log(listaDelSuper);


//Metodo .map()

let numeros = [1,2,3,4,5];

//Crear otro arreglo con los numeros multiplicados x2 [2,4,6,8,10]

let numerosPorDos = numeros.map(function(numero){
    return numero * 2;
})

console.log(numerosPorDos);


/*
Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 años el paciente necesita una atencion especial

    Aspectos a considerar
    - 2 arreglos (original y el modificado)
    - condicion if
    - funcion para agregar el nuevo dato a cada elemento
    - metodo map()
*/

//Arreglo de pacientes original

let pacientesConsultorio = [
    {
        nombre: "Felipe", 
        edad: 31
    },
    {
        nombre: "Fatima", 
        edad: 26
    },
    {
        nombre: "Jesus", 
        edad: 51
    }
];

//Funcion para agregar el texto Necesito atencion especial
function agregarEstadoSalud(paciente){
    let estado = "Saludable";

    //Si el paciente tiene mas de 40 años
    if (paciente.edad>40){
        estado = "Necesito atencion especial";
    }

    return {
        ...paciente, //copia del paciente
        estadoSalud: estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    };
}

//Vamos a aplicar la funcion en cada elemento del arreglo con el map

let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud); //refactorizacion

console.log(pacientesConsultorioConEstado);