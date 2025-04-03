import {Observer} from './Observer.js';
export class Cliente extends Observer {
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }
    actualizar(nombreProducto) {
        console.log(`Hola ${this.nombre}, el producto "${nombreProducto}" ya está disponible.`);
    }
}