function Mostrar()
{
    var numero;
    var cantidadPares = 0;
    var numerosPares

    numero = prompt ("Ingrese numero");

    for (var i = 1 ; i < numero ;)
    {
        if (numero % 2 == 0 && numero != 0) 
        {
            cantidadPares = numero / 2
            console.log (numerosPares);
        }
    }

    alert ("Cantidad de pares = " + cantidadPares);



}