import {getCounter} from "./../models/counter.js"

function display_counter(){
    let counter = getCounter();
    console.log(counter);
}

window.addEventListener("load",display_counter());