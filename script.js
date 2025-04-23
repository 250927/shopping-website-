const products = [
  { id: 1, name: "Red Shirt", price: 29.99 },
  { id: 2, name: "Blue Jeans", price: 49.99 },
  { id: 3, name: "Sneakers", price: 79.99 }
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();

  const productList = document.getElementById("product-list");
  if (productList) {
    productList.innerHTML = products.map(product => `
      <div class="product">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>`
    ).join("");
  }

  const cartItems = document.getElementById("cart-items");
  if (cartItems) {
    cartItems.innerHTML = cart.map(item => `
      <div class="product">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
      </div>`
    ).join("");
  }
});

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartUI();
  alert(`${product.name} added to cart!`);
}

function updateCartUI() {
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = cart.length);
}