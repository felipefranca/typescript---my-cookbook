var myName: string = "Felipe";
var myAge: number = 29;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;

document.getElementById("tsStuff").innerHTML = "My name is " + myName + " and my age is " + myAge;  

// typeof
document.write("<b>Tyoeof</b><br /><br />");

document.write("my name is a "+typeof(myName)+" <br />");
document.write("my age is a "+typeof(myAge)+" <br />");
document.write("my canvote is a "+typeof(canVote)+" <br />");
document.write("my anything is a "+typeof(anything)+" <br />");

// converting types
document.write("<b>Converting Types</b><br /><br />");

var strToNum: number = parseInt("5");
var numToStr: number = 5;

document.write("numToStr is a "+typeof(numToStr.toString())+" <br />");

const PI = 3.14159;

// interfaces
document.write("<b>Interfaces</b><br /><br />");

interface SuperHero {
    realName: String;
    superName: String;
}

var superMan: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}

document.write(superMan.realName + " is " + superMan.superName + "<br />");

// arrays os string
document.write("<b>Arrays Strings</b><br /><br />");

var employees: string[] = ["Bob", "Fil", "Sam"];

employees.push("Marcos");

document.write(employees.toString() + "<br />");

var superHeros: SuperHero[] = [];

superHeros.push({
    realName: 'Bruce Wayne',
    superName: 'Bataman'
});

document.write(superHeros[0].realName + " is "+ superHeros[0].superName +"<br />");

//Maths
document.write("<b>Maths</b><br /><br />");

document.write("5 + 4 = "+ (5+4) + "<br />");
document.write("5 - 4 = "+ (5-4) + "<br />");
document.write("5 * 4 = "+ (5*4) + "<br />");
document.write("5 % 4 = "+ (5%4) + "<br />");
document.write("5 / 4 = "+ (5/4) + "<br />");
document.write("5 + String 2 = "+ (5+'2') + "<br />");

// incremetes
document.write("<b>Increments</b><br /><br />");

var randNumber: number = 1;

document.write("randNumber++ = "+ (randNumber++) + "<br />");
document.write("++randNumber = "+ (++randNumber) + "<br />");
document.write("randNumber-- = "+ (randNumber--) + "<br />");
document.write("--randNumber = "+ (--randNumber) + "<br />");

// scopes
document.write("<b>Scopes</b><br /><br />");

let sampLet = 123;

if(true){
    let sampLet = 456;
}

document.write("sampLet : "+ sampLet +" <br />");

var sampVar = 123;

if(true){
    var sampVar = 456;
}

document.write("sampVar : "+ sampVar +" <br />");


// Looping
document.write("<b>Looping</b><br /><br />");

var randArray = [6,6,7,8];

for(var val in randArray){
    document.write(val + "<br />");
}

var strArray = randArray.map(String);

for(var val in strArray) {
    document.write(val + "<br />");
}



// Functions
document.write("<b>Functions</b><br /><br />");

var getSun = function(num1: number, num2: number, num3: number): number {
    return num1+num2+num3;
};

var theSun1: number = getSun(2,2,2);

document.write("Sum(2,2,2) = "+ theSun1 + "<br />");

var getDiff = function(num1: number, num2 = 2, num3?: number): number {
    if(typeof num3 !== 'undefined'){
        return num1 - num2 - num3;
    }
    return num1 - num2;
}

document.write("5 - 2 = "+ getDiff(5) + "<br />");

document.write("5 - 2 - 3 = "+ getDiff(5,2,3) + "<br />");

var sumAll = function(...nums: number[]): void {
    var sum = nums.reduce((a, b) => a + b, 0);
    document.write("sunAll(2,4,6,8,10) = "+ sum + "<br />");
}

sumAll(2,4,6,8,10);

var addOne = (x) => x+1;

document.write("1 + 1 = "+ addOne(1) + "<br />");

// Classes
document.write("<b>Classes</b><br /><br />");

class Animal {

    public favFood: string;
    static numOfAnimals: number = 0;
    
    constructor(private name: string, private owner: string){
        Animal.numOfAnimals++;
    }

    ownerInfo(){
        document.write(this.name + " is owned " + this.owner + " <br />");
    }
    
    static howManyAnimals(): number{
        return Animal.numOfAnimals;
    }

    private _weight: number;

    get weight(): number {
        return this._weight;
    }

    set  weight(weight: number){
        this._weight = weight;
    }

}

var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;

document.write("Spot weight is "+ spot.weight + "<br />");
document.write("# of animals is "+ Animal.howManyAnimals() + "<br />");

class Dog extends Animal {
    constructor(name: string, owner: string ){
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

var grover = new Dog("Grover", "Jimmy");
document.write("# of animals is "+ Animal.howManyAnimals() + "<br />");
document.write("Is a Dog an Animal :  "+ (grover instanceof Animal) + "<br />");
document.write("Does groover have a name : "+ ('name' in grover) + "<br />");


// Interfaces
document.write("<b>Interfaces</b><br /><br />");

interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {

    constructor(private wheel: number){}

    drive(): void{
        document.write("The car drives with "+ this.wheel + " wheels <br />");
    }
}

class Bicycle implements Vehicle {

    constructor(private wheel: number){}

    drive(): void{
        document.write("The bicycle drives with "+ this.wheel + " wheels <br />");
    }
}

var car = new Car(4);
var bike = new Bicycle(2);

car.drive();
bike.drive();


// Generic Functions
document.write("<b>Generic Functions</b><br /><br />");

function GetType<T>(val: T): string {
    return typeof(val);
}

var aStr = "A String ";
var aNum = 10;

document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");


// Generic Classes
document.write("<b>Generic Classes</b><br /><br />");

class GenericNumber<T> {
    add: (val1: T, val2: T) => T;
}

var aNumber = new GenericNumber<number>();

aNumber.add = function(x, y ){ return x + y; }

document.write(" 5 + 4 = "+ aNumber.add(5, 4));

// Destruction 
document.write("<b>Destruction</b><br /><br />");
var randVals = { x: 1, y:2, z:3};

var {x, y, z} = randVals;