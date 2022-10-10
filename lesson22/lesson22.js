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
