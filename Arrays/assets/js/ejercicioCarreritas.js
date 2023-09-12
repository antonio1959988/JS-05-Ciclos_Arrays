//Narrador
console.log("La competencia esta fuerte señores! asi van inciciando la primera vuelta nuestros corredores");

//Iniciar arreglo con sus respectivas posiciones 
let carrera = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

//Mostrar marcador inicial
console.log("Marcador Inicial: ", carrera);

//Inicia tercera vuelta
//Narrador
console.log("INCREIBLE LO QUE ESTOY VIENDO SEÑORES! Jorge ha pegado tremenda ventaja y se posiciona en la cima del marcador")

//jorge adelanta a roberto
carrera.unshift("Jorge"); //[2] Jorge se posiciona en primera posicion del array
carrera.splice(3, 1); //Se elimina a jorge de la cuarta posicion con index [3]
console.log("Marcador: ", carrera);

//Narrador 
console.log("IM-PRE-SIO-NANTE lo que menos se podia esperar hasta el momento, Ramiro a toda velocidad se posiciona en la cima dejando atrás a Jorge")

//Ramiro adelanta a jorge
carrera.unshift("Ramiro"); //Se posiciona a ramiro en primer lugar
carrera.splice(4,1); //Se elimina a ramiro de la 5ta posicion con index [4]
console.log("Marcador: ", carrera);

//Narrador
console.log("ROBERTO NOOOOOO!! parece que un incidente durante la carrera dejó a Roberto sin condiciones de continuar la carrera")

//Roberto se lesiona y sale de la carrera
carrera.splice(2,1); //Eliminar a Roberto de la 3ra posicion con index [2]
console.log("Marcador: ", carrera);

//Narrador
console.log("IMPERDONABLE SEÑORES! todo parece indicar que Andrea ha perdido estabilidad y ha sido rebasada por Sofia")

//Andrea baja una posicion
carrera.push(carrera[2]); //Colocar a Andrea al final del array
carrera.splice(2,1); //Eliminar a Andrea de la 3ra posicion con index [2]
console.log("Marcador: ", carrera);

//Narrador
console.log("PERO QUE ESTA PASANDO AQUI DR. GARCIA!, tenemos a un nuevo integante en la carrera para finalizar con broche de oro Jose se integra a la competencia")

//Quinto lugar es reemplazado por Jose
carrera[4] = "Jose";
console.log("Marcador Final: ", carrera);







