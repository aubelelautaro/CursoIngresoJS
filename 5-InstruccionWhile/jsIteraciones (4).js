function Mostrar()
{

	var numero;

	numero = prompt("ingrese un número entre 0 y 9 inclusive");

	while (numero <0 || numero >9) 
	{
		numero = prompt ("No es correcto");
	}
}