let productInput = document.getElementById("productInput");
let priceInput = document.getElementById("priceInput");
let addToCartButton = document.getElementById("addButton");
let cartListUL = document.getElementById("cartList");

// let productName = productInput.value;
// let productPrice = Number(priceInput.value);

let productList = [{ productName: "0", price: 0, quantity: 0 }];

addToCartButton.addEventListener("click", () => {
  //Add Product
  AddProducts();

  //clear Input
  productInput.value = "";
  priceInput.value = "";

  //render
  DisplayProducts();
});

function AddProducts() {
  let newPrdct = {};

  //calling things that doesn't exist as though they were.
  newPrdct.productName = productInput.value;
  newPrdct.price = Number(priceInput.value);
  newPrdct.quantity = 1;

  for (prdct of productList) {
    if (productInput.value === prdct.productName) {
      newPrdct.quantity += 1;
    }
  }

  console.log(newPrdct);
  productList.push(newPrdct);
}

function DisplayProducts() {
  let shoppedItems;
  for (prdct of productList) {
    shoppedItems = document.createElement("li");
    shoppedItems.innerHTML = `Product Name: ${prdct.productName}, Product Price: ${prdct.price}, Product Quantity: ${prdct.quantity}`;
    cartListUL.append(shoppedItems);
  }
}

// The HTML page that exists with the following elements:
// Two input fields (one for the product name and one for price).
// A button that triggers the function to add the product to the shopping cart.
// A list showing all products added (shopping cart).

// You should JavaScript file:

// Retrieves entered values ​​from the input fields.
// Adds objects to an array of type { productName, price, quantity } .
// Checks if the item already exists in the array (by comparing productName ) – if it already exists, increment quantity by 1.
// If it is not there, add it to the list.
// Clears the input fields after a product has been added.
// Prints (renders) the entire contents of the shopping cart in a list, so that you can see all products, their price and their quantity.

// Test your code by adding multiple products and making sure they display correctly. Also try adding the same product multiple times and verify that the quantity increases instead of creating a new item.
