var peso = prompt("Ingresa tu peso: ");
var peso_tierra;
var peso_marte;
var peso_jupiter;
var resultado;

var opcion = prompt("Que opcion desea (1-3)");

switch(opcion) {
    case "1":

        alert ("Tu peso en la tierra es: " + peso);
        break;
    
    case "2":
        peso_marte = peso * .37;
        alert ("Tu peso en marte es: " + peso_marte);
        break;
    
    case "3":
        peso_jupiter = (peso/9.81) * 24.79;
        alert ("Tu peso en jupiter es: " + peso_jupiter);
        break;

    default:
        alert("No existe esa opcion");
        break;
}