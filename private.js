class Car{
    constructor(brand,year){
    this.carname=brand;
    this.caryear=year;

    }
    get cname(){
        return this.cname+"the year is :"+this.year;
    }
    set cname([x,y]){
        this.cname=x;
        this.cname=y;

    }
}
const myCar=new Car("Ford",2000);
console.log(myCar);