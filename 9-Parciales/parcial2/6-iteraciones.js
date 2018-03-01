//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var maximo;
	var minimo;
	var importe = -1;
	var diaMaximo;
	var diaMinimo;
	var contador=0;
	var bandera = true;

	while (contador < 7) {
		
		while (importe < 0) {
			importe = prompt ("Ingrese importe de ventas");
			importe = parseInt (importe);
		}
		contador++;
	}
	if (bandera) {
		bandera = false;
		maximo = importe;
		minimo = importe;	
	}
	else {
		if (importe > maximo) {
			maximo = importe
		}
		if (importe < minimo) {
			minimo = importe
		}
	}
}