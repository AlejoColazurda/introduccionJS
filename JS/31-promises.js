const usuarioAuntenticado = new Promise( (resolve, reject) =>{
    const auth = true;

    if(auth){
        resolve('Usuario Auntenticado');// EL PROMISE SE CUMPLE.
    }else{
        reject('No se pudo iniciar sesion');// EL PROMISE NO SE CUMPLE.
    }
});





usuarioAuntenticado
    .then( (resultado)=> console.log(resultado))
    .catch( (error)=> console.log(error))

















//En los Promises existen 3 valores:
//Pending: No se ha cumplido pero tampoco se ha rechazado.
//Fulfilled: Ya se cumplio.
//Rejected: Se ha rechazado o no se pudo cumplir.

/*
Las palabras reservadas de Promise (resolve, rejected)
sirven para identificar que valores debe de mostrar segun
lo que pongamos en el bloque de codigo de Promise.

---------------------------------------------------------

Para poder ver reflejado los distintos tipos de casos
Podemos jugar con el codigo de la funcion usuarioAutenticado,
Por defecto en este codigo la constante ya lo tenemos en true
Eso nos dara como resultado "Resolve". Si cambiamos el valor de la constante auth a false, nos dara como resultado "Rejected". Por otro lado, lo que hace que esa constante sea "juzgada" es el condicional (Si... El if). Si se elimina el condicional nos dara el valor de "Pending", Ya que nunca se podra comprobar si la promesa se cumple o no.*/