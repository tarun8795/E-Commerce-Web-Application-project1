const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

const productContainer = document.getElementById("product-container");

if (productContainer) {
  fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(products => {
      products.forEach(product => {
       productContainer.innerHTML += `
  <div class="pro" onclick="viewProduct('${product._id}')">
    <img src="${product.image}">
    <h5>${product.name}</h5>
    <h4>$${product.price}</h4>

    <a href="javascript:void(0)" 
       onclick="event.stopPropagation(); addToCart('${product.name}', ${product.price}, '${product.image}')">
       <i class="fa fa-shopping-cart"></i>
    </a>
  </div>
`;
      });
    })
    .catch(err => console.error("Error loading products:", err));
}

function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find((item) => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, image, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const image = btn.dataset.image;

    addToCart(name, price, image);
  });
});






function viewProduct(id) {
  window.location.href = `sproduct.html?id=${id}`;
}




// ==============================
// GET PRODUCT ID FROM URL
// ==============================
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let currentProduct = null;

// ==============================
// FETCH PRODUCT FROM BACKEND
// ==============================
if (productId) {
  fetch(`http://localhost:5000/api/products/${productId}`)
    .then(res => res.json())
    .then(product => {
      currentProduct = product;

      // SET DATA TO UI
      document.getElementById("MainImg").src = product.image;
      document.getElementById("product-name").innerText = product.name;
      document.getElementById("product-price").innerText = "$" + product.price;
      document.getElementById("product-brand").innerText = product.brand;
    })
    .catch(err => console.error("Error:", err));
}

// ==============================
// ADD TO CART BUTTON
// ==============================
const addBtn = document.getElementById("add-to-cart-btn");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    if (!currentProduct) {
      alert("Select a product first!");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === currentProduct.name);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        qty: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(currentProduct.name + " added to cart!");
  });
}
// ==============================
// SMALL IMAGE CLICK FUNCTION
// ==============================
const smallImgs = document.querySelectorAll(".small-img");

smallImgs.forEach(img => {
  img.addEventListener("click", () => {

    const newId = img.dataset.id;

    if (newId) {
      fetch(`http://localhost:5000/api/products/${newId}`)
        .then(res => res.json())
        .then(product => {

          currentProduct = product;

          document.getElementById("MainImg").src = product.image;
          document.getElementById("product-name").innerText = product.name;
          document.getElementById("product-price").innerText = "$" + product.price;
          document.getElementById("product-brand").innerText = product.brand;
        });
    }
  });
});




