// Создать следующие функции:

// 1. объявить переменную выше функции присвоить ей значение и вывести ее значение в функции объявленой ниже

let greeting = "hello";
function sayHi() {
    console.log(greeting);
}
sayHi(); // hello

// 2. объявить переменную выше функции присвоить ей значение,
// объявить функцию ниже и в ней объявить переменную с тем же названием что и выше но с другим значением.
// Залогировать переменную. Какое у нее будет значение то что ниже или выше?

let name = "Jane";
function sayName() {
    let name = "Jenifer";
    console.log(name);
}
sayName(); // Jenifer (приоритет имеет внутренняя переменная)

// 3. Каким будет значение переменной a в консоле. Написать почему.
var a = 10;

function foo() {
    console.log(a);
}

function bar() {
    var a = 20;
    foo();
}

bar();
// Ответ а=10, потому что переменная "а", в функции bar() не вызывается.
// Функция bar() лишь вызывает фукцию foo(), в лексическом окружении которой а = 10, а значение а=20 для функции foo() вообще недоступно.

// 4. Каким будет значение переменной a в консоле. Написать почему

var a = 10;

function foo() {
    var a = 20;

    console.log(a);
}

a = 30;

foo();

// Ответ: а=20. Потому что приоритет имеет переменная внутри функции.
// Значение а=30 присвоено ниже функции foo() и не входит в ее лексическое окружение

// 5. Починить код ниже чтоб он логировал 0,1,2,3,4,5

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}

// 6. Создать функцию которая внутри себя будет реализовывать счетчика.
// Из функции вернуть текущее значение счетчика и функцию чтоб его увеличить.

function getCounter() {
    let counter = 0;

    return function insideCounter() {
        return (counter += 1);
    };
}

let testCounter = getCounter();

console.log(testCounter()); //1
console.log(testCounter()); //2
console.log(testCounter()); //3
console.log(testCounter()); //4
