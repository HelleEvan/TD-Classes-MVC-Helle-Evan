import { Observer } from "./../pattern/observer.js";

export class View extends Observer{
    #controller;
    constructor(controller1){
        super();
        this.#controller = controller1;
        let button_inc = document.querySelector("#btn-increment");
        let button_dec = document.querySelector("#btn-decrement");
        button_inc.addEventListener("click", ()=>{
            this.#controller.incrementCounter();
            this.notify();
        });
        button_dec.addEventListener("click", ()=>{
            this.#controller.decrementCounter();
            this.notify();
        });

    }
    notify(){
        let text = document.querySelector("#txt-counter");
        text.innerText = this.#controller.getCounterValue();
    }
}