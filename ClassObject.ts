// Claasses and Objects
// .class definition
// .Constructor
// .Access Modifiers ( public , private , protected )
// .Readonly properties
// .Optional properties
// .Parameter properties
// .Getter and Setters
// .Static memeber
// .Abstract classes and methods

class Devices{

    name = "lg";
    price = 12000;
    category = "digital";
}

let d1 = new Devices();

console.log(d1);

//Constructor

class BottleMaker{

    constructor(public name:string , public price :number){

    }
}
const obj = new BottleMaker("Milton", 1200);
const b1 = new BottleMaker("Cello" , 100 );
console.log(obj);

class HumanMaker {
    age:number = 0;

    constructor(name:string , isHandsome:boolean ){}
}

const h1 = new HumanMaker("prem", true);
const h2 = new HumanMaker("halua",false);
