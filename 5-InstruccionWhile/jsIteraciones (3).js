function Mostrar()
{

var clave;
var clavecorrecta;

clave = prompt("ingrese el número clave.");
clavecorrecta = "utn750"

    while (clave != clavecorrecta && clave != null) 
    {
        if (clave == null) {
            break;
        }
        clave=prompt ("Ingrese otra vez");
    }
}