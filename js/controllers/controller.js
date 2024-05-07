import { counter } from "../models/counter";
import { Notifier } from "../pattern/notifier";

export class Controller extends Notifier{
    #counter;
    #notif;

    constructor(){
        super();
        this.#counter = new counter();
        this.#notif = new Notifier();
    }
    incrementCounter(){
        this.#counter +=1;
        this.#notif.addObserver(this.#counter);
        this.#notif.notify();
    }
    decrementCounter(){
        this.#counter -=1;
    }
    getCounterValue(){
        return this.#counter;
    }
}