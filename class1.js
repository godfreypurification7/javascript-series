class Car {
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        const date=new Date();
        return date.getFullYear()- this.year;
    }
}

const myCar=new Car("Toyota", 2020);
const myCar1=new Car("Maruti", 2019);

console.log("CAR :",myCar);
console.log("My CAR is :  "+myCar.age()+"  years Old");

console.log("CAR1 :",myCar1);
console.log("My CAR is :  "+myCar1.age()+"  years Old");


