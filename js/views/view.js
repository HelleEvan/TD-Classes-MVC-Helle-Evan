import { Controller } from "../controllers/controller";
import { Observer } from "../pattern/observer";

class View extends Observer{
    #controller;
    controller2;
    constructor(){
        super();
        this.#controller = new Controller();
        this.controller2 = new Controller();
    }
    constructor(controller2){
        
    }
    notify(){

    }
}