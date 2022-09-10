// 1. Создать функцию которая будет принимать миллисекунды и вернет true или false
// в зависимости от того сегодня ли то число которое было передано

const someDay = 1662815185419; // переменная в милисекундах для передачи в функцию
console.log(new Date("2022-08-24").getTime());
console.log(new Date().getTime());

function isItToday(milliseconds) {
    if (new Date(milliseconds).getFullYear() === new Date().getFullYear()) {
        if (new Date(milliseconds).getMonth() === new Date().getMonth()) {
            if (new Date(milliseconds).getDate() === new Date().getDate()) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log(isItToday(someDay));

// 2. Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

function convertDate(milliseconds) {
    return `${new Date(milliseconds).getDate()}.${new Date(milliseconds).getMonth() + 1}.${new Date(
        milliseconds
    ).getFullYear()} ${new Date(milliseconds).getHours()}:${new Date(milliseconds).getMinutes()}`;
}
console.log(convertDate(Date.now()));

// 3. Создать функцию которая принимает миллисекунды и вернет количество времени
// которое прошло или должно пройти с текущего момента.

// создаем переменные в милисекундах для передачи в функцию (в прошлом и в будущем)
const past1 = 487641600000;
const past2 = 1661299200000;
const past3 = 1640995200000;
const future1 = 2381097600000;
const future2 = 1672444800000;
const future3 = 1663632000000;

function countTimeFromToday(milliseconds) {
    const period = Date.now() - new Date(milliseconds);
    if (period < 0) {
        if (-period / 31536000000 > 1) {
            return `It will happen in ${(-period / 31536000000).toFixed(0)} years`;
        } else if (-period / 2628000000 > 1) {
            return `It will happen in ${(-period / 2628000000).toFixed(0)} mounth`;
        } else {
            return `It will happen in ${(-period / 87600000).toFixed(0)} days`;
        }
    } else if (period > 0) {
        if (period / 31536000000 > 1) {
            return `It was ${(period / 31536000000).toFixed(0)} years ago`;
        } else if (period / 2628000000 > 1) {
            return `It was ${(period / 2628000000).toFixed(0)} mounth ago`;
        } else {
            return `It was ${(period / 87600000).toFixed(0)} days ago`;
        }
    } else {
        return "Just now!";
    }
}
console.log(countTimeFromToday(past1));
console.log(countTimeFromToday(past2));
console.log(countTimeFromToday(past3));
console.log(countTimeFromToday(future1));
console.log(countTimeFromToday(future2));
console.log(countTimeFromToday(future3));
