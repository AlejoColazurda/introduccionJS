//Pasarle parametros como num1 y num2 a la funcion de sumar.
//Inicializamos los parametros en 0 para puedan dar su valor y no error.
function sumar(num1 = 0, num2 = 0){
    console.log(num1+num2);
}

sumar(10,10);//Y acá pasamos los argumentos o valores reales.


const sumar2 = function(numero1 = 0, numero2 = 0){
    console.log(numero1+numero2);
}
sumar2(5, 7);

