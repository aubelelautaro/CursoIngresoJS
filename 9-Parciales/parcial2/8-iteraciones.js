//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var seguir = true;
	var cantidadPares = 0;
	var acumulador = 0;
	var promedio;
	var contador;
	var minimo;
	var maximo;

	while (seguir == true) 
	{
		numero = prompt ("Ingrese numero");
		numero = parseInt (numero);
		while (numero <= 0 || isNaN (numero)) 
		{
			numero = prompt ("Ingrese numero");
			numero = parseInt (numero);
		}

		if (numero%2 == 0) 
		{
			cantidadPares++;	
		}

		acumulador = acumulador + numero;

		if (contador == 0 || numero < minimo) 
		{
			minimo = numero;
		}
		if (contador == 0 || numero < maximo) 
		{
			maximo = numero;
		}

		contador++;
		seguir = confirm("desea ingresar otro?");

	}

	promedio = acumulador / contador;

	document.write ("Pares: " + cantidadPares + "<br>");
	document.write ("Promedio: " + promedio + "<br>");
	document.write ("Sumatoria: " + acumulador + "<br>");
	document.write ("maximo: " + maximo + " y el minimo: " + minimo);
}

