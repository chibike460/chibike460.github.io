/* Create 3 or more product objects using object literal notation 
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

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [product4, product1, product3, product2, product5];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

// A Helper function to get the product from the products array
function getProduct(productId) {
  return products.find((product) => product.productId === productId);
}

/* Create a function named with function declaration addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let product = getProduct(productId);
  product.quantity += 1;
  if (!cart.includes(product)) {
    cart.push(product);
  }
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let product = getProduct(productId);
  product.quantity += 1;
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let product = getProduct(productId);
  product.quantity -= 1;
  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
};


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let product = getProduct(productId);
  product.quantity = 0;
  cart.splice(cart.indexOf(product), 1);
};
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.forEach((product) => {
    product.quantity = 0;
  });
  cart.splice(0, cart.length);
};
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  let total = cartTotal();
  return amount - total;
};
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
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
   /* Uncomment the following line if completing the currency converter bonus */
  //  currency
}
