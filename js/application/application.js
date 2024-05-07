import { Controller } from "../controllers/controller.js";
import {counter} from "../models/counter.js"
import {View} from "../views/view.js"


function display_counter(){
    let objet = new counter();
    console.log(objet.counter);
}

function CV(){
    const controller = new Controller();
    const view = new View(controller);
}
window.addEventListener("load",display_counter());
window.addEventListener("load",CV());
