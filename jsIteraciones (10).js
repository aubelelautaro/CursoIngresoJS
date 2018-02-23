function Mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 0;
	var numero;
	var contadorNegativos=0;
	var acumuladorNegativos=0;
	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promediosPositivos;
	var promediosNegativos;
	var respuesta="si";
	var diferencia;

	while(respuesta!="no")
	{
		contador++;
		numero = prompt ("Ingrese un numero");
		numero = parseInt (numero);

		if (numero%2 == 0 && numero != 0) 
		{
			contadorPares++;
		}
		if (numero < 0) {
			acumuladorNegativos = acumuladorNegativos + numero;
			contadorNegativos++;
		}
		else
		{
			if (numero > 0) {
				acumuladorPositivos = acumuladorPositivos + numero;
				contadorPositivos++;
			}
			else
			{
				contadorCeros++;
			}
		}

		respuesta = prompt ("Quiere seguir ingresando numeros?");
	}

	promediosNegativos = acumuladorNegativos/contadorNegativos;
	promediosPositivos = acumuladorPositivos/contadorPositivos;
	diferencia = acumuladorPositivos - acumuladorNegativos;


	document.write ("1-Suma de Negativos" + " " + acumuladorNegativos + ", ");

	document.write ("<br>" + "2-Suma de Positivos" + " " + acumuladorPositivos + ", ");

	document.write ()

}//FIN DE LA FUNCIÓN