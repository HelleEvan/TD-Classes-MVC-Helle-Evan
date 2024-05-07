import { Observer } from "./observer";

export class Notifier{
    #observer;
    #observers;

    constructor(){
        this.#observer = new Observer();
        this.#observers = [];
    }
    addObserver(observer){
        this.#observers.push(observer);
    
    }
    notify(){
        for(this.#observer in this.#observers){
            this.#observer.notify();
        }
    }
}