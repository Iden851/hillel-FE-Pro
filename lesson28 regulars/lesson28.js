// Написать следующие регулярные выражения:

// 1. Для проверки на валидный номер телефона в формате +3806711222

// Вариант1
function checkFormatPhone() {
    let inputTaker = phoneNumber.value;
    let regexp = /^\+380[5-9]\d{8}$/;

    if (regexp.test(inputTaker)) {
        alert("Правильно!");
        phoneNumber.value = null;
    } else {
        alert("Неверный ввод!");
    }
}

// Вариант2
phoneNumberVar2.onfocus = function () {
    if (this.classList.contains("succesfull")) {
        this.classList.remove("succesfull");
    } else if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
    }
};

phoneNumberVar2.onblur = function () {
    let regexp = /^\+380[5-9]\d{8}$/;

    if (!regexp.test(phoneNumberVar2.value)) {
        this.classList.add("invalid");
    } else {
        this.classList.add("succesfull");
    }
};

// 2. Для того чтоб получить из html кода все строки другими словами
// отфильтровать html теги. Пример: <div>Hello</div><span>world</world>
// должно получится Hello world

inputHtml.onblur = function () {
    let regexp = /<(\/?)([a-z]+)[^>]*(>|$)/gim;
    withoutTags.innerHTML = inputHtml.value.replace(regexp, "" + " ");
};
