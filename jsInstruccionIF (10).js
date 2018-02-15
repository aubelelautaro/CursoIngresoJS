function Mostrar()
{
	var Numero;
	
		Numero = ((Math.random()*(11-1))+1);
		Numero = parseInt(Numero)

		alert(Numero)

		if (Numero>=9) {
			alert("Excelente")
		}
		else if (Numero>=6) {

			alert ("Muy Bien")
		}		
		else if (Numero>=4) {
				alert("Bien")
		}
		else if (Numero>=2) {

			alert("Mal")
		}
		else {
			Numero<=1
		}
}