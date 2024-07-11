let cartItem = []
let totalSum = 0

const productDetails = [
    {
        name : "product1",
        price : 10,
        image : "product1.jpg"
    },
    {
        name : "product2",
        price : 20,
        image : "product2.jpg"
    }
]

const productContainer = document.getElementById("product-list");

productDetails.forEach((product , index) => {
    const productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productDiv.innerHTML = `
        <img src = "${product.image}" alt = "product1" />
        <p> ${product.name} </p>
        <p class="price"> ${product.price} </p>
        <button class="add-to-cart"> Add To Cart </button>
    `;

    productContainer.appendChild(productDiv)

    const addToCartBtn = productContainer.querySelectorAll(".add-to-cart");

    addToCartBtn[index].addEventListener('click' , () => {
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
        const img = document.createElement("img");

        img.src = item.image;
        img.alt = item.name;
        img.style.width = "60px";
        img.style.marginRight = "20px";
        
        li.appendChild(img);

        const details = document.createElement("span");

        details.textContent = item.name + " - $" + item.price;
        li.appendChild(details);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-item");
        deleteButton.addEventListener('click' , () => {
            cartItem.splice(index , 1);
            totalSum -= item.price;
            updateCart()
        })

        li.appendChild(deleteButton)

        cartlist.appendChild(li)
    });

    totalEle.textContent = "$" + totalSum
}