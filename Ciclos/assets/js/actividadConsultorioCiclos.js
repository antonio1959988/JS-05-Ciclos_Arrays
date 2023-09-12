
//Establecer limite de citas diarias para cada doctor
 let contadorHoraCita= 1; //Iniciar agenda
 let limiteCitaDiario = 8; //Limite de jornada

 do{
    //Agendar con nombre
     let registro = prompt("Ingresa tu nombre para agendar 1 hora de cita: ");

     //Condicional que incrementa el contador si el limite aun no se alcanza
     if(contadorHoraCita < limiteCitaDiario){
         console.log(registro, " registrado con exito!")
         contadorHoraCita++;
     }else{ //De lo contrario, cerrar agenda
         console.log("Limite diario excedido, agenda cerrada")
         break;
     }
 }while(confirm("Deseas agendar otra cita?")); //preguntar si se desea agendar mas

 console.log("Numero total de citas agendadas hoy: ", contadorHoraCita); //recordar al paciente citas que se han registrado



//Inventario de cajas de pastillas
let antiinflamatorios= 5;

//Mientras haya cajas, ofrecerlas
while (antiinflamatorios > 0) {

    //Pregunta para ofrecer medicamento
    let opcionMed = prompt("¿Necesitas medicamento?");

    //Disminuir inventario si aceptan medicamento
    if (opcionMed == "si") {
         console.log("Te han asignado un antiinflamatorio");
         antiinflamatorios--;
         console.log("Quedan ", antiinflamatorios, " cajas");

    } else if (opcionMed == "no") { //Agradecer si no necesitan medicamento
         console.log("Gracias por tu visita!");
         break; //Finalizar bucle
     }
 }



//Consultas sin cita
let turnoSinCita = 1; //Variable inicial de turno
let limiteTurnos = 5; //limite de consultas sin cita

for (turnoSinCita; turnoSinCita <= limiteTurnos; turnoSinCita++ ){

    //Mensaje inicial
    var nombre = prompt("Bienvenido a las consultas sin cita! \n Ingrese su nombre ");
    console.log(nombre, " por favor espere, su turno es ", turnoSinCita);

    //condicion para notificar limite de turnos
    if(turnoSinCita == limiteTurnos){
        console.log("Se han terminado los turnos sin cita, por favor vuelva mañana");
    }
  
}



