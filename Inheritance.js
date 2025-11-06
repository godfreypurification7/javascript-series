class Car{
    constructor(brand){
        this.CarName=brand;
    }   
    present(){
        return "I have a "+ this.CarName;
    } 
}
class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present()+', it is a ' +this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
let myCar1 = new Model("Toyota", "Starlet");

console.log(myCar.show());
console.log(myCar1.show());
