import {counter} from "./../models/counter.js"


function display_counter(){
    let objet = new counter();
    console.log(objet.counter);
}

window.addEventListener("load",display_counter());

//est ce que les commits fonctionnent?