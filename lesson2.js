// 1) Создать переменные const и let с своим именем. Изменить свое имя на любое другое.
const myName = {
    name: "Denys",
};
myName.name = "John";
console.log(myName);

let mySurname = "Ivanov";
mySurname = "Doe";
console.log(mySurname);

console.log(myName.name + " " + mySurname);

// 4) Написать результат выражений:

// 1. 10 < 3
console.log(10 < 3); // false

// 2. ‘hi’ != ‘hello’
console.log("hi" != "hello"); // true

// 3. 1 == ‘1’
console.log(1 == "1"); // true

// 4. null == ‘null’
console.log(null == "null"); // false

// 5. null === undefined
console.log(null === undefined); // false

// 6. 1 === 1 && ‘hi’
console.log(1 === 1 && "hi"); // hi

// 7. true && ‘I love js’
console.log(true && "I love js"); // I love js

// 8. 123 && ‘hi’ || ‘hello’
console.log((123 && "hi") || "hello"); // hi

// 9. 0+ ? true : false
// при таком синтаксисе "+ ?" выдаст ошибку, false

// 10. 1 + 1
console.log(1 + 1); // 2

// 11. '12' + '31'
console.log("12" + "31"); // 1231

// 12. 3 / '3'
console.log(3 / "3"); // 1

// 13. 10 * 'hello'
console.log(10 * "hello"); // NaN

// 14. '13'++
let p14 = "13";
console.log(p14++); // 13

// 15. ++13
let p15 = 13;
console.log(++p15); //14
