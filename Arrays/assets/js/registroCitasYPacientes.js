//Sistema para registrar pacientes y citas de estos pacientes utilizando metodos de arrays

//Listas de cosas para hacer / cosas por tomar en cuenta

/*
    - Un array para pacientes
    - Un array para citas

    - prompt para registrar los datos
    - Datos a registrar: Nombre, apellido, fecha, edad, hora, especiallista
    - Funcion registrarPaciente
    - Funcion registrarCita
    - Metodos para modificar los arrays (push, foreach, splice)

*/

//Crear un array para almacenar mis pacientes

//La variable pacientes esta declarada e inicializada (tiene un nombre y tiene un valor, a pesar de que su arreglo este vacio

//los indices del arreglo estan undefined, porque no hay elementos pero si hay espacios disponibles
let pacientes = []; //pacientes = definido


//Funcion para registrar un nuevo paciente
//Paso 1: Ejecucion de mi funcion. Pido dos datos
function registrarPaciente(nombre, edad){

    //Crear un array dentro de otro arrray
    //Paso 2: Guardo cada par de datos (nombre y la edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas : []
    };

    //Agregar el paciente al array 
    //Paso 3: Ya que tengo el par de datos, le hago un push a mi arreglo para guardar al paciente
    pacientes.push(paciente);
    return paciente;
}

//Funcion para registrar citas de un paciente

//Cuando ejecuto mi funcion necesito un paciente, una hora y una fecha para registrar mi cita
function registrarCita(paciente, fecha, hora){

    //Cuando tengo estos datos, buscamos dentro del paciente el apartado citas para hacerle un push ahi
    paciente.citas.push(
        {
            fecha, 
            hora
        }
    );
}

//Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " + paciente.edad);
    console.log("Citas registradas: ");

    //Foreach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora);
    });

}

/*Funcionamiento del foreach anterior
1. Definir una variable temporal llamada cita y otra veriable temporal llamada indice
2. cada que se ejecuta el foreach, busca y encuentra una cita, asigna esa informacion a las variables temporales e imprime la informacion.
3. Vuelve a buscar y encontrar otra cita, y reasigna esa informacion a las variables temporales 

*/



//Registrar un paciente desde la invocacion de la funcion
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto", 20);
let paciente3 = registrarPaciente("Dr. Simi", 50);

//Registrar una cita para un paciente desde la invocacion de la funcion registrarCita
registrarCita(paciente1, "12/12/2020", "10:00 am");

//Mostrar la informacion del paciente
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);
mostrarInfoPaciente(paciente3);


/*ForEach

Es un metodo de arrays que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarla en una funcion establecida.

el map necesita generar un nuevo arreglo
foreach lo hace en el original

Generalmente el foreach se utiliza para imprimir la informacion del arreglo.


Sintaxis del foreach

array.forEach(function(elemento, indice, arreglo){

    - elemento: es el elemento actual del arreglo que se esta procesando
    . indice: es el indice del elemento actual en el arreglo
    - arreglo: es el arreglo que se esta recorriendo (opcional)

        Ejemplo del supermercado

    - elemento: producto que compre y que esta en mi carrito
    - indice: posicion del producto 
    - arreglo: carrito de compras (opcional)

*/

let carritoSuper = ["Manzanas", "Papitas", "Huevo", "Jabon de trastes", "Pan"];

//Oye JS, por cada elemento del tipo "producto" que tenga una posicion dentro del arreglo llamado "carritoSuper", ejecuta la funcion que esta dentro del forEach
carritoSuper.forEach(function(producto, indice){ //Variable temporal llamada producto
    console.log("Producto: " + producto + " con la posicion: " + indice);
});

/*
producto = "Manzanas",
producto = "Papitas",
producto = "Huevo",
*/