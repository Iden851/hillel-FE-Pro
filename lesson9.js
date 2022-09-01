// Дано - объект user который прийдет к нам с бекенда. Мы в коде хотим использовать user.cart[0].price.
// Что является ценой первого товара из корзины пользователя. Объект пользователя до ответа с бекенда
// нам не известен. Задача - написать код с логированием цены так чтоб код не упал с ошибкой до того как
// бекенд вернет ответ с объектом пользователя.
// Задачу выполнить трема способами.

// Для проверки работы сценария создадим переменную "user", которая не имеет вложенный массив, и переменную "user1",
// которая соответсвует ожидаемому ответу с бекенда
const user = {
    cart: { name: "thing", price: 100 },
};
const user1 = {
    cart: [
        { name: "thing", price: 100 },
        { name: "thing1", price: 200 },
    ],
};

// Способ 1
let i = 0;
try {
    console.log(user.cart[i].price);
    // console.log(user1.cart[i].price); // for "user1" - 100
} catch (error) {
    console.log(error); //for "user" - [TypeError: Cannot read properties of undefined (reading '0')]
}

//Способ 2

if (user && user.cart[i] && user.cart[i].price) {
    console.log(user.cart[i].price);
} else {
    console.log("error"); // error
}

if (user1 && user1.cart[i] && user1.cart[i].price) {
    console.log(user1.cart[i].price); // 100
} else {
    console.log("error");
}

//Способ 3

if (user?.cart[i]?.price) {
    console.log(user.cart[i].price);
} else {
    console.log("error"); // error
}

if (user1?.cart[i]?.price) {
    console.log(user1.cart[i].price); // 100
} else {
    console.log("error");
}
