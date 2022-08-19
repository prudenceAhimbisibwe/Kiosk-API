const { METHODS, get } = require("http");

function getproducts(){
    fetch('localhost:5000/products')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getproducts();

function getfruits() {
    fetch('localhost:5000/products/fruits')
    .then((response)=> response.json())
    let FruitListCategory = products.find(product.category == 'fruits')
    return FruitListCategory
    .then ((FruitListCategory) => console.log(FruitListCategory))
}
getfruits();


function getVegitables() {
    fetch('localhost:5000/products/vegetables')
    .then((response)=> response.json())
    let VegListCategory = products.find(product.category == 'vegetables')
    return VegListCategory
    .then ((VegListCategory) => console.log(VegListCategory))
}
getVegitables();


// let products = [];

// fetchproducts();

// function fetchproducts() {
//   fetch('https://jsonplaceholder.typicode.com/products')
//     .then(response => response.json())
//     .then(json => products = json)
//     .then(() => {
//       for (let item of products) {
//         toAppend.innerHTML += `
// <div class="card">
// <p>${item.id}</p>
// </div>
// `;
//       }
//     });


