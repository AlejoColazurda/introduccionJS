//POO

/*Object Literal*/
const porducto = {
    nombre:'Tablet',
    precio: 500
}

/*Object Constructor*/
function Producto(nombre, precio, color,){
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;

}
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('LapTop', 750);
const producto4 = new Producto('IPhone 15', 1220, 'White');
const producto5 = new Producto('Smart Wacht', 590, 'Black');

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);