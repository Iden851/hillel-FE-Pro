// Создать функции с следующим функционалом:

// 1. для смены регистра всех слов в строке - hello world - Hello World

function upperCaseFirstLetter(text) {
    const textArr = text.split(" ");
    const upperCaseArr = textArr.map((elem) => {
        let upperElem = elem.charAt(0).toUpperCase() + elem.slice(1, elem.length);
        return upperElem;
    });
    let result = upperCaseArr.join(" ");
    return result;
}

console.log(upperCaseFirstLetter("hello world"));

// 2. вернуть массив из длинны строк ['hi', '', 'wow', null, ['I am not a string you are looking for], 'I am', 123 ] должно выйти [2,3,4]

function lenghtOfWords(...array) {
    let result = [];

    array.forEach((elem) => {
        if (typeof elem === "string" && elem.length) {
            console.log(elem);
            result.push(elem.length);
        }
    });

    return result;
}
console.log(lenghtOfWords("hi", "", "wow", null, ["I am not a string you are looking for"], "I am", 123));

// 3. вернуть количество гласных в строке 'Hello world' => 3

function countVowels(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for (let char of string.toLowerCase()) {
        if (vowels.includes(char)) {
            counter += 1;
        }
    }
    return counter;
}

console.log(countVowels("Hello world"));

// 4. создавать объект в зависимости от переданного вида createUser('admin', Bob') => {role: 'admin', name: 'Bob },
// createUser('user', Alice') => {role: 'user', name: 'Alice }

function createUser(role, name) {
    const newUser = {
        role: role,
        name: name,
    };
    return newUser;
}
console.log(createUser("admin", "Bob"));

// 5. должна принимать 'aabbbccccd' и возвращать '2a3b4c1d'

function transformString(str) {
    let result = "";
    let strToArr = str.split("");
    console.log(strToArr);
    let count = {};

    for (let elem of strToArr) {
        if (count[elem] === undefined) {
            count[elem] = 1;
        } else {
            count[elem]++;
        }
    }
    console.log(count);
    for (let key in count) {
        result += count[key] + key;
    }
    return result;
}

console.log(transformString("aabbbccccd"));

// 6. вернуть строкой количество четных и нечетных чисел [1,2,3,4,NaN, 0, 5, 10]

function countOddAndEven(array) {
    let odd = 0;
    let even = 0;
    let result = "";

    array.forEach((elem) => {
        if (typeof elem === "number" && elem % 2) {
            odd += 1;
        } else if (typeof elem === "number" && elem % 2 === 0) {
            even += 1;
        }
    });
    result = `${odd} odd and ${even} even numbers`;
    return result;
}
console.log(countOddAndEven([1, 2, 3, 4, NaN, 0, 5, 10]));

// 7. конвертация валют переданное кол-во гривен в переданную валюту - convert('US', 1000) - вернуть число 27.32

function convertToDollarOrEuro(currency, amount) {
    const dollar = 36.6;
    const euro = 36.9;
    let result;
    if (currency === "US") {
        result = (amount / dollar).toFixed(2);
    } else if (currency === "EU") {
        result = (amount / euro).toFixed(2);
    } else {
        result = "no exchange";
    }
    return result;
}

console.log(convertToDollarOrEuro("US", 1000));

// 8. вернуть строку с пробелами между каждым символом 'hello world' => 'h e l l o w o r l d'

function breakIntoLetters(string) {
    let strToArr = string.split("");
    let breakedString = strToArr.join(" ");

    return breakedString;
}

console.log(breakIntoLetters("hello world"));

// 9. вернуть количество часов принимая количество лет getSeconds('5 years') => 43800

function getHours(years) {
    let result = parseInt(years) * 365 * 24;
    return result;
}

console.log(getHours("5 years"));

// 10. обрезать слишком длинную строку trim('hello world', 3) => 'hel...'

function trimString(string, length) {
    let result = `${string.substr(0, length)}...`;
    return result;
}

console.log(trimString("hello world", 3));
