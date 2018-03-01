function Mostrar()
{
    var numero;
    var cantidadPares = 0;

    numero = prompt ("Ingrese numero");

    for (i = 1 ; i <= numero ; i ++)
    {
        if (i % 2 == 0) 
        {
            cantidadPares++;
            alert (i);
        }
    }

    alert ("Cantidad de pares = " + cantidadPares);



}