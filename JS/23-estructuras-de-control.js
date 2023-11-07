// const puntaje = 1000;

// if(puntaje === 1000){
//     console.log('Si, el puntaje es 1000');
// }else {
//     console.log('No es igual');
// }

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito){
    console.log('El usuario puede comprar.');
}else{
    console.log('El usuario no puede pagar');
}


//cambiar la variable de rol para ir jugando con la estructura if.
const rol = 'EDITOR';


if (rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema.');
}else if(rol==='EDITOR'){
    console.log('Tenés acceso a las herramientas de editor.');
}else{
    console.log('No tenés acceso a todo el sistema.');
}



