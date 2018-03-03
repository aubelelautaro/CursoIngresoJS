function Mostrar()
{
    var ventas;
    var maximo = 0;
    var minimo = 0;
    var contador = 0;

    while (contador < 24) 
    {
        contador++;
        ventas = prompt ("Importe de Ventas");
        ventas = parseInt (ventas);

        if (ventas < 0 || ventas == NaN) {
            alert ("Error");
            contador--;
        }
        else
        {
            if (ventas > maximo){
                    maximo = ventas
            }
            else {
                ventas < minimo
                minimo = ventas
            }
        }
    }
    alert ("El importe mayor de ventas es : " + maximo + " y el importe menor es : " + minimo);
}
