const categoryItems = document.querySelectorAll("#categories .item");
console.log("Number of categories: " + categoryItems.length);

const result = Array.from(categoryItems)
  .map((item) => {
    return `Category: ${item.querySelector("h2").textContent}; Elements: ${
      item.querySelectorAll("li").length
    }`;
  })
  .join("\n");

console.log(result);
