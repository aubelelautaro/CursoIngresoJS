function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

	while (respuesta!="no") 
	{
		numero = prompt ("Numero");
		numero = parseInt (numero); // NaN

		while (isNaN(numero))
		{
			break;
		}

		respuesta = prompt ("Quiere seguir agregando numeros?");

		contador++;
		acumulador = acumulador + numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}