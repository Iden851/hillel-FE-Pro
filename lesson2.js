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

// 2) Придумать название для следующих переменных:
// пользователь, супер пользователь, список активных пользователей, активен ли пользователь

let user;
let superUser;
let activeUsersList;
let isActiveUser;

// 3) Создать переменные с массивом чисел(любых), объект с произвольными ключами и значениями,
// строку с типа “Привет мир” где мир это переменная в которой хранится строка мир

let numbersArr = [11, 155, 99, 40, 28]; //массив
let car1 = {
    brand: "Honda",
    model: "Civic",
    volume: 1.8,
    color: "White",
}; //объект

let str = "мир";
console.log("Привет " + str);

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

// 5) Написать условие которое выведет в консоль
// приветствие пользователя в зависимости от его роли(обычный пользователь,
// админ, суперадмин, неавторизированный пользователь) тремя способами: switch, ?, if.

// switch
const swichRole = "User";
switch (swichRole) {
    case "unregistered":
        console.log("Please login");
        break;
    case "User":
        console.log("Hi, User!");
        break;
    case "Admin":
    case "Superadmin":
        console.log("Hi, Admin!");
        break;
    default:
        console.log("default");
}

let isUser = false;
let isAdmin = false;
let isSuperAdmin = false;

// if
if (isAdmin || isSuperAdmin) {
    console.log("Hi, admin");
} else if (isUser) {
    console.log("Hi, user");
} else {
    console.log("Please login");
}

//?
isAdmin || isSuperAdmin ? console.log("Hi, Admin!") : isUser ? console.log("Hi, User!") : console.log("Please login");

// 6) Написать switch условие определения овощ либо фрукт
// (подсказка используйте один код для многих названий овощей либо фруктов)

const fruits = ["lemon", "banana", "apple"];
const vegetables = ["potato", "tomato", "pepper"];

// Enter the number of Item
/*
1. lemon
2. banana 
3. apple
4. potato 
5. tomato
6. pepper 
*/

let numberItem = 2; // тут вводим номер позиции из списка

switch (--numberItem) {
    case 0:
    case 1:
    case 2:
        console.log(fruits[numberItem] + " is a fruit");
        break;

    default:
        console.log(vegetables[numberItem - fruits.length] + " is a vegetable");
}
