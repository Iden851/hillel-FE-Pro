const starWarCharacters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        films: ["2", "6", "3", "1", "7"],
    },
    {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        films: ["1", "2", "3", "4", "5", "6"],
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
        films: ["1", "2", "3", "6"],
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female",
        films: ["1", "2", "3", "6"],
    },
    {
        name: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male",
        films: ["1", "2", "3", "4", "5", "6"],
    },
];

// 1. Вывести массив гендеров

const genderCharacters = starWarCharacters.filter((elem) => {
    if (elem.gender === "male" || elem.gender === "female") {
        return elem;
    }
});
console.log(genderCharacters);

// 2. Найти персонажа(жей) которые снялись в найбольшем количестве фильмов

let maxFilmsChar = starWarCharacters.reduce((acc, curr) => {
    return acc.films.length < curr.films.length ? curr : acc;
}); // нашли персонаж с максимальным числом фильмов

const mostStarredCharacters = [];
starWarCharacters.filter((elem) => {
    if (elem.films.length === maxFilmsChar.films.length) {
        mostStarredCharacters.push(elem.name);
    }
});
console.log(mostStarredCharacters); //[ 'C-3PO', 'Obi-Wan Kenobi' ]

// 3. Найти самого тяжелого по весу персонажа

const heaviestCharacter = starWarCharacters.reduce((acc, curr) => {
    return parseInt(acc.mass) < parseInt(curr.mass) ? curr : acc;
});
console.log(heaviestCharacter);

// 4. Вывести фильмы в которых присутствовали все персонажи массива

let numberOfCharacters = starWarCharacters.length;
console.log(numberOfCharacters);

let allFilms = [];
starWarCharacters.forEach((elem) => {
    allFilms += elem.films + ",";
});
let allFilmsArr = allFilms.split(",");

console.log(allFilmsArr);

function counterFilms(arr, copies) {
    let map = new Map();
    for (let elem of arr) {
        let counter = map.get(elem);
        map.set(elem, counter ? counter + 1 : 1);
    }
    let res = [];
    for (let [elem, counter] of map.entries()) if (counter >= copies) res.push(elem);
    return res;
}
let filmsWithAllChar = counterFilms(allFilmsArr, numberOfCharacters);
console.log(filmsWithAllChar);

// 5. Удалить всех персонажей из исходного массива сделав его пустым

starWarCharacters.splice(0);
console.log(starWarCharacters);
