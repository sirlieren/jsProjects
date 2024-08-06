const checkListButton = document.querySelector(".basket");
const body = document.querySelector("body");
const listProductHTML = document.querySelector(".items");
const listCartHTML = document.querySelector(".listCart");
const iconCardSpan = document.querySelector(".totalQuantity");

let items = [];
let carts = [];


checkListButton.addEventListener("click", () => {
    body.classList.toggle("showCart");
})
const addToHTML = () => {
    listProductHTML.innerHTML = '';

    if (items.length > 0) {
        items.forEach((product) => {
            let newProduct = document.createElement("div");
            newProduct.dataset.id = product.id;
            newProduct.classList.add("item");
            newProduct.innerHTML = `<img src="${product.image}" class="itemImage">
            <h4>${product.name}</h4>
            <div class="bottomBuyBox">
                <p>${product.price}$</p>
                <button class="addBucket">Buy</button>
            </div>`;
            listProductHTML.appendChild(newProduct);
        })
    }
}

listProductHTML.addEventListener("click", (e) => {
    let clickPos = e.target;
    if (clickPos.classList.contains('addBucket')) {
        //add to bucket
        let productId = clickPos.parentElement.parentElement.dataset.id;
        addToCart(productId);
    }
})

const addToCart = (id) => {
    let posThisProductInCart = carts.findIndex((value) => value.productId == id);

    if (carts.length <= 0) {
        carts = [{
            productId: id,
            quantity: 1

        }]
    }
    else if (posThisProductInCart < 0) {
        carts.push({
            productId: id,
            quantity: 1
        });
    }
    else {
        carts[posThisProductInCart].quantity++;
    }
    console.log(carts);
    addCartToHTML();
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuantity += cart.quantity;
            const newItem = document.createElement("div");
            newItem.classList.add("item");

            let posProduct = items.findIndex((value) => value.id == cart.productId);
            let info = items[posProduct];
            newItem.dataset.id = info.id;
            newItem.innerHTML = `
                            <div class="image"> 
                                <img src="${info.image}">
                            </div>
                            <div class="name">
                                ${info.name}
                            </div>
                            <div class="totalPrice">
                        ${info.price * cart.quantity}$
                            </div>
                            <div class="quantity">
                                <span class="minus">
                                    < </span>
                                        <span>${cart.quantity}</span>
                                        <span class="plus">></span>
                            </div>
        
            `;
            listCartHTML.appendChild(newItem);
            iconCardSpan.innerText = totalQuantity;
        })
    }

}
listCartHTML.addEventListener('click', (e) => {
    let clickPos = e.target;
    if (clickPos.className == "minus" || clickPos.className == "plus") {
        let productId = clickPos.parentElement.parentElement.dataset.id;
        let type = clickPos.className;
        changeQuantity(productId, type);

    }
})

const changeQuantity = (id, type) => {
    let posItemInCart = carts.findIndex((value) => value.productId = id);
    if (posItemInCart >= 0) {
        if (type == "plus") {
            carts[posItemInCart].quantity += 1;
        }
        else if (type == "minus") {
            let valueChange = carts[posItemInCart].quantity - 1;
            if (valueChange > 0) {
                carts[posItemInCart].quantity = valueChange;
            }
            else {
                carts.splice(posItemInCart, 1);
            }
        }
        addCartToHTML();
    }
}


const initApp = () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            items = data;
            console.log(items);
            addToHTML();
        })
}
initApp();


