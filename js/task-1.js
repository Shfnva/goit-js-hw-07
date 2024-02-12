const categoryList = document.getElementById("categories");

const categoryItems = categoryList.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;

  const categoryItemCount = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemCount}`);
});
