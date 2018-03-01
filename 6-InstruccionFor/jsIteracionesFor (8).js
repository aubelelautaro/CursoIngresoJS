function Mostrar()
{
    var numero;
    var contador = 0;

    numero = prompt ("Ingrese Numero");

    for (i = 1 ; i < numero ; i++)
    {
        contador++;
        if (contador == 2) {
            alert ("Es primo");
            break;
        }
        else {
            alert ("No es primo");
            break;
        }
        if (numero > 2) 
        {
            break;
        }
    }

}//FALTA TERMINAR