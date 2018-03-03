//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
    var contador = 0;
    var sexo;
	var contadorVarones = 0;
    var notabaja;
	var acumuladorNotas = 0;
    var promedioNotas;


	for (contador = 0; contador < 6 ; contador++)
		{
			nota = prompt ("Ingrese nota");
			nota = parseInt (nota);
			while (nota > 10 || nota < 0 || isNaN (nota)) 
			{
				nota = prompt ("Ingrese nuevamente la nota");
				nota = parseInt (nota);
       		}

			sexo = prompt ("Ingrese su sexo");
			while (sexo != "f" && sexo != "m") 
			{
				sexo = prompt ("Ingrese el sexo nuevamente");			
    		}
			acumuladorNotas = acumuladorNotas + nota;
			if (contador == 0 || nota<notabaja) 
			{
				notabaja = nota;	
			}
			if (sexo == "m" && nota >= 6) 
			{
				contadorVarones++;	
			}
		}
	promedioNotas = acumuladorNotas / contador ;

	alert ("El promedio : " + promedioNotas + ", nota mas baja: " + notabaja + " y la cantidad de varones con 6 o mas: " + contadorVarones );
    /*while (contador < 6) 
    {
        nota = prompt ("Ingrese Nota");
        nota = parseFloat (nota);
    	while (nota > 10 || nota < 0 || isNaN (nota)) 
		{
			alert ("Error, ingrese una nota entre 0 y 10");
			nota = prompt ("Ingrese nuevamente la nota");
			nota = parseFloat (nota);
        }
	
		sexo = prompt ("Ingrese su sexo");
    	while (sexo != "f" && sexo != "m") 
		{
			alert ("Error, ingrese f o m");
			sexo = prompt ("Ingrese su sexo nuevamente");			
    	}
	contador++;
    }*/
}

