let cart = [];

// Add to Cart
function addToCart(product) {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalQuantity + 1 > 100) {
        console.log("Cannot add more than 100 items to the cart.");
        return;
    }
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Remove from Cart
function removeFromCart(productId, quantity) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        const product = cart[productIndex];
        product.quantity -= quantity;
        if (product.quantity <= 0) {
            cart.splice(productIndex, 1);
        }
    }
    updateCart();
}

// Calculate Total Price
function calculateTotalPrice() {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

// Calculate Average Price
function calculateAveragePrice() {
    if (cart.length === 0) return 0;
    const totalPrice = calculateTotalPrice();
    return (totalPrice / cart.length).toFixed(2);
}

// Filter Products
function filterProducts(maxPrice) {
    const filteredCart = cart.filter(product => product.price <= maxPrice);
    displayCart(filteredCart);
}

// Sort Cart
function sortCart(order) {
    if (order === 'asc') {
        cart.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
        cart.sort((a, b) => b.price - a.price);
    }
    updateCart();
}

// Clear Cart
function clearCart() {
    cart = [];
    console.log("Your cart is empty");
    updateCart();
}

// Update Cart
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        const quantityOptions = Array.from({ length: product.quantity }, (_, i) => i + 1)
            .map(qty => `<option value="${qty}">${qty}</option>`).join('');
        li.innerHTML = `
            <div class="cart-item-details">
                ${product.name} - ₹${product.price} x ${product.quantity}
            </div>
            <div class="cart-item-actions">
                <select class="dropdown" id="remove-quantity-${product.id}">
                    ${quantityOptions}
                </select>
                <button onclick="handleRemove(${product.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').innerText = calculateTotalPrice();
    document.getElementById('average-price').innerText = calculateAveragePrice();
}

// Helper function to handle the remove button click
function handleRemove(productId) {
    const quantity = parseInt(document.getElementById(`remove-quantity-${productId}`).value, 10);
    removeFromCart(productId, quantity);
}

// Display Cart
function displayCart(filteredCart) {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    filteredCart.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        const quantityOptions = Array.from({ length: product.quantity }, (_, i) => i + 1)
            .map(qty => `<option value="${qty}">${qty}</option>`).join('');
        li.innerHTML = `
            <div class="cart-item-details">
                ${product.name} - ₹${product.price} x ${product.quantity}
            </div>
            <div class="cart-item-actions">
                <select class="dropdown" id="remove-quantity-${product.id}">
                    ${quantityOptions}
                </select>
                <button onclick="handleRemove(${product.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(li);
    });
    const totalPrice = filteredCart.reduce((total, product) => total + product.price * product.quantity, 0);
    const averagePrice = filteredCart.length > 0 ? (totalPrice / filteredCart.length).toFixed(2) : 0;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('average-price').innerText = averagePrice;
}
