console.log("buenas");

/*
condiciones: Alterar el orden natural del codigo
estructura de control: controlar la ejecucion del codigo

Ciclos o bucles (Loops)
    - Tambien conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida hasta que se cumpla una condicion especifica.

    Es importante usar ciclos para automatizar tareas repetitivas

    En JS existen los siguientes ciclos:

        - while
        - do while
        - for

    Iterar: Proceso de repetir una secuencia de instrucciones
    Estructura de control: Herramienta especial para crear algoritmos o programas mas dinamicos y flexibles
*/

/*While: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este ciclo se repite mientras la condicion sea verdadera y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. La condicion se evalua antes de cada iteracion.

while (condicion){
    //codigo que se ejecuta
}
*/

//Siempre habra dos opciones: true o false
// while (miCrushMeQuiere) { //Mientras esto sea verdad
//     console.log("Sere feliz") //ejecuta esto
// }

//NOTA: Esto significa peligro. Esto es un ciclo sin fin (infinito), porque la condicion que se evalua siempre es true, significa que no hay nada que nos diga que se va a detener.
// while(true){

// }

/*
Analogia: Seguir una receta para preparar sopa

lista de ingredientes:
    - zanahoria
    - papitas
    - chayote
    - limon
    . agua
    - espinacas

Vamos a agregar los ingredientes a la olla MIENTRAS tengamos los ingredientes disponibles

Paramos cuando ya no tengamos ingredientes.

*/

//Ejemplo de un consultorio dental

let capacidadPacientes = 50;
let pacientesEnConsultorio = 15

//mientras 15 sea menor que 50...
while (pacientesEnConsultorio <= capacidadPacientes){
    //seguire dando servicio
    console.log("En servicio, pueden pasar 5 pacientes");
    //aumenta en 5 mis pacientes
    pacientesEnConsultorio += 5;
    console.log("Capacidad actual: ", pacientesEnConsultorio);
}

//Mientras sea verdadero se ejecuta la instruccion (piden permiso para ir auna fiesta)


/*
do while (hacer mientras)
//se ejecuta la instruccion mientras sea verdadero (pedir perdon por ir a la fiesta)

El bucle do while se diferencia del while ya que aqui se ejecuta la instruccion al menos una vez y luego se pregunta para saber si se sigue ejecutando o no

do {
    //codigo a ejecutar
} while (condicion)

Analogia: Cuando preparamos un pastel

While: Primero pregunta y si es verdadero ejecuta.
Do While: Primero ejecuta, despues pregunta y si es verdadero, vuelve a ejecutar


*/

//Ejemplo de un consultorio dental
var contadorPacientes= 0;

do{
    var nombre = prompt("Ingresa el nombre del paciente: ");

    if(contadorPacientes < 15){
        console.log(nombre, " registrado con exito!")
        contadorPacientes++;
    }else{
        console.log("Limite excedido")
        break;
    }
}while(confirm("Deseas ingresar otro paciente?"));

console.log("Numero total de pacientes: ", contadorPacientes);


/*
Ciclo for
    - Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar.
    - Consiste de 3 partes fundamentales:

    - Inicializacion: Se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (inicio).
    - Condicion: Es el detonante que verificamos antes de cada iteracion, para saber si se sigue ejecutando o no (siempre y cuando sea verdadero).
    - Expresion de iteracion (contador): Tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.

    for (inicializacion, condicion ; expresion de iteracion) {
        //bloque de codigo a ejecutar
    }

*/

//Crea un codigo que imprima los numeros del 0 al 4
for ( var i = 0; i <= 4; i++) {

    let mult = i * 6;
    console.log("6 x ", i, " = ", mult);

}

//Consultorio dental registro de citas con un for

let cantidadDeCitasDiarias = 5;

for(i = 1; i <=cantidadDeCitasDiarias; i++){
    var nombre = prompt ("Ingrese el nombre del paciente " + i)

    console.log("Paciente ", nombre, " con cita " + i);
}
