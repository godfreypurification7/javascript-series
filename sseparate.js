// class Car {
//     constructor(brand) {
//       this._carname = brand;
//     }
//     get carname() {
//       return this._carname;
//     }
//     set carname(x) {
//       this._carname = x;
//     }
//   }
  
// const myCar = new Car("Ford");
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//   }
// let myCar=new Car("Toyota");

//static
class Car 
{
    constructor(brand){
        this.brand=brand;
    }
    static hello(x){
        return "Hello!!!! "+ x.brand
    }
}
const myCar=new Car("Toyota");
console.log(Car.hello(myCar));