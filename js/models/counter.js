class counter{
    #counter;

    constructor(){
        this.#counter = 0;
    }
    getValue(){
        return this.#counter;
    }
    incrementValue(){
        this.#counter +=1;
    }
    decrementValue(){
        this.#counter -=1;
    }
}