export class counter{
    #counter;

    constructor(){
        this.#counter = 0;
    }
    get counter(){
        return this.#counter;
    }
    incrementValue(){
        this.#counter +=1;
    }
    decrementValue(){
        this.#counter -=1;
    }
}