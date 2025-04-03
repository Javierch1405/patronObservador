import { Subject1 } from './Subject1.js';
export class Producto extends Subject1 {
    setDisponibilidad() {
        this.disponibilidad = true;
        this.notifyObservers(this.name);
    }
    getDisponibilidad() {
        return this.disponibilidad;
    }

}