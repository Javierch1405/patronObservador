import { Producto } from "./Producto.js";
import { Cliente } from "./Cliente.js";
import { Tienda } from "./Tienda.js";
// Crear tienda y productos
const tienda = new Tienda();

const ps5 = new Producto("PS5");
const laptop = new Producto("Laptop Gaming");

tienda.agregarProducto(ps5);
tienda.agregarProducto(laptop);

// Crear clientes
const ana = new Cliente("Ana");
const luis = new Cliente("Luis");
const maria = new Cliente("María");

// Suscripciones
ps5.agregarObservador(ana);
ps5.agregarObservador(luis);

laptop.agregarObservador(maria);

console.log("Los productos aún no están disponibles...\n");

// Simulación de llegada de productos
console.log("¡La PS5 ha llegado a la tienda!\n");
ps5.setDisponibilidad();

console.log("\n¡La Laptop Gaming ha llegado a la tienda!\n");
laptop.setDisponibilidad();
