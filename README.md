********************************************************************************************************************************************
json Dummy 

[
  {
    "id": 1,
    "name": "Product 1",
    "price": 100,
    "image": "path/to/image1.jpg"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 150,
    "image": "path/to/image2.jpg"
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 200,
    "image": "path/to/image3.jpg"
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 250,
    "image": "path/to/image4.jpg"
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 300,
    "image": "path/to/image5.jpg"
  }
]



***********************************************************************************************************************************************************************************************************
1. Initialize an empty cart array

2. Define function loadProducts
    a. Fetch products.json
    b. Parse response as JSON
    c. Call displayProducts with parsed products

3. Define function displayProducts(products)
    a. For each product in products
        i. Create a product card element
        ii. Set product image, name, price
        iii. Add "Add to Cart" button with event listener
        iv. Append product card to product list container

4. Define function addToCart(product)
    a. Calculate total quantity of items in cart
    b. If total quantity + 1 > 100
        i. Log "Cannot add more than 100 items to the cart."
        ii. Return
    c. Check if product is already in cart
        i. If yes, increment its quantity
        ii. If no, add product to cart with quantity 1
    d. Call updateCart

5. Define function removeFromCart(productId, quantity)
    a. Find product in cart by productId
    b. If product exists
        i. Decrement product quantity by given quantity
        ii. If quantity <= 0, remove product from cart
    c. Call updateCart

6. Define function calculateTotalPrice
    a. Return sum of product price * quantity for all products in cart

7. Define function calculateAveragePrice
    a. If cart is empty, return 0
    b. Calculate total price using calculateTotalPrice
    c. Return total price divided by number of items in cart, formatted to 2 decimal places

8. Define function filterProducts(maxPrice)
    a. Filter cart for products with price <= maxPrice
    b. Call displayCart with filtered products

9. Define function sortCart(order)
    a. If order is 'asc', sort cart by price ascending
    b. If order is 'desc', sort cart by price descending
    c. Call updateCart

10. Define function clearCart
    a. Empty cart array
    b. Log "Your cart is empty"
    c. Call updateCart

11. Define function updateCart
    a. Clear current cart items display
    b. For each product in cart
        i. Create cart item element
        ii. Set product name, price, and quantity
        iii. Add dropdown for quantity removal
        iv. Add "Remove" button with event listener
        v. Append cart item to cart items container
    c. Update total price and average price displays

12. Define function handleRemove(productId)
    a. Get selected quantity from dropdown
    b. Call removeFromCart with productId and selected quantity

13. Define function displayCart(filteredCart)
    a. Clear current cart items display
    b. For each product in filteredCart
        i. Create cart item element
        ii. Set product name, price, and quantity
        iii. Add dropdown for quantity removal
        iv. Add "Remove" button with event listener
        v. Append cart item to cart items container
    c. Calculate and display total and average prices for filteredCart

14. On window load, call loadProducts

15. End of pseudo code
