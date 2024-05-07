import { counter } from "../models/counter.js"
import { Notifier } from "../pattern/notifier.js";

export class Controller extends Notifier{
    #counter;

    constructor(){
        super();
        this.#counter = new counter();
    }
    incrementCounter(){
        this.#counter +=1;
        this.notify();
    }
    decrementCounter(){
        this.#counter -=1;
    }
    getCounterValue(){
        return this.#counter;
    }
}