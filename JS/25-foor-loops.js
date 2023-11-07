//For Loop
// for(let i = 0; i < 10; i++) {
//     if(i % 2 === 0){
//         console.log(`El Número ${i} es par`);
//     }else{
//         console.log(`El Número ${i} es impar`);
// }
// }
console.log('-----------------------SECCION FOR LOOP-----------------------');
const carrito = [
    {nombre: 'Monitor 20"', precio: 500},
    {nombre: 'Television 80"', precio: 1000},
    {nombre: 'Tablet', precio: 400},
    {nombre: 'Auriculares', precio: 30},
    {nombre: 'Teclado', precio: 60},
    {nombre: 'Iphone 15', precio: 2500},
    {nombre: 'Parlante Xiaomi', precio: 300},
    {nombre: 'Notebook Asus', precio: 800},
];

for(let i = 0; i < carrito.length; i++){
    console.log( carrito[i].nombre );
}



//While Loop
console.log('-----------------------SECCION WHILE LOOP-----------------------');
let i = 0;//indice
while(i < 10){//condicion
    if(i % 2 === 0){
        console.log(`El Número ${i} es par`);
    }else{
        console.log(`El número ${i} es impar`);
    }
    i++;
}

let j = 0;
while(j < carrito.length){
    console.log(carrito[j].nombre)
    j++;
}




//Do while Loop
console.log('-----------------------SECCION DO WHILE LOOP-----------------------');
let k = 0;//indice

do{
    console.log(k);
    k++;
}while(k < 10);//condicion

