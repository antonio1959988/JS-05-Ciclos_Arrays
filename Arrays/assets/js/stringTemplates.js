
//Comilla invertida
var template = `This is a templa
te string`;
console.log(template)

//Imprimir saludo con comillas dobles
var nombre = "Codigo";
var saludo = "Hola " + nombre + " buen dia";
console.log(saludo);

//Imprimir saludo con template string
function nombreT(){
    return 3+2;
}


var nombre2 = "Template";
var saludo2 = `Hola ${nombre2} buen dia`; //imprimir con variable
console.log(saludo2);

var saludo3 = `Hola ${nombreT()} buen dia`; //imprimir con funcion
console.log(saludo3);