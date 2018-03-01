//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = prompt ("Ingrese un numero");
	numero2 = prompt ("Ingrese otro numero");

	if (numero1 == numero2) 
	{
		resultado = numero1 * numero2
	}
	else {
		numero1 = parseInt (numero1);
		numero2 = parseInt (numero2);
		
		(numero1 > numero2) 
		resultado = numero1 - numero2
	
		if (numero1 < numero2) {
		resultado = numero1 + numero2
		}
	}	
	document.write (resultado);
}

