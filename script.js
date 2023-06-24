import { products } from "./data.js";

for (let product of products) {
  let card = /*html*/ `
  <div class="card">
    <div class="image-container">
      <img src="${product.image}" /> 
    </div> 
    <div class="container">
      <div class="info">
        <h5>${product.title}</h5> 
        <h6>Price: $${product.price}</h6>
      </div>
      <button>Add to cart</button>
    </div>
  </div>
  `;

  document.getElementById("products").innerHTML += card;
}
