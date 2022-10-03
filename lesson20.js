// 1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.

function* generateNumbers(min, max) {
    for (let i = 0; i < 10; i++) {
        yield (Math.random() * (max - min) + min).toFixed();
    }
}

let generator = generateNumbers(0, 100);

for (let value of generator) {
    console.log(value);
}

// 2) Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной
// функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции)

async function myChedule(startTime) {
    const wakeUp = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Wake up! It is ${startTime} o\`clock!`), 2000);
    });
    let result1 = await wakeUp;
    console.log(result1);

    const brushTeeth = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Brush your teeth"), 3000);
    });
    let result2 = await brushTeeth;
    console.log(result2);

    const cookBreakfast = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Cook and eat your breakfast"), 4000);
    });
    let result3 = await cookBreakfast;
    console.log(result3);

    const doHomework = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Do your homework"), 5000);
    });
    let result4 = await doHomework;
    console.log(result4);

    const goToBed = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Go to bed!"), 2000);
    });
    let result5 = await goToBed;
    console.log(result5);
    console.log("Good night!");
}

myChedule(7);
