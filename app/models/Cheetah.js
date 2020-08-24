class Cheetah {
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
        console.log(`${this.name} the Cheetah eats ${this.diet}.`)
    }
}

export default Cheetah;