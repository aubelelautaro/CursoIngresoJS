function Mostrar()
{
    var días;

    días = prompt ("Ingrese un día")

    switch (días) 
    {
        case "sabado":
        case "domingo":
            alert ("es fin de semana");
            break;
        default:
            alert ("a trabajar!!!");
            break;
    }
}
