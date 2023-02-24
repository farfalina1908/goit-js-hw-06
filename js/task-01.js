// В HTML есть список категорий ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// __________Var 1_____________________

// const categoriesList = document.querySelector("ul#categories");
// const categoriesItems = categoriesList.querySelectorAll("li.item");
// console.log(`Number og categories: ${categoriesItems.length}`);

// for (const item of categoriesItems) {
//     const categoriesName = item.querySelector("h2").textContent;
//     const categoriesElements = item.querySelectorAll("li").length;
//     console.log(`Category: ${categoriesName}`);
//     console.log(`Elements: ${categoriesElements}`);
// }

// __________Var 2___________________

const categoriesItems = document.querySelectorAll("li.item");
console.log(`Number og categories: ${categoriesItems.length}`);

const list =  document.querySelectorAll('#categories>li');

list.forEach(el => {

    console.log(`Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`,
    );
  });
  

