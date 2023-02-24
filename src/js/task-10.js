// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.



const input = document.querySelector("#controls input");
console.log(input);
console.log(input.value);

const createBoxBtn = document.querySelector("button[data-create]");
console.log(createBoxBtn);

const destroyBoxBtn = document.querySelector("button[data-destroy]");
console.log(destroyBoxBtn);

const boxes = document.querySelector("#boxes");
console.log(boxes);

const inputChange = (event) => {
  input.setAttribute("count", Number(event.currentTarget.value));
  console.log(Number(event.currentTarget.value));
};
input.addEventListener("input", inputChange);

let baseboxSize = 20;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


function createBoxes (amount) {
  amount = Number(input.getAttribute("count"));
  console.log(amount);
  for (let i = 0; i < amount; i += 1) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

createBoxBtn.addEventListener("click", createBoxes);

function destroyBoxes () {
  const allNewBoxes = document.querySelectorAll(".new-box");
  
  for (let allNewBox of allNewBoxes) {
    boxes.removeChild(allNewBox);
  }
 
  input.value = "";
};

destroyBoxBtn.addEventListener("click", destroyBoxes);

