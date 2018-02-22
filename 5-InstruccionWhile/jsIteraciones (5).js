function Mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");

while ((sexo != "f" && sexo != "m") && sexo != null)
{
    if (sexo == null) {
        break;
    }
    sexo = prompt("Vuelva a ingresar");
}

document.getElementById('Sexo').value=sexo;

}