// Define the Animal class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Encapsulation: Hide internal implementation details
  setName(name) {
    this.name = name;
  }

  setSpecies(species) {
    this.species = species;
  }

  getName() {
    return this.name;
  }

  getSpecies() {
    return this.species;
  }

  // Abstraction: Hide complex implementation details and provide simple interfaces
  sound() {
    throw new Error("The sound method must be implemented by subclasses");
  }

  movement() {
    throw new Error("The movement method must be implemented by subclasses");
  }
}

// Define subclasses for Vertebrates and Invertebrates

// Vertebrates: Animals with a backbone
class Vertebrate extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  sound() {
    throw new Error("Vertebrates may produce various sounds");
  }

  movement() {
    throw new Error("Vertebrates have different ways of movement");
  }
}

// Invertebrates: Animals without a backbone
class Invertebrate extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  sound() {
    throw new Error("Invertebrates may produce various sounds");
  }

  movement() {
    throw new Error("Invertebrates have different ways of movement");
  }
}

// Specific subclasses for Vertebrates and Invertebrates

// Mammals
class Mammal extends Vertebrate {
  constructor(name) {
    super(name, "Mammal");
  }

  sound() {
    return "Various sounds like roar, bark, or meow!";
  }

  movement() {
    return "Walk, run, swim or fly";
  }
}

// Insects
class Insect extends Invertebrate {
  constructor(name) {
    super(name, "Insect");
  }

  sound() {
    return "Buzz!";
  }

  movement() {
    return "Crawling or Flying";
  }
}

// Create instances of animals
const lion = new Mammal("Lion");
const bee = new Insect("Bee");

// Accessing properties and methods
console.log(`${lion.getName()} (${lion.getSpecies()}) says: ${lion.sound()}`);
console.log(
  `${lion.getName()} (${lion.getSpecies()}) moves by: ${lion.movement()}`
);

console.log(`${bee.getName()} (${bee.getSpecies()}) says: ${bee.sound()}`);
console.log(
  `${bee.getName()} (${bee.getSpecies()}) moves by: ${bee.movement()}`
);
