/* let obj = {
    a: 1,
    b: "harry"
}
console.log(obj);

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; */

class Animal {
    constructor(name) {
        this.name = name
        console.log('Object is created...');
    }
    eats() {
        console.log('Eating');
    }
    jumps() {
        console.log('Jumping');
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log('OIbject is creatd by lion');
    }
}
let a = new Animal("Bunny")
console.log(a);
let l = new Lion("Sher")
console.log(l);