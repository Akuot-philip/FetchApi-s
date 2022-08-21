// let fetch = require('node-fetch')
// fetch('http://localhost:5000/products')
// .then(function(response) {
// return response.json();
// })
// .then(function(info) {
// console.log(info);

// let myProducts = document.getElementById('products')
// info.forEach(i => {
// let productsList = document.createElement('li')
// productsList.innerText = `${i.name}`
// myProducts.appendChild(productsList)
// })
// })
// .catch(function(error){
// console.log('error',error);
// });

// fruitList


fetch('http://localhost:5000/products')
.then(function(response) {
return response.json();
})
.then(function(info) {
console.log(info);

let myprdctList = document.getElementById('products');
info.forEach(w => {
let prdctList = document.createElement('li')
prdctList.innerText = `${w.name}`
myprdctList.appendChild(prdctList)
})
})
.catch(function(error){
console.log('error',error);
});




fetch('http://localhost:5000/products/fruits')
.then(function(response) {
return response.json();
})
.then(function(info) {
console.log(info);

let myfruitList = document.getElementById('fruList')
info.forEach(y => {
let fruitList = document.createElement('li')
fruitList.innerText = `${y.name}`
myfruitList.appendChild(fruitList)
})
})
.catch(function(error){
console.log('error',error);
});

// vegList
fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
return response.json();
})
.then(function(info) {
console.log(info);

let myvegList = document.getElementById('vegList');
info.forEach(z => {
let vegList = document.createElement('li')
vegList.innerText = `${z.name}`
myvegList.appendChild(vegList)
})
})
.catch(function(error){
console.log('error',error);
});

// products

