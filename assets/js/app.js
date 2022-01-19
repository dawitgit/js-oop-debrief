class Animal {
    constructor(name, species, color) {
        this.name = name;
        this.species = species;
        this.color = color;
    }
    greet() {
        console.log("All animals are love!");
    }
}

class Dog extends Animal {
    constructor(name, species, color){
        super(name, species, color);
        this.bark = 0;
    }
    barking(){
        console.log("bow-wow");
        this.bark++;
    }
}

class Cat extends Animal {
    constructor(name, species, color) {
        super(name, species, color);
        this.scratch = [];
    }
    claw(where) {
        console.log("Meow!!!!!")
        this.scratch.push(where);
    }
}

const hoya = new Dog("Hoya", "Jindo", "White");
hoya.barking();
hoya.barking();
console.log(hoya.bark);

const bubble = new Cat("Bubble", "Mixed", "Spotty");
bubble.claw("Right hand");
bubble.claw("Left wrist");
console.log(bubble.scratch);