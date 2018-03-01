function Mostrar()
{
    var numero;
    var contador;
    var numerosDivisores;


    numero = prompt ("Ingrese Numero");

    for (i = 1 ; i <= numero ; i++)
    {
        if (numero % i == 0) 
        {
            contador++;
            alert (i);
        }
    }

    alert ("Cantidad de divisores = " + contador);

}//FALTA TERMINAR