class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`)
    }
}

class Dog extends Animal {
    constructor(name,age) {
        super(name)
        this.age = age;
    }

}

const doggy = new Dog('H',5);

console.log(doggy.age)
