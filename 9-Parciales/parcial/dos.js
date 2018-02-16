function Mostrar()
{
  var precio;
  var aumento;
  var resultado;

  precio = prompt("Precio");
  
  parseInt(precio)

  aumento = 1.21

  resultado = (precio*aumento)

  document.getElementById("importeFinal").value = resultado;
  
}
