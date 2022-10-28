// Создать страницу на которой будет две секции для
// создания записи в sessionStorage и в localStorage.
// Записи вывести ниже в двух разных колонках, рядом
// с каждой записью должна быть кнопка удалить эту
// запись из соответствующего хранилища

function setLocalStorage() {
    localStorage.setItem("login", localLogin.value);
    localStorage.setItem("password", localPassword.value);
    const p = document.createElement("p");
    const btn = document.createElement("button");
    readLocalStorage.append(p);
    readLocalStorage.append(btn);
    p.innerHTML = `User: ${localStorage.getItem("login")}`;
    btn.innerHTML = "Log out";
    localLogin.value = null;
    localPassword.value = null;
    localBtn.disabled = true;

    btn.onclick = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("password");
        p.remove();
        btn.remove();
        localBtn.disabled = false;
    };
}

function setSessionStorage() {
    sessionStorage.setItem("login", sessionLogin.value);
    sessionStorage.setItem("password", sessionPassword.value);
    const p = document.createElement("p");
    const btn = document.createElement("button");
    readSessionStorage.append(p);
    readSessionStorage.append(btn);
    p.innerHTML = `User: ${sessionStorage.getItem("login")}`;
    btn.innerHTML = "Log out";
    sessionLogin.value = null;
    sessionPassword.value = null;
    sessionBtn.disabled = true;

    btn.onclick = () => {
        sessionStorage.removeItem("login");
        sessionStorage.removeItem("password");
        p.remove();
        btn.remove();
        sessionLogin.disabled = false;
        sessionBtn.disabled = false;
    };
}
