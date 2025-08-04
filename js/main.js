const cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartCount();

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const product = {
        id: this.dataset.id,
        name: this.dataset.name,
        price: parseInt(this.dataset.price),
        img: this.dataset.img,
        quantity: 1
      };

      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${product.name} added to cart`);
    });
  });

  function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) badge.textContent = count;
  }
  window.onload = function () {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const container = document.getElementById("productContainer");

  if (products.length === 0) {
    container.innerHTML = "<p>No products available.</p>";
    return;
  }

  products.forEach((product, index) => {
    const productCard = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.name}" />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹${product.price}</p>
            <a href="#" class="btn btn-outline-primary add-to-cart"
              data-id="${index}"
              data-name="${product.name}"
              data-price="${product.price}"
              data-img="${product.image}"
            >Add to Cart</a>
          </div>
        </div>
      </div>`;
    container.innerHTML += productCard;
  });
};


