const usersArray = [
    {
        name: "John",
        balance: "2000$",
        friends: [
            {
                name: "Robert",
                balance: "1000$",
            },
            {
                name: "Kate",
                balance: "0$",
            },
        ],
    },
    {
        name: "Isaac",
        balance: "20000$",
        friends: [
            {
                name: "Bob",
                balance: "2000$",
            },
            {
                name: "Robert",
                balance: "150000$",
            },
        ],
    },
    {
        name: "Jane",
        balance: "200$",
        friends: [
            {
                name: "Kate",
                balance: "5000$",
            },
            {
                name: "Anne",
                balance: "1234$",
            },
            {
                name: "Bob",
                balance: "300$",
            },
        ],
    },
    {
        name: "Russell",
        balance: "100$",
        friends: [],
    },
];

// 1) Вывести имя самого богатого пользователя

const richUser = usersArray.reduce((acc, curr) => {
    return acc.balance < curr.balance ? curr : acc;
});
const richUserName = richUser.name;
console.log(richUserName); // Isaac

// 2) Отсортировать пользователей по имени в алфавитном порядке

usersArray.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log(usersArray);

// 3) Вывести общий баланс пользователей

let allUserMoney = 0;
usersArray.forEach((elem) => (allUserMoney += parseInt(elem.balance)));
console.log(allUserMoney); // 22300

// 4) Удалить пользователя Russell

usersArray.pop();
console.log(usersArray);

// 5) Удалить пользователя Isaac
for (i = 0; i < usersArray.length; i++) {
    if (usersArray[i].name === "Isaac") {
        usersArray.splice(i, 1);
    }
}
console.log(usersArray);

// 6) Добавить пользователя Harry после John
for (i = 0; i < usersArray.length; i++) {
    if (usersArray[i].name === "John") {
        usersArray.splice(i + 1, 0, { name: "Harry", balance: "1000$" });
    }
}
console.log(usersArray);

// 7) Добавить пользователя Conor в конец массива
usersArray.push({ name: "Conor", balance: "100$" });
console.log(usersArray);

// 8) Вывести массив всех пользователей включая друзей без повторения

const arrFriends = usersArray.map((fr) => fr.friends);
arrFriends.flat();
const arrAllUsers = usersArray.concat(arrFriends.flat());
console.log(arrAllUsers);

// 9) Вывести массив пользователей у которых баланс больше 2000$

let richUsers = [];
usersArray.map((elem) => {
    if (parseInt(elem.balance) > 200) {
        richUsers = elem;
    }
    return richUsers;
});
console.log(richUsers);

// 10) Вывести имя самого богатого пользователя(включая друзей)

const richFriend = usersArray.reduce((acc, curr) => {
    let richestInside = acc;
    if (acc.friends?.length) {
        acc.friends.forEach((friend) => {
            if (parseInt(friend.balance) > parseInt(acc.balance)) {
                richestInside = friend;
            }
        });
    }

    const friendOrUser = parseInt(curr.balance) < parseInt(richestInside.balance) ? richestInside : curr;
    return parseInt(acc.balance) < parseInt(friendOrUser.balance) ? friendOrUser : acc;
});

console.log(richFriend);

// 11) Найти пользователей с общими друзьями

const usersWithGeneralFriends = [];
let generalFriend;
usersArray.forEach((elem) => {
    if (elem.friends?.length) {
        elem.friends.forEach((friend) => {
            let someFriend = friend.name;
            if (someFriend === friend.name) {
                generalFriend = someFriend;
            }
        });
        usersWithGeneralFriends.push(elem.name);
    }
});
console.log(generalFriend); // Kate
console.log(usersWithGeneralFriends); // 'Jane', 'John'

// 12) Вывести одинаковы ли массивы

const arr1 = [10, "a", "5", 5, 1];
const arr2 = [10, "a", 5, 5, 1];
let isEqual = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
console.log(isEqual); // false

// 13) вывести true или false в зависимости является ли строка палиндромом "искать такси", "привет мир"

let str1 = "искать такси";
let str3 = "привет мир";
let str2 = str1.split(" ").join("");
let str4 = str3.split(" ").join("");
for (i = 0; i < str2.length; i++) {
    if (str2.charAt(i) === str2.charAt(str2.length - 1 - i)) {
        result1 = "true";
    } else {
        result1 = "false";
    }
}
for (i = 0; i < str4.length; i++) {
    if (str4.charAt(i) === str4.charAt(str4.length - 1 - i)) {
        result2 = "true";
    } else {
        result2 = "false";
    }
}
console.log(result1); // true
console.log(result2); // false
