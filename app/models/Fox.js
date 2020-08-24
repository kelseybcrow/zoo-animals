class Fox {
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
        console.log(`${this.name} the Fox eats ${this.diet}.`)
    }
}

export default Fox;