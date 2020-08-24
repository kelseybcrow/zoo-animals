import Alligator from "./models/Alligator.js";
let ally = new Alligator("Ally", "green", "meat");
ally.eat();

import Bear from "./models/Bear.js";
let bernie = new Bear("Bernie", "brown", "meat and plants");
bernie.eat();

import Cheetah from "./models/Cheetah.js";
let cheryl = new Cheetah("Cheryl", "patterned", "meat");
cheryl.eat();

import Deer from "./models/Deer.js";
let danny = new Deer("Danny", "brown", "plants");
danny.eat();

import Eagle from "./models/Eagle.js";
let ernie = new Eagle("Ernie", "brown", "meat");
ernie.eat();

import Fox from "./models/Fox.js";
let fanny = new Fox("Fanny", "red", "meat and plants");
fanny.eat();

import Goat from "./models/Goat.js";
let gary = new Goat("Gary", "tan", "plants");
gary.eat();

import Hyena from "./models/Hyena.js";
let hattie = new Hyena("Hattie", "tan", "meat");
hattie.eat();

import Iguana from "./models/Iguana.js";
let iggy = new Iguana("Iggy", "green", "plants");
iggy.eat();

import { ZooDiet } from "./models/ZooDiet.js";
let zoofood = new ZooDiet();
zoofood.addCarnivores([ernie, hattie, cheryl]);
console.log(zoofood.carnivores);
