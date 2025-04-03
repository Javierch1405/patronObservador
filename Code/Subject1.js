export class Subject1 {
    constructor(name) {
        this.name = name;
        this.observers = [];
        this.disponibilidad = false;
    }
    agregarObservador(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.actualizar(data));
    }
}