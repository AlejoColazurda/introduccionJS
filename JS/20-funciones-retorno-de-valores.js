// function sumar(n1, n2){
//     return n1 + n2;
// }

// const resultado = sumar(2,3);

// console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcImpuesto(total){
    return 0.21 * total;
}


total = agregarCarrito(200);
total = agregarCarrito(200);
total = agregarCarrito(200);

console.log(total);

const totalAPagar = calcImpuesto(total);

console.log(`El total a pagar con impuestos es de:  $${totalAPagar}`);
