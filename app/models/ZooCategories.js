export class ZooCategories {
    constructor() {
        this.herbavores = []
        this.carnivores = []
        this.omnivores = []
    }
    addCarnivores(arr) {
        arr.forEach(c => this.carnivores.push(c))
        }
    }
