/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    var importe;
    var Descuento;
    var resultado;

    importe=document.getElementById("importe").value;
    
    importe= parseInt(importe);

    Descuento= 0.75;

    resultado= (importe*Descuento);

    document.getElementById("resultado").value=resultado;

}
