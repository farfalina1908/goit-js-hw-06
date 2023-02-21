const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingredients");

const listItems = ingredients.map(ingredient => {
const li = document.createElement("li");
li.textContent = ingredient;
li.classList.add("item"); 
return li;
})
.reduce((acc, li) => {
acc.append(li);
return acc;
});

list.append(listItems);