// получаем с сервера имена пользователей
function getUsers() {
    fetch("http://localhost:4000/users")
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            for (elem of users) {
                console.log(elem);
            }
        });
}
getUsers();
