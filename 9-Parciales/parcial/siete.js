function Mostrar()
{
    var nota;
    var contador = 0;
    var sexo;
    var notabaja;
    var promedioNotas;


    while (contador < 100) 
    {
        nota = prompt ("Ingrese Nota");
        nota = parseInt (nota);
        while (nota <= 10 && nota > 0) {

        }
        while (sexo) {
            sexo = prompt ("F o M");
            if (sexo != isNaN) {
                alert ("Error");
                sexo = prompt ("Ingrese de nuevo F o M");
            }
        }
        contador++;
    }
    
}
