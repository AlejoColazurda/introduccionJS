//Clases

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto "${this.nombre}" tiene un precio de: $${this.precio}`;
    }
}

const producto = new Producto('Monitor Curvo de 49"', 800);
const producto2 = new Producto('Laptop', 600);

console.log(producto);
console.log(producto2);

//Herencia de Producto
class Libro extends Producto{
    constructor(nombre, precio, isbn){
/*      SUPER sirve para la herencia en POO     */
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`;
    }
}

const libro = new Libro('Javascript la Revolucion', 270,'78950235429658');
console.log(libro.formatearProducto());