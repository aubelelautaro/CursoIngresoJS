function Mostrar()
{
    var numero1;
    var numero2;
    var numero3;
    var maximo;

    numero1 = prompt ("Ingrese un numero");
    numero2 = prompt ("Ingrese otro numero");
    numero3 = prompt ("Ingrese el ultimo numero");

    numero1 = parseInt (numero1);
    numero2 = parseInt (numero2);
    numero3 = parseInt (numero3);

    if (numero1 > numero2 && numero1 > numero3) {
        maximo = numero1;
    }
    else{
        if (numero2 > numero1 && numero2 > numero3) {
            maximo = numero2;
        }
        else {
            maximo = numero3;
        }
    }
    alert (maximo);
}
