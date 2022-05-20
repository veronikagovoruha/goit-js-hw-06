const categoryItems = document.querySelectorAll('#categories .item');
console.log("Number of categories: " + categoryItems.length);

for(let item of categoryItems){
    console.log("Category: " + item.querySelector("h2").textContent);
    console.log("Elements: " + item.querySelectorAll("li").length);
}