// 1. превратить строку "Hello world" в "Hello World!"

let greetingStr = "Hello world";

console.log(greetingStr.slice(0, 6) + greetingStr.slice(6, 7).toUpperCase() + greetingStr.slice(7) + "!");

// 2. написать цикл который будет логировать тип данных каждого символа строки
// (например "a123" - в итоге должна быть строка "string, number, number. number"
// (Внимание именно в таком формате - иными словами в один ряд))

const someStr = "23 Serpnya";
let i = 0;
while (i < someStr.length) {
    i++;
    let symbol = someStr[i - 1];
    if (+symbol) {
        symbol = "number";
    } else {
        symbol = "string";
    }
    console.log(symbol);
}

for (i = 0; i < someStr.length; i++) {
    let symbol = someStr[i];
    if (+symbol) {
        symbol = "number";
    } else {
        symbol = "string";
    }
    console.log(symbol);
}

// 3. написать цикл который будет на каждое число от 13 и до 3 выводить "odd", "even"
// в зависимости четное или нет число в итерируемой переменной
// Каждый цикл написать как через for так и через while.

for (i = 13; i > 2; i--) {
    if (i % 2) {
        symbolType = "odd";
    } else {
        symbolType = "even";
    }
    console.log(i + " " + symbolType);
}

i = 14;
while (i > 3) {
    i--;
    if (i % 2) {
        symbolType = "odd";
    } else {
        symbolType = "even";
    }
    console.log(i + " " + symbolType);
}
