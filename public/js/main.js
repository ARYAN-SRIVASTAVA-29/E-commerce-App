// main.js

// function addToCart(product) {
//     const cart = getCart();
//     const existingProduct = cart.find((item) => item.id === product.id);
  
//     if (existingProduct) {
//       existingProduct.quantity += product.quantity;
//     } else {
//       cart.push(product);
//     }
  
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }
  
//   function getCart() {
//     const cart = localStorage.getItem("cart");
//     return cart ? JSON.parse(cart) : [];
//   }

  

  
//   document.addEventListener("DOMContentLoaded", () => {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
//     addToCartButtons.forEach((button) => {
//       button.addEventListener("click", (event) => {
//         const productId = parseInt(event.target.dataset.productId, 10);
//         const productName = document.querySelector("h4").textContent;
//         const price = document.querySelector("h2").textContent;
//         const quantity = parseInt(document.querySelector("input[type='number']").value, 10);
//         const imageSrc = `/images/zara/p${productId}/a.jpg`;
  
//         const product = {
//           id: productId,
//           name: productName,
//           price: price,
//           quantity: quantity,
//           imageSrc: imageSrc
//         };
  
//         addToCart(product);
//         alert("Product added to cart");
//       });
//     });
//   });
  

//   // main.js



//   function displayCart() {
//     const cartItemsContainer = document.querySelector("#cart tbody");
//     const cartTotalContainer = document.querySelector("#subtotal tr:last-child td:nth-child(2) strong");
//     const cartSubtotalContainer = document.querySelector("#subtotal tr:first-child td:nth-child(2)");

//     if (!cartItemsContainer || !cartTotalContainer) return;

//     const cart = getCart();
//     let cartTotal = 0;

//     cartItemsContainer.innerHTML = "";

//     cart.forEach((item) => {
//         const tr = document.createElement("tr");

//         tr.innerHTML = `
//         <td><a href="#" data-product-id="${item.id}"><i class="fa-solid fa-close"></i></a></td>
//         <td><img src="${item.imageSrc}"></td>
//         <td>${item.name}</td>
//         <td>${item.price}</td>
//         <td><input type="number" value="${item.quantity}"></td>
//         <td>Rs ${(item.price.replace("Rs", "") * item.quantity)}</td>
//         `;

//         cartTotal += item.price.replace("Rs", "") * item.quantity;
//         cartItemsContainer.appendChild(tr);

//         const removeButton = tr.querySelector("a");
//         removeButton.addEventListener("click", event => {
//             event.preventDefault();
//             const productId = parseInt(event.target.closest("a").dataset.productId, 10);
//             removeFromCart(productId);
//             displayCart(); // Refresh the cart display after removing an item
//         });

//         // Add event listener for quantity input change
//         const quantityInput = tr.querySelector("input[type='number']");
//         quantityInput.addEventListener("change", event => {
//             const newQuantity = parseInt(event.target.value, 10);
//             updateCartItemQuantity(item.id, newQuantity);

//             // Update the 6th child element with the new subtotal
//             const price = parseFloat(item.price.replace("Rs", ""));
//             const subtotal = price * newQuantity;
//             tr.children[5].textContent = `Rs ${subtotal}`;

//             // Recalculate and update cart total and subtotal
//             const updatedCart = getCart();
//             cartTotal = updatedCart.reduce((total, cartItem) => {
//                 return total + (parseFloat(cartItem.price.replace("Rs", "")) * cartItem.quantity);
//             }, 0);
//             cartTotalContainer.textContent = `Rs ${cartTotal}`;
//             cartSubtotalContainer.textContent = `Rs ${cartTotal}`;
//         });
//     });

//     cartTotalContainer.textContent = `Rs ${cartTotal}`;
//     cartSubtotalContainer.textContent = `Rs ${cartTotal}`;
// }


// document.addEventListener("DOMContentLoaded", displayCart);

//   function removeFromCart(productId) {
//     const cart = getCart();
//     const updatedCart = cart.filter(item => item.id !== productId);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   }
  

//   function updateCartItemQuantity(productId, newQuantity) {
//     const cart = getCart();
//     const itemToUpdate = cart.find(item => item.id === productId);

//     if (itemToUpdate) {
//         itemToUpdate.quantity = newQuantity;
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }
// }










function addToCart(product) {
  const cart = getCart();
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadge = document.querySelector(".cart-badge");
  const mobileCartBadge = document.querySelector(".mobile-cart-badge");

  [cartBadge, mobileCartBadge].forEach((badge) => {
    if (totalItems > 0) {
      badge.textContent = totalItems;
      badge.style.display = "inline";
    } else {
      badge.style.display = "none";
    }
  });
}




document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.dataset.productId, 10);
      const productName = document.querySelector("h4").textContent;
      const price = document.querySelector("h2").textContent;
      const quantity = parseInt(document.querySelector("input[type='number']").value, 10);
      const imageSrc = `/images/zara/p${productId}/a.jpg`;

      const product = {
        id: productId,
        name: productName,
        price: price,
        quantity: quantity,
        imageSrc: imageSrc
      };

      addToCart(product);
      alert("Product added to cart");
      updateCartBadge();
    });
  });

  updateCartBadge();
});

function displayCart() {
  const cartItemsContainer = document.querySelector("#cart tbody");
  const cartTotalContainer = document.querySelector("#subtotal tr:last-child td:nth-child(2) strong");
  const cartSubtotalContainer = document.querySelector("#subtotal tr:first-child td:nth-child(2)");

  if (!cartItemsContainer || !cartTotalContainer) return;

  const cart = getCart();
  let cartTotal = 0;

  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td><a href="#" data-product-id="${item.id}"><i class="fa-solid fa-close"></i></a></td>
    <td><img src="${item.imageSrc}"></td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td><input type="number" value="${item.quantity}"></td>
    <td>Rs ${(item.price.replace("Rs", "") * item.quantity)}</td>
    `;

    cartTotal += item.price.replace("Rs", "") * item.quantity;
    cartItemsContainer.appendChild(tr);

    const removeButton = tr.querySelector("a");
    removeButton.addEventListener("click", event => {
        event.preventDefault();
        const productId = parseInt(event.target.closest("a").dataset.productId, 10);
        removeFromCart(productId);
        displayCart();
        updateCartBadge();
    });

    const quantityInput = tr.querySelector("input[type='number']");
    quantityInput.addEventListener("change", event => {
        const newQuantity = parseInt(event.target.value, 10);
        updateCartItemQuantity(item.id, newQuantity);

        const price = parseFloat(item.price.replace("Rs", ""));
        const subtotal = price * newQuantity;
        tr.children[5].textContent = `Rs ${subtotal}`;

        const updatedCart = getCart();
        cartTotal = updatedCart.reduce((total, cartItem) => {
          return total + (parseFloat(cartItem.price.replace("Rs", "")) * cartItem.quantity);
        }, 0);
        cartTotalContainer.textContent = `Rs ${cartTotal}`;
        cartSubtotalContainer.textContent = `Rs ${cartTotal}`;
      });
  });

  cartTotalContainer.textContent = `Rs ${cartTotal}`;
  cartSubtotalContainer.textContent = `Rs ${cartTotal}`;
}

document.addEventListener("DOMContentLoaded", displayCart);

function removeFromCart(productId) {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

function updateCartItemQuantity(productId, newQuantity) {
  const cart = getCart();
  const itemToUpdate = cart.find(item => item.id === productId);

  if (itemToUpdate) {
      itemToUpdate.quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
  }
}



