// Создать цепочку классов для создания объектов шиншилл.
// Млекопитающее => грызуны => шиншилловые => шиншиллы
// В каждом классе должны быть методы или свойства которые присущи данной ступени наследования.
// Если есть желание цепочка может быть другая(машины или т.д. главное чтоб была указанная глубина наследования)

class Car {
    constructor() {
        this.wheels = 4;
        this.seats = 5;
    }
    drive(speed) {
        this.speed = speed;
        console.log(`Drive with ${this.speed} km/h`);
    }
    brake() {
        console.log("Stop my ride");
    }
}
const myCar = new Car();
console.log(myCar);

class Tesla extends Car {
    constructor() {
        super();
    }
    electricDrive() {
        console.log("It is eco-friendly engine");
    }
    drive(speed) {
        super.drive(speed);
        this.electricDrive();
    }
}
const myTesla = new Tesla();
console.log(myTesla);
myTesla.drive(100);

class Suv extends Tesla {
    constructor() {
        super();
        this.drivingWheels = 4;
        this.doors = 5;
    }
    offRoadPatency() {
        console.log("I like off-road");
    }
    drive(speed) {
        super.drive(speed);
        this.offRoadPatency();
    }
}
const mySuv = new Suv();
console.log(mySuv);
mySuv.drive(150);

class ModelX extends Suv {
    constructor() {
        super();
        this.seats = 7;
    }
    lamboDoors() {
        console.log("Open doors like wings");
    }
    powerFullEngine(power) {
        console.log(`It is ${power} horse power engine`);
    }
    drive(speed, power) {
        super.drive(speed);
        this.powerFullEngine(power);
    }
    brake() {
        super.brake();
        this.lamboDoors();
    }
}
const myModelX = new ModelX();
console.log(myModelX);
myModelX.drive(200, 500);
myModelX.brake();
