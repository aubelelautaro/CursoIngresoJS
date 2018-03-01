//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	
	importe = prompt ("Ingrese importe");

	importe = parseInt (importe);

	document.getElementById("importe").value = importe*1.21 ;

}