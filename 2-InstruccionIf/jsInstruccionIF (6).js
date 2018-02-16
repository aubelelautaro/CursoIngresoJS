function Mostrar()
{
    var edad;
    
        edad=document.getElementById("edad").value;

    if (edad >= 18) {
        alert("Mayor de edad");
        
    }
    else
    if (edad <= 13) {
        alert("Niños")
        
    }
    else 
    alert("Adolescente");

}