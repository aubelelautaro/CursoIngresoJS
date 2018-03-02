function Mostrar() //SI SON = MOSTRAR CONCATENADOS PRIMERO > SEGUNDO MULTIPLICO Y SI EL PRIMERO ES MENOR QUE SEGUNDO SE RESTA
{
    var dato1;
    var dato2;
    var resultado;
    
    dato1=prompt("Ingrese un numero");
    dato2=prompt("Ingrese otro numero");
    dato1 = parseInt (dato1);
    dato2 = parseInt (dato2);

    if (dato1 == dato2) {
        resultado = (dato1+""+dato2);
    }
    else  {
        if (dato1 > dato2) {
            resultado = (dato1 * dato2);
            if (resultado%2 == 0 && resultado != 0) {
                resultado = resultado + " Es par";
            }
        }
    else{
        (dato1 < dato2) 
        resultado = (dato1 - dato2);
        }
    }
    alert (resultado);
}
