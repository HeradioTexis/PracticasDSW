

var valores = [true, 10, false, "codigo", "herramientas", 7];
var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multi = valores[1] * valores[5];
var div = valores[1] / valores[5];
valores[2] = valores[1] == valores[5];
valores[0] = valores[1] != valores[5];

alert("La suma de los numeros es: " + suma);
alert("La resta de los numeros es: " +resta);
alert("La multiplicación de los numeros es: " + multi);
alert("La división de los numeros es: "+div);

alert("10 == 7 " + valores[2]);
alert("10 != 7 " + valores[0]);

alert("La palabra codigo tiene: " + valores[3].length + " Caracteres");
alert("La palabra herramientas tiene: " + valores[4].length + " Caracteres");

if(valores[3].length > valores[4].length){
    alert("La palabra codigo es mas grande");
}else{
    alert("La palabra herramientas es mas grande");
}