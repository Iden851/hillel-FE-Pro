// Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня например
//  (brushTeeth.then(() => dosmthelse.then(())

const wakeUp = new Promise((resolve, reject) => {
    let time = 7;
    setTimeout(() => resolve(time), 1000);
});

wakeUp
    .then((time) => {
        console.log(`Brush teeth at ${time} o\`clock`);
        return time + 1;
    })
    .then((time) => {
        console.log(`Go to work at ${time} o\`clock`);
        return time + 10;
    })
    .then((time) => {
        console.log(`Go home at ${time} o\`clock`);
        return time + 1;
    })
    .then((time) => {
        console.log(`Do my homework at ${time} o\`clock`);
        return time + 2;
    })
    .then((time) => {
        console.log(`Go to bed at ${time} o\`clock`);
        return time;
    })
    .finally(() => console.log("Good night!"));
