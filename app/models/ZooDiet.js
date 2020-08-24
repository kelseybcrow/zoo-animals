export class ZooDiet {
    constructor() {
        this.herbavores = []
        this.carnivores = []
        this.omnivores = []
    }
    addCarnivores(arr) {
        arr.forEach(carnivore => this.carnivores.push(carnivore))
        }
    }
