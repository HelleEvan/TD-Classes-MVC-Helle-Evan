export class Notifier{

    #observers;

    constructor(){
        this.#observers = [];
    }
    addObserver(observer){
        this.#observers.push(observer);
    }
    notify(){
        for(observer in this.#observers){
            observer.notify();
        }
    }
}