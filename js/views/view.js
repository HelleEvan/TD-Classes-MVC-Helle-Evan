import { Controller } from "../controllers/controller.js";
import { Observer } from "../pattern/observer.js";

export class View extends Observer{
    #controller;
    
    constructor(controller2){
        super();
        this.#controller = controller2;
        this.#controller.addObserver(this);
        let bouton_increment=document.querySelector("button#btn-increment");
        bouton_increment.addEventListener("click",()=>{
            this.#controller.incrementCounter();
        });
    }
    notify(){
        const compteur = this.#controller.getCounterValue();
        let display = document.querySelector("p#txt-counter");
        display.innerText = compteur;
    }
}