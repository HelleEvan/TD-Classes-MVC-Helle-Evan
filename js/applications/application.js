import { View } from "./../views/view.js";
import { Controller } from "./../controllers/controller.js";
import { Counter } from "./../models/counter.js"

function display_counter(){
    let counter = new Counter();
    console.log(counter.value);
}

function CV(){
    let controller = new Controller();
    let view = new View(controller);
}

window.addEventListener("load",display_counter());
window.addEventListener("load",CV());
