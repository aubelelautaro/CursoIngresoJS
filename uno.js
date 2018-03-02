
function Mostrar()
{
    var base;
    var perimetro;
    var superficie;

    base = document.getElementById("laBase").value;

    perimetro = base*4;

    superficie = base * base

    alert ("La superficie es " + superficie)

    alert ("El perimetro es " + perimetro);
}
