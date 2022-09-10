// 1. Создать функцию которая будет принимать миллисекунды и вернет true или false
// в зависимости от того сегодня ли то число которое было передано

const someDay = 1662815185419 // переменная в милисекундах для передачи в функцию
console.log(new Date("2021-09-09").getTime())
console.log(new Date().getTime())

function isItToday(milliseconds) {
  if (new Date(milliseconds).getFullYear() === new Date().getFullYear()) {
    if (new Date(milliseconds).getMonth() === new Date().getMonth()) {
      if (new Date(milliseconds).getDate() === new Date().getDate()) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}
console.log(isItToday(someDay))

// 2. Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

function convertDate(milliseconds) {
  return `${new Date(milliseconds).getDate()}.${
    new Date(milliseconds).getMonth() + 1
  }.${new Date(milliseconds).getFullYear()} ${new Date(
    milliseconds
  ).getHours()}:${new Date(milliseconds).getMinutes()}`
}
console.log(convertDate(Date.now()))

// 3. Создать функцию которая принимает миллисекунды и вернет количество времени
// которое прошло или должно пройти с текущего момента.

// создаем переменные в милисекундах для передачи в функцию (в прошлом и в будущем)
const past = 487641600000
const future = 2381097600000

function countTimeFromToday(milliseconds) {
  const period = Date.now() - new Date(milliseconds)
  if (period < 0) {
    return `It will happen in ${(-period / 31536000000).toFixed(0)} years`
  } else if (period > 0) {
    return `It was ${(period / 31536000000).toFixed(0)} years ago`
  } else {
    ;("Just now!")
  }
}
console.log(countTimeFromToday(past))
console.log(countTimeFromToday(future))
