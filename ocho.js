function Mostrar()
{
    var nombre;
    var sexo;
    var peso;
    var temperatura;
    var animalPesado;
    var animalHabitatFrio;
    var contadorTemperaturas;
    var respuesta = "si";

    nombre = prompt ("Nombre del animal");
    sexo = prompt ("Sexo del animal (Macho o Hembra)");
    peso = prompt ("Peso del animal (En kg.)");
    temperatura = prompt ("Temperatura del habitat (-40 o +40)");

    peso = parseInt (peso);
    temperatura = parseInt (temperatura);

   // while (respuesta != "si") {
   //     respuesta = prompt ("Quiere seguir agregando animales?");
   // }

    while (peso > 0 || isNaN) {
        
    }
    while ((sexo != "macho" && sexo != "hembra") && sexo != null)
    {
        if (sexo == null) {
            break;
        }
        sexo = prompt("Vuelva a ingresar el sexo");
    }

    alert ("El animal mas pesado es " + animalPesado + "<\br>" + "El animal del habitat mas frio es " + animalHabitatFrio );
}
//nombre del animal mas pesado, nombre del animal del habitat mas frio, cantidad de temperaturas
// pares e impares, cant. de temp. positivas y negativas, sexo del animal del habitat 0