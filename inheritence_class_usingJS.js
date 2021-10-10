class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        return `${this.name} is eating`;
    }
    showting(){
        return `${this.name} is showting`;
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    sniff(){
        return `${this.name} is sniffing`;
    }
}

class Cat extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    kneing(){
        return `${this.name} is knewing`;
    }
}

let animal1 = new Animal("Gorilla");
let someDog = new Dog("SomeDog","German Shafed");
let someCat = new Cat("Some Cat","Persion breed");

console.log(animal1);
console.log(someDog.sniff());
console.log(someDog.eat());
console.log(someDog.showting());

console.log(someCat.kneing());
console.log(someCat.eat());
console.log(someCat.showting());