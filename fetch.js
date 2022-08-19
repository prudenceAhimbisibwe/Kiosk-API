function getproducts(){
    fetch('localhost:5000/products')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getproducts()


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



