// 1. Создать функцию которая будет принимать имя пользователя и время через которое он
// хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате
// например '10 minutes' , '20 seconds', '1 hour', '2 hours'

function greetingFunc(name, time) {
    const [value, type] = time.split(" ");
    let timeOut;
    switch (type) {
        case "seconds":
            timeOut = +value * 1000;
            break;

        case "minutes":
            timeOut = +value * 60 * 1000;
            break;

        case "hour":
            timeOut = +value * 60 * 60 * 1000;
            break;

        default:
            break;
    }
    function sayHi() {
        return `Hi, ${name}!`;
    }
    // setTimeout(sayHi, timeOut);
    return sayHi();
}
console.log(greetingFunc("Den", "5 seconds"));

// 2. Создать функцию которая будет или сериализировать или десериализировать объект в зависимости
// от того в какой форме он был передан

// создадим объект и сериализованный в строку объект, а также число для проверки работы функции
let someObject = {
    name: "John",
    age: 30,
};
let someStr = JSON.stringify(someObject);
let someNumber = 12345;

function jsonConverter(arg) {
    if (typeof arg === "string") {
        return JSON.parse(arg);
    } else if (typeof arg === "object") {
        return JSON.stringify(arg);
    } else {
        return "Wrong data";
    }
}
console.log(typeof jsonConverter(someStr));
console.log(typeof jsonConverter(someObject));
console.log(jsonConverter(someNumber));

// 3. Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку

let jsonString = someStr; // возьмем json-строку из задачи N2
let simpleString = "some text";

function isJson(arg) {
    try {
        JSON.parse(arg);
    } catch (err) {
        return false;
    }
    return true;
}
console.log(isJson(jsonString));
console.log(isJson(simpleString));
