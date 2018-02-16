function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    var resultado;

    largo=document.getElementById("alrgo").value;
    ancho=document.getElementById("ancho").value;

    perimetro = (largo*2+ancho*2);

    resultado = (perimetro*3);

    alert (resultado);

}
