const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length} `);

categoriesItems.forEach(categoryItem => {
const categoryTitle = categoryItem.querySelector('h2').textContent;
const categoryElements = categoryItem.querySelectorAll('li').length;

console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${categoryElements}`);
});