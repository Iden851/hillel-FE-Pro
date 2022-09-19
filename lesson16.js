// Создать цепочку прототипов машина => определенная марка машины.
// У итогового инстанса должны быть как функции машины типа ехать и
// тормозить из прототипа так и функции связанные с маркой машины типа вертикального открытия дверей Lamborghini.

const car = {
    drive: () => console.log("start"),
    brake: () => console.log("stop"),
};

// 1. Lamborghini
const lamborghini = {
    sportcar: () => console.log("I'm very fast"),
    lamboDoors: () => console.log("I have a doors like wings"),
};
Object.setPrototypeOf(lamborghini, car);
// проверка
for (let prop in lamborghini) {
    console.log(prop);
    console.log(lamborghini.hasOwnProperty(prop));
}

// 2. Tesla model X (через функцию-конструктор)

function Tesla(model) {
    this.model = model;
    this.electric = () => console.log("I have an eco-friendly engine");
    this.autopilot = () => console.log("I can drive without driver");
}

let modelX = new Tesla.prototype.constructor("modelX");
Object.setPrototypeOf(modelX, car);

// проверка
for (let prop in modelX) {
    console.log(prop);
    console.log(modelX.hasOwnProperty(prop));
}
console.log(modelX);
