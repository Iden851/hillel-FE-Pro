// Создать класс(можно взять с прошлого дз) и добавить ему приватных полей
// (например пол шиншиллы явно должен быть защищен от изменения после создания)
// и статических полей ( например адрес шиншиллы, потому что например все
// инстансы будут жить под одной крышей такую информацию можно вынести на уровень класса)

class Car {
    constructor() {
        this.wheels = 4;
        this.seats = 5;
    }
    #saleCountry = "Only for USA"; // авто только для рынка США
    #steeringWheelPosition = "left"; // только левосторонний руль
    static steeringWheel = true; // у любой машины должен быть руль
    // у всех машин при непристегнутом ремне - сигнал пристегнуться
    static seatBelt(boolean) {
        if (!boolean) {
            console.log("Fasten your seat belt!");
        }
    }
    drive(speed) {
        this.speed = speed;
        console.log(`Drive with ${this.speed} km/h`);
    }
    brake() {
        console.log("Stop my ride");
    }
    // скрытый метод для безопасности движения - торзмоз при открытой двери
    #checkOpenDoor(boolean) {
        boolean ? this.brake() : this.drive();
    }
    // не скрытый метод для проверки его работы
    checkOpenDoor1(boolean) {
        boolean ? this.brake() : this.drive();
    }
}

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
// Статические поля
console.log(Tesla.steeringWheel);
console.log(Tesla.seatBelt(false));

// Приватные поля
const myTesla = new Tesla();
console.log(myTesla.saleCountry); // undefined
console.log(myTesla.steeringWheelPosition); // undefined
// console.log(myCar.checkOpenDoor(true)) // error
console.log(myTesla.checkOpenDoor1(true)); // Stop my ride
