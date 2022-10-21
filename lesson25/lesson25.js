// Создать страницу со следующим функционалом:
// квадрат который можно перемещать по странице с помощью Drag'n'Drop
// при двойному нажатию на квадрат он будет центрироваться по середине экрана

// Центрирование квадрата
const wrapper = document.querySelector("body");
let centeredSquare = document.querySelector("div");
centeredSquare.addEventListener("dblclick", () => {
    wrapper.classList.toggle("center");
});

// Перемещение квадрата
square.addEventListener("mousedown", (event) => {
    let shiftX = event.clientX - square.getBoundingClientRect().left;
    let shiftY = event.clientY - square.getBoundingClientRect().top;

    square.style.position = "absolute";
    square.style.zIndex = 1000;
    document.body.append(square);

    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        square.style.left = pageX - shiftX + "px";
        square.style.top = pageY - shiftY + "px";
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener("mousemove", onMouseMove);
    square.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        square.onmouseup = null;
    };
});

square.ondragstart = function () {
    return false;
};
