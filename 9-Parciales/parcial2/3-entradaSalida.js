//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambre;

	ancho = document.getElementById("ancho").value;
	largo = document.getElementById("largo").value;

	perimetro = ancho * 2 + largo * 2

	alambre = perimetro * 6

	alert ("Se necesitan "+ alambre + " de alambre")
}

