// Создать страницу на которой будет кнопка которая будет делать активной или неактивной в зависимости
// от прошлого состояния другую кнопку(названия кнопок значения не имеют, оформление задизейбленной кнопки
// также на Ваше усмотрение).

let saveButton = document.querySelectorAll(".save");
let activatorButton = document.querySelectorAll(".activator");

for (elem of activatorButton) {
    elem.addEventListener("click", () => {
        for (elem1 of saveButton) {
            elem1.disabled = !elem1.disabled;
        }
    });
}
for (elem of saveButton) {
    elem.addEventListener("click", () => {
        alert("Документ сохранен");
    });
}

// Вывести на страницу общее кол-во кликов левой и правой клавишей мыши(оформление на Ваше усмотрение)
function counterFunc(count) {
    let left = count.querySelector(".left");
    let right = count.querySelector(".right");
    let leftValue = parseInt(left.value);
    let rightValue = parseInt(right.value);

    left.addEventListener("click", () => {
        leftValue++;
        left.value = leftValue;
    });

    right.addEventListener("contextmenu", () => {
        rightValue++;
        right.value = rightValue;
    });
}

let counts = document.querySelectorAll(".count");

counts.forEach(counterFunc);

// Создать смущающийся квадрат - в обычном состоянии он будет с синим background но при наведении на
// него мыши будет красный(сделать JSом)

let square = document.querySelector(".square");

square.addEventListener("mouseover", () => {
    square.style.background = "red";
});
square.addEventListener("mouseout", () => {
    square.style.background = "blue";
});
