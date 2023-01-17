/* Product objects 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const product1 = {
  name: "Black Orchid (Tom Ford) <small>25ml</small>",
  price: 4500,
  quantity: 0,
  productId: 1,
  image: "app/src/images/product-1.jpg",
};
const product2 = {
  name: "Gucci OUD Intense",
  price: 2.99,
  quantity: 0,
  productId: 2,
  image: "app/src/images/product-2.jpg",
};
const product3 = {
  name: "Adol Special Oil Perfume <small>25ml</small>",
  price: 4500,
  quantity: 0,
  productId: 3,
  image: "app/src/images/product-3.jpg",
};
const product4 = {
  name: "Adol Special Oil Perfume <small>30ml</small>",
  price: 5500,
  quantity: 0,
  productId: 4,
  image: "app/src/images/product-4.jpg",
};
const product5 = {
  name: "Adol Special Oil Perfume <small>10ml</small>",
  price: 2500,
  quantity: 0,
  productId: 5,
  image: "app/src/images/product-5.jpg",
};

/* An array of all of product object literals */
const products = [product4, product1, product3, product2, product5];

/* An empty array named to hold the items in the cart */
const cart = [];

/* A Helper function to get the product from the products array */
function getProduct(productId) {
  return products.find((product) => product.productId === productId);
}

/* addProductToCart function that takes in the product productId as an argument
  - addProductToCart gets the correct product based on the productId
  - addProductToCart then increases the product's quantity
  - if the product is not already in the cart, it is added to the cart
*/
function addProductToCart(productId) {
  let product = getProduct(productId);
  product.quantity += 1;
  if (!cart.includes(product)) {
    cart.push(product);
  }
};

/* increaseQuantity function takes in the productId as an argument
  - increaseQuantity gets the correct product based on the productId
  - increaseQuantity then increases the product's quantity
*/
function increaseQuantity(productId) {
  let product = getProduct(productId);
  product.quantity += 1;
};

/* decreaseQuantity function takes in the productId as an argument
  - decreaseQuantity gets the correct product based on the productId
  - decreaseQuantity decreases the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let product = getProduct(productId);
  product.quantity -= 1;
  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
};


/* removeProductFromCart function takes in the productId as an argument
  - removeProductFromCart gets the correct product based on the productId
  - removeProductFromCart updates the product quantity to 0
  - removeProductFromCart removes the product from the cart
*/
function removeProductFromCart(productId) {
  let product = getProduct(productId);
  product.quantity = 0;
  cart.splice(cart.indexOf(product), 1);
};
/* cartTotal function has no parameters
  - cartTotal iterates through the cart to get the total of all products
  - cartTotal returns the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};
/* emptyCart function empties the products from the cart */
function emptyCart() {
  cart.forEach((product) => {
    product.quantity = 0;
  });
  cart.splice(0, cart.length);
};
/* pay function takes in an amount as an argument
  - pay returns a negative number if there is a remaining balance
  - pay returns a positive number if money should be returned to customer
*/
function pay(amount) {
  let total = cartTotal();
  return amount - total;
};

/* The following is for running unit tests. 
   Run the following command in terminal to run tests
   npm run test
*/
module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
}
