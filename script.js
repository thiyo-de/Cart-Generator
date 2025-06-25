let productImg = document.getElementById("productImg");
let productTitle = document.getElementById("productTitle");
let productInfo = document.getElementById("productInfo");
let productPrice = document.getElementById("ProductPrice");
let genBtn = document.getElementById("genBtn");

let cartsDiv = document.createElement("div");
cartsDiv.classList.add("carts");

genBtn.addEventListener("click", () => {

    if([productImg,productTitle,productInfo,productPrice].some(input => input.value.trim() === "" )){
         return alert('Please Fill The Input Field!')
    }
    else{

  let imgTag = document.createElement("img");
  let titleTag = document.createElement("h3");
  let pTag = document.createElement("p");
  let priceTag = document.createElement("h4");
  let decreBtn = document.createElement("button");
  let count = document.createElement("span");
  let IncreBtn = document.createElement("button");

  let cartDiv = document.createElement("div");
  cartDiv.classList.add("cart");

  imgTag.src = productImg.value;
  cartDiv.append(imgTag);

  titleTag.textContent = productTitle.value;
  cartDiv.append(titleTag);

  pTag.textContent = productInfo.value;
  cartDiv.append(pTag);

  let addCart = document.createElement("div");
  addCart.classList.add("addCart");

  priceTag.textContent = `$${productPrice.value}`;
  addCart.append(priceTag);

  let countSec = document.createElement("div");
  countSec.classList.add("incre");

  decreBtn.textContent = "-";
  countSec.append(decreBtn);

  count.textContent = " "+0+" ";
  countSec.append(count);

  IncreBtn.textContent = "+";
  countSec.append(IncreBtn);

  addCart.append(countSec);
  cartDiv.append(addCart);

  cartsDiv.appendChild(cartDiv);
  document.body.append(cartsDiv);

  productImg.value = "";
  productTitle.value = "";
  productInfo.value = "";
  productPrice.value = "";
    }

});
