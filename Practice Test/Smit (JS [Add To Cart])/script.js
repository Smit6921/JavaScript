let cartItem = [];
let totalSum = 0;


const productDetails = [
    {
        name : "Gold Dial Watch",
        price : 70,
        image : "product1.jpg"
    },
    {
        name : "Silver Dial Watch",
        price : 100,
        image : "product2.jpg"
    },
    {
        name : "Smart Watch",
        price : 150,
        image : "product3.jpg"
    },
    {
        name : "Combo of 6",
        price : 500,
        image : "product4.jpg"
    }
]

const productContainer = document.getElementById("product-list");

productDetails.forEach((product , index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt = "product" />
        <p> ${product.name} </p>
        <p class = "price"> ${product.price} </p>
        <button class="add-to-cart"> Add To Cart </button>
    `;
    productContainer.appendChild(productDiv)

    const addToCartButton = productContainer.querySelectorAll(".add-to-cart");

    addToCartButton[index].addEventListener('click' , () => {
        cartItem.push({
            name : product.name,
            price : product.price,
            image : product.image
        });
        totalSum += product.price;
        updateCart();
    });
});


function updateCart () {
    const cartlist = document.getElementById("cart-item");
    const totalEle = document.getElementById("total-price");

    cartlist.innerHTML = "";

    cartItem.forEach((item , index) => {
        const li = document.createElement("li");
        const img = document.createElement("img")

        img.src = item.image;
        img.alt = item.name;
        img.style.width = "90px";
        img.style.marginRight = "20px";

        li.appendChild(img);

        const detail = document.createElement("span");
        detail.textContent = item.name + "-$" + item.price;
        li.appendChild(detail);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-item");
        deleteBtn.addEventListener('click' , () => {
            cartItem.splice(index , 1)
            totalSum -= item.price;
            updateCart()
        });
        li.appendChild(deleteBtn)

        cartlist.appendChild(li)
    });
    totalEle.textContent = "$" + totalSum
};