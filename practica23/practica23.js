
var num;

num = prompt("Escribe un numero: ");

 parImpar(num);

function parImpar(num){

    if((num % 2) == 0){

        return alert("El numero es par.");

    }else{
        
        return alert("El numero es impar");
    }
}