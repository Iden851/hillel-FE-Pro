// Создать сервер с помощью Express или Node.JS который бы по
// роуту http://localhost:4000/users отдавал захардкодженный
// массив пользователей.

const express = require("express");
const app = express();
const port = 4000;
const users = ["Bob", "Helen", "Ann", "Dilan"];

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
