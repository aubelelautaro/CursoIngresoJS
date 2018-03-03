//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var maximo;
	var minimo;
	var importe;
	var contador=0;

	while (contador < 7) 
	{
		
		importe = prompt ("Ingrese importe de ventas");
		importe = parseInt (importe);
		while (importe <= 0 || isNaN (importe))
		{
			importe = prompt ("Ingrese nuevamente el importe");
			importe = parseInt (importe);
		}
	
		if (contador == 0)
		{
			maximo = importe;
			minimo = importe;
		}
		else
		{
			if (importe < minimo)
			{
				minimo = importe;
			}
			if (importe > maximo) 
			{
				maximo = importe;	
			}
		}	
		contador++;
	}
	alert ("El mayor importe es : " + maximo + " y el importe menor es : " + minimo);
}