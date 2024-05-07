import { Observer } from "../pattern/observer.js";

export class Notifier{
    #observers;

    constructor(){
        this.#observers = [];
    }
    addObserver(observer){
        this.#observers.push(observer);
    
    }

    notify(){
        for(let observer in this.#observers){
            observer.notify();
        }
    }
}