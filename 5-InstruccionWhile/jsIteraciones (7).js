function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

	while (true) 
	{
		contador++;
		numero = prompt ("Numero");
		numero = parseInt (numero); // NaN

		if (isNaN(numero))
		{
			break;
		}

		acumulador = acumulador + numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}