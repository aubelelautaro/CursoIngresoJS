function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero = prompt ("Ingrese numero");
		numero = parseInt (numero); // NaN

		if (contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}else 
		{	
			if (numero>maximo)
			{
				maximo = numero;
			}
			if (numero<minimo);
			{
				minimo = numero;
			}
		}
		contador++;
		respuesta = prompt ("Quiere ingresar mas numeros?");
	}

	document.getElementById("minimo").value = minimo;
	document.getElementById("maximo").value = maximo;



}//FIN DE LA FUNCIÓN