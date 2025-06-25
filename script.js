let productImg = document.getElementById("productImg");
let productTitle = document.getElementById("productTitle");
let productInfo = document.getElementById("productInfo");
let productPrice = document.getElementById("ProductPrice");
let genBtn = document.getElementById("genBtn");

// ✅ Load products from localStorage or start with empty array
let products = JSON.parse(localStorage.getItem("products")) || [];

// ✅ Create cartsDiv once (reusable container)
let cartsDiv = document.createElement("div");
cartsDiv.classList.add("carts");
document.body.append(cartsDiv);

// ✅ Save to localStorage function
function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// ✅ Render all products from array
function renderProducts() {
  cartsDiv.innerHTML = ""; // Clear previous display

  products.forEach((product, index) => {
    let cartDiv = document.createElement("div");
    cartDiv.classList.add("cart");

    let imgTag = document.createElement("img");
    imgTag.src = product.img;
    cartDiv.append(imgTag);

    let titleTag = document.createElement("h3");
    titleTag.textContent = product.title;
    cartDiv.append(titleTag);

    let pTag = document.createElement("p");
    pTag.textContent = product.info;
    cartDiv.append(pTag);

    let addCart = document.createElement("div");
    addCart.classList.add("addCart");

    let priceTag = document.createElement("h4");
    priceTag.textContent = `$${product.price}`;
    addCart.append(priceTag);

    let countSec = document.createElement("div");
    countSec.classList.add("incre");

    let decreBtn = document.createElement("button");
    decreBtn.textContent = "-";

    let count = document.createElement("span");
    count.textContent = ` ${product.quantity} `;

    let increBtn = document.createElement("button");
    increBtn.textContent = "+";

    // ✅ Increment button logic
    increBtn.addEventListener("click", () => {
      products[index].quantity++;
      saveToLocalStorage();
      renderProducts();
    });

    // ✅ Decrement button logic
    decreBtn.addEventListener("click", () => {
      if (products[index].quantity > 0) {
        products[index].quantity--;
        saveToLocalStorage();
        renderProducts();
      }
    });

    countSec.append(decreBtn);
    countSec.append(count);
    countSec.append(increBtn);

    addCart.append(countSec);
    cartDiv.append(addCart);

    cartsDiv.appendChild(cartDiv);
  });
}

// ✅ Load existing products when page loads
renderProducts();

// ✅ Add new product button
genBtn.addEventListener("click", () => {
  // Check if input fields are empty
  if (
    [productImg, productTitle, productInfo, productPrice].some(
      (input) => input.value.trim() === ""
    )
  ) {
    return alert("Please Fill The Input Field!");
  } else {
    // Create new product object
    let productObj = {
      img: productImg.value,
      title: productTitle.value,
      info: productInfo.value,
      price: productPrice.value,
      quantity: 0
    };

    // Add to array and save
    products.push(productObj);
    saveToLocalStorage();
    renderProducts();

    // Clear input fields
    productImg.value = "";
    productTitle.value = "";
    productInfo.value = "";
    productPrice.value = "";
  }
});
