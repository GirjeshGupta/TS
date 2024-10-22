// Interfaces  and  Type Aliases
// . Definind interfaces
// . Using interfaces to defind object shapes
// . Extending interfaces
// . Types Aliases
// . Interfaces types

// use case

//1. function fun(a:number , b : string){}

//2. another fun1(obj)

interface User{
    name :string,
    email :string ,
    password :string
}

function getDataOfUser(obj : User){}

getDataOfUser({name:"typescript" , email:"abc@gmai.com" , password : "abc"});

// Optional value 
interface OptionalUser{
    name : string,
    age: number,
    gender?: string // ?  is use for optional
}

function getUserDetails(obj : OptionalUser){
    obj.name;
    obj.age
}

getUserDetails({name:"typescript" , age:44}); // gender is optional
getUserDetails({name:"dandiya" , age:43 , gender: "male"});


// Extend Enterface

interface A {

    name:string;
    age : number
}

interface B extends A {

    isActive:boolean
}

function A(obj : B){
    obj.isActive;
    obj.name;
}

A({name:"avv" , age :100 , isActive : false});


// Override interface

interface AB {
    name:string
}
interface AB {
    age:number
}

function overrideFun(obj : AB){

    // Both AB intereface marge 
    // obj get Both the Data of AB interface
    obj.age;
    obj.name;
}

// Types Aliases

// use case 
// if this happened  again n again better use aliases
let ab : string | boolean | number ;

type useOfAliases = string | boolean | number ;

let ab1:useOfAliases = true;
ab1 = "abc";
ab1 = 2355;

type parivar = string ;

let chacha : parivar  = "Chacha";

function aliasesFun ( obj : useOfAliases){}

aliasesFun(true);
aliasesFun("string");

// Union 

let aabc : string | null ; // ( | ) this line is called as union

type use = {name :string , email :string}

type admin = use & {  // & is called interaction
    getDetails(user:string):void; 
}

function abfun(a:admin){
    a.getDetails;
    a.name;
}