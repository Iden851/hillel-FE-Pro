// Создать страницу где будет отображен счетчик и кнопки инкремента и декремента этого счетчика.
function counterFunc(count) {
    let up = count.querySelector(".up");
    let down = count.querySelector(".down");
    let number = count.querySelector(".number");
    let numberValue = parseInt(number.value);

    down.addEventListener("click", () => {
        numberValue--;
        number.value = numberValue;
    });

    up.addEventListener("click", () => {
        numberValue++;
        number.value = numberValue;
    });
}

let counts = document.querySelectorAll(".counter");

counts.forEach(counterFunc);

// Получить несколькими способами доступ к элементу с Важной информацией и всем
// элементам с женскими именами.

// выделим цветом "woman"
let woman1 = document.querySelectorAll("ul > li");
for (let elem of woman1) {
    if (elem.dataset.id === "woman") {
        elem.style.background = "lime";
    }
}

// выводим в консоль имена "woman"
let woman2 = document.getElementsByTagName("li");
for (let elem of woman2) {
    if (elem.dataset.id === "woman") {
        console.log(elem.innerHTML);
    }
}

// ищем елемент с "Важной информацией" и выделяем цветом

let impotantInfo = document.querySelectorAll("div");
for (let elem of impotantInfo) {
    if (elem.textContent === "Важная информация") {
        elem.style.background = "grey";
    }
}

// ищем елемент с "Важной информацией" и выводим содержимое в консоль
let impotantInfo1 = document.querySelector("div");
console.log(impotantInfo1.innerHTML);

// ищем елемент с "Важной информацией" и выводим содержимое в консоль
let impotantInfo2 = document.getElementsByTagName("div")[0];
console.log(impotantInfo1.innerHTML);
