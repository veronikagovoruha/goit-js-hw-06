const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createList(ingredients){
  const list = ingredients.map((el) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = el;
    return item
  });
  return list;
}
const ingredientList = createList(ingredients);

const ul = document.querySelector("ul#ingredients");
ul.append(...ingredientList)
