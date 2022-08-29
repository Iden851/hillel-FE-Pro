// 1) Что выведет код в консоль?
const user = {
    name: "Bob",
    sayHi: function () {
        console.log(`Hi I am ${this.name}`);
    },
};
user.sayHi(); //Hi I am Bob
const greetingsFunc = user.sayHi;
greetingsFunc(); //Hi I am undefined

const user2 = {
    name: "Jane",
    sayHi: greetingsFunc,
};
user2.sayHi(); // Hi I am Jane
// Ответ: будет три вызова функции, указал комментами какой код выведется при каждом вызове

// 2) Написать функцию-конструктор для создания объектов домашних питомцев

function Animal(name, kind, color) {
    this.name = name;
    this.kind = kind;
    this.color = color;
}
const animal1 = new Animal("Quick", "chinchilla", "black");
const animal2 = new Animal("Chak", "dog", "gold");
console.log(animal1);
console.log(animal2);

// 3) Написать рекурсивное решение для расчет суммы всех символов в числе 152092 => 19

function sumDigits(num) {
    let numStr = `${num}`;
    if (numStr.length == 1) return +numStr;

    return +numStr[0] + sumDigits(numStr.slice(1));
}

console.log(sumDigits(152092));
