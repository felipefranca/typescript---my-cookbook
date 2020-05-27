var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myName = "Felipe";
var myAge = 29;
var canVote = true;
var anything = "dog";
anything = 2;
document.getElementById("tsStuff").innerHTML = "My name is " + myName + " and my age is " + myAge;
// typeof
document.write("<b>Tyoeof</b><br /><br />");
document.write("my name is a " + typeof (myName) + " <br />");
document.write("my age is a " + typeof (myAge) + " <br />");
document.write("my canvote is a " + typeof (canVote) + " <br />");
document.write("my anything is a " + typeof (anything) + " <br />");
// converting types
document.write("<b>Converting Types</b><br /><br />");
var strToNum = parseInt("5");
var numToStr = 5;
document.write("numToStr is a " + typeof (numToStr.toString()) + " <br />");
var PI = 3.14159;
// interfaces
document.write("<b>Interfaces</b><br /><br />");
var superMan = {
    realName: "Clark Kent",
    superName: "Superman"
};
document.write(superMan.realName + " is " + superMan.superName + "<br />");
// arrays os string
document.write("<b>Arrays Strings</b><br /><br />");
var employees = ["Bob", "Fil", "Sam"];
employees.push("Marcos");
document.write(employees.toString() + "<br />");
var superHeros = [];
superHeros.push({
    realName: 'Bruce Wayne',
    superName: 'Bataman'
});
document.write(superHeros[0].realName + " is " + superHeros[0].superName + "<br />");
//Maths
document.write("<b>Maths</b><br /><br />");
document.write("5 + 4 = " + (5 + 4) + "<br />");
document.write("5 - 4 = " + (5 - 4) + "<br />");
document.write("5 * 4 = " + (5 * 4) + "<br />");
document.write("5 % 4 = " + (5 % 4) + "<br />");
document.write("5 / 4 = " + (5 / 4) + "<br />");
document.write("5 + String 2 = " + (5 + '2') + "<br />");
// incremetes
document.write("<b>Increments</b><br /><br />");
var randNumber = 1;
document.write("randNumber++ = " + (randNumber++) + "<br />");
document.write("++randNumber = " + (++randNumber) + "<br />");
document.write("randNumber-- = " + (randNumber--) + "<br />");
document.write("--randNumber = " + (--randNumber) + "<br />");
// scopes
document.write("<b>Scopes</b><br /><br />");
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write("sampLet : " + sampLet + " <br />");
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampVar : " + sampVar + " <br />");
// Looping
document.write("<b>Looping</b><br /><br />");
var randArray = [6, 6, 7, 8];
for (var val in randArray) {
    document.write(val + "<br />");
}
var strArray = randArray.map(String);
for (var val in strArray) {
    document.write(val + "<br />");
}
// Functions
document.write("<b>Functions</b><br /><br />");
var getSun = function (num1, num2, num3) {
    return num1 + num2 + num3;
};
var theSun1 = getSun(2, 2, 2);
document.write("Sum(2,2,2) = " + theSun1 + "<br />");
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write("5 - 2 = " + getDiff(5) + "<br />");
document.write("5 - 2 - 3 = " + getDiff(5, 2, 3) + "<br />");
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("sunAll(2,4,6,8,10) = " + sum + "<br />");
};
sumAll(2, 4, 6, 8, 10);
var addOne = function (x) { return x + 1; };
document.write("1 + 1 = " + addOne(1) + "<br />");
// Classes
document.write("<b>Classes</b><br /><br />");
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned " + this.owner + " <br />");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot weight is " + spot.weight + "<br />");
document.write("# of animals is " + Animal.howManyAnimals() + "<br />");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
document.write("# of animals is " + Animal.howManyAnimals() + "<br />");
document.write("Is a Dog an Animal :  " + (grover instanceof Animal) + "<br />");
document.write("Does groover have a name : " + ('name' in grover) + "<br />");
// Interfaces
document.write("<b>Interfaces</b><br /><br />");
var Car = /** @class */ (function () {
    function Car(wheel) {
        this.wheel = wheel;
    }
    Car.prototype.drive = function () {
        document.write("The car drives with " + this.wheel + " wheels <br />");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheel) {
        this.wheel = wheel;
    }
    Bicycle.prototype.drive = function () {
        document.write("The bicycle drives with " + this.wheel + " wheels <br />");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
// Generic Functions
document.write("<b>Generic Functions</b><br /><br />");
function GetType(val) {
    return typeof (val);
}
var aStr = "A String ";
var aNum = 10;
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");
// Generic Classes
document.write("<b>Generic Classes</b><br /><br />");
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
document.write(" 5 + 4 = " + aNumber.add(5, 4));
// Destruction 
document.write("<b>Destruction</b><br /><br />");
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
