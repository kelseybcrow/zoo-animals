class Hyena {
    constructor(
        name = '',
        color = '',
        diet = ''
    ) {
        this.name = name;
        this.color = color;
        this.diet = diet;
    }
    eat(diet) {
        console.log(`${this.name} the Hyena eats ${this.diet}.`)
    }
}

export default Hyena;