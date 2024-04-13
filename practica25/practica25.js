var num1;
var num2;
var op;

op = prompt("Ingrese la operacion matematica:");
num1 = parseFloat(prompt("Ingrese el primer numero: "));
num2 = parseFloat(prompt("Ingrese el segundo numero: "));

operacionesMatematicas(op,num1,num2);

function operacionesMatematicas(op,num1,num2){

    switch(op){
        case 'suma': {
            var suma = num1 + num2;
            return alert("El resultado de la operacion: "+ suma);
            break;
        }

        case 'resta': {
            var resta = num1 - num2;
            return alert("La resta de los numeros es: " +resta);
            break;
        }

        case 'multi': {
            var multi = num1 * num2;
            return alert("La multiplicación de los numeros es: " + multi);
            break;
           
        }

        case 'div': {
            var div = num1 / num2;
            return  alert("La división de los numeros es: "+div);
            break;
        }

        default: {
            return alert("Error");
            break;
        }
    }

     
}