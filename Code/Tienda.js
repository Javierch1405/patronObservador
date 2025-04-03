export class Tienda {
    constructor() {
        this.productos = {};
    }

    agregarProducto(producto) {
        this.productos[producto.nombre] = producto;
    }

    obtenerProducto(nombre) {
        return this.productos[nombre];
    }
}