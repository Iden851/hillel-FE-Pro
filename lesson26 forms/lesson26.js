// Создать страницу с полем ввода и кнопкой отправить
// которое будет выводить ниже поля ввода то что "отправил"
// пользователь. Копирование любого из результатов должно
// вернуть не просто скопированный текст но и добавить
// слово "test". Например пользователь ввел "Hello world"
// и нажал на submit кнопку. Ниже поля появилась запись
// "Hello word" при копировании записи в буфер обмена должна
// попасть строка "test Hello world"

// Сделал "контейнер" для сбора полученных сообщений
function getMessage() {
    const inputTaker = input.value;
    messages.innerHTML += inputTaker + "\n";
    input.value = null;
}

// Добавляем "test" только для скопированного текста из контейнера с полученными сообщениями
function customCopy(event) {
    const selection = document.getSelection();
    event.clipboardData.setData("text/plain", "test \n" + selection);
    event.preventDefault();
}
messages.oncopy = customCopy;
