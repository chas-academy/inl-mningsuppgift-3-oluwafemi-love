let productInput = document.getElementById("productInput");
let priceInput = document.getElementById("priceInput");
let addToCartButton = document.getElementById("addButton");
let cartListUL = document.getElementById("cartList");

let productList = [];

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
  let productName = productInput.value.trim();
  let price = Number(priceInput.value);

  if (!productName || isNaN(price)) {
    alert("Enter the Product Name and price correctly");
    //todo: if wrong details are inputed it shouldn't render
    cartListUL.innerText = "";
  }

  //ha eleyi sori, fi sere si waju si:
  let existingProduct = productList.find(
    (prdct) => prdct.productName === productInput.value
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
    existingProduct.price = price;
  } else {
    productList.push({
      productName: productName,
      price: price,
      quantity: 1,
    });
  }
}

function DisplayProducts() {
  // clear the ui before rendering to avoid duplication of renders.
  cartListUL.innerHTML = "";

  let shoppedItems;

  for (prdct of productList) {
    shoppedItems = document.createElement("li");
    shoppedItems.innerHTML = `${prdct.productName} - ${prdct.price}kr (x${prdct.quantity})`;
    console.log(
      `Product Name: ${prdct.productName}, Product Price: ${prdct.price}, Product Quantity: ${prdct.quantity}`
    );
    cartListUL.append(shoppedItems);
  }
  console.log(productList);
}
