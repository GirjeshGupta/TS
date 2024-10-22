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
var Devices = /** @class */ (function () {
    function Devices() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
    return Devices;
}());
var d1 = new Devices();
console.log(d1);
//Constructor
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var obj = new BottleMaker("Milton", 1200);
var b1 = new BottleMaker("Cello", 100);
console.log(obj);
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandsome) {
        this.age = 0;
    }
    return HumanMaker;
}());
var h1 = new HumanMaker("prem", true);
var h2 = new HumanMaker("halua", false);
