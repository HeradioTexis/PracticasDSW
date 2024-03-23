var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


console.log(diasSemana);


diasSemana.push("Otro dia");
console.log(diasSemana);


diasSemana.shift();
console.log(diasSemana);


var i = 0;
var total = 0;

console.log("Ciclo While");
while(i<=5){

    total += i
    i++
}
console.log("La suma es = "+total);

var num = 5;
var facto = 1;

do{

    facto *= num;
    num--;

}while(num>0);

console.log("El factorial es: "+ facto);


console.log("Ciclo FOR");

for (i=0; i<7; i++){
    if(i != 3){
        console.log("Hola");
    }
    
    if(i == 3){
        console.log("Soy el 4to Hola");
    }
}

console.log("Acabamos de saludar");



var persona = {
    nombre: "Pepe Nava Fierro",
    edad: 30,
    ciudad: "Tj"
  };
  
  for (var propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
  }

 

var numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
  console.log(numero);
});

var colores = ["rojo", "verde", "azul"];

for (let color of colores) {
  console.log(color);
}