// 1) Избавится от неуникальных элементов массива

const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];
const mySet = new Set(numbersArray);
const arrWithoutDoubles = Array.from(mySet);
console.log(arrWithoutDoubles);

// 2) Создать Map который будет по переданному объекту возвращать строку привествия

// greetUser(userBob) // Hello Bob nice to see you
// greetUser(userJane) // How your kids doing Jane?
// Иными словами создать Map где ключ это будет объект а значение строка

const userBob = { name: "Bob" };
const userJane = { name: "Jane" };

let greetUser = new Map([
    [userBob, `Hello ${userBob.name} nice to see you`],
    [userJane, `How your kids doing ${userJane.name}`],
]);
console.log(greetUser.get(userBob));
console.log(greetUser.get(userJane));

// 3) Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.
let myObject = {
    name: "John",
    age: 30,
};

let myMap = new Map();
myMap.set("banana", 1);
myMap.set("orange", 2);
myMap.set("meat", 4);

function convertMapWithObj(data) {
    let result;
    if (data.size >= 0) {
        result = Object.fromEntries(data);
    } else {
        result = new Map(Object.entries(data));
    }
    return result;
}
console.log(convertMapWithObj(myObject));
console.log(convertMapWithObj(myMap));
