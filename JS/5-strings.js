//String
const Tweet = "Aprendiendo Javascript con el curso de Desarrollo Web Completo";
const producto1 = "Monitor de 20 pulgadas";
// const producto2 = "monitor de 30 pulgadas";
// const producto3 = new String('Monitor de 50 pulgadas');


//Lenght es para conocer la extension del string.
console.log(Tweet.length);
console.log(producto1);
// console.log(producto2);
// console.log(producto3);

//indexOf es para encontrar un elemento en un string.
console.log(Tweet.indexOf('Javascript'));
console.log(producto1.indexOf('monitor'));

//includes retorna true o flase
console.log(Tweet.includes('Javascript'));
console.log(producto1.includes('monitor'));
