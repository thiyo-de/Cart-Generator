let productImg = document.getElementById("productImg");
let productTitle = document.getElementById("productTitle");
let productInfo = document.getElementById("productInfo");
let productPrice = document.getElementById("ProductPrice")
let genBtn = document.getElementById("genBtn");

let cartsDiv = document.createElement("div");
cartsDiv.classList.add("carts");

genBtn.addEventListener("click",()=>{

let imgTag = document.createElement("img");
let titleTag = document.createElement("h3");
let pTag = document.createElement("p");
let priceTag = document.createElement("h4");
let decreBtn = document.createElement("button");
let count = document.createElement("span")
let IncreBtn = document.createElement("button");

let cartDiv = document.createElement("div");
cartDiv.classList.add("cart")

    imgTag.src = productImg.value;
    cartDiv.append(imgTag);

    titleTag.textContent = productTitle.value;
    cartDiv.append(titleTag);

    pTag.textContent = productInfo.value;
    cartDiv.append(pTag);

    cartsDiv.appendChild(cartDiv);
    document.body.append(cartsDiv);

})