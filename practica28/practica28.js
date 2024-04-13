function calcularPromedio() {
    var matematicas = parseFloat(document.getElementById("matematicas").value);
    var ciencias = parseFloat(document.getElementById("ciencias").value);
    var historia = parseFloat(document.getElementById("historia").value);
    var lenguaje = parseFloat(document.getElementById("lenguaje").value);
    var ingles = parseFloat(document.getElementById("ingles").value);
    var arte = parseFloat(document.getElementById("arte").value);
    var educacionFisica = parseFloat(document.getElementById("educacionFisica").value);
    var tecnologia = parseFloat(document.getElementById("tecnologia").value);
  //els nana es para ver que nresiva oro valor qu eno sea un numero evitando ue aya nulos
    if (isNaN(matematicas) || isNaN(ciencias) || isNaN(historia) || isNaN(lenguaje) || isNaN(ingles) || isNaN(arte) || isNaN(educacionFisica) || isNaN(tecnologia)) {
      alert("Por favor, completa todas las calificaciones.");
      var campos = document.querySelectorAll("input[type='number']");
      for (var i = 0; i < campos.length; i++) {
        if (campos[i].value === "") {
          campos[i].focus();
          break;
        }
      }
      return;
    }
  
    var promedio = (matematicas + ciencias + historia + lenguaje + ingles + arte + educacionFisica + tecnologia) / 8;
  
    alert(
          "\n\nTu promedio final es: " + promedio.toFixed(2));
  
    if (promedio >= 85) {
      alert("¡Felicidades! Estás exento de ordinario.");
    } else {
      alert("Debes presentar examen ordinario.");
    }
  }
  