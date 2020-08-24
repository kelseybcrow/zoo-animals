class Alligator {
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
        console.log(`${this.name} the Alligator eats ${this.diet}.`)
    }
}

export default Alligator;