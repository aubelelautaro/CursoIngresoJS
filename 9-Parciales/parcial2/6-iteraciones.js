//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var maximo = 0;
	var minimo = 0;
	var importe;
	var contador=0;

	while (contador < 7) 
	{
		
		importe = prompt ("Ingrese importe de ventas");
		importe = parseInt (importe);
		while (importe < 0) {
			importe = prompt ("Ingrese importe de ventas");
			importe = parseInt (importe);
		}
		contador++;
	
		if (importe < 0 || importe != NaN) {
			alert ("Error");
			contador--;	
		}
		else {
			if (importe > maximo) {
				maximo = importe
			}
			else {
				importe < minimo
				minimo = importe
			}
		}
	}
	alert ("El mayor importe es : " + maximo + " y el importe menor es : " + minimo);
}