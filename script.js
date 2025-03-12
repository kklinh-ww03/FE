let cart = [];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function addToCart(name, price, qtyId, imgSrc) {
    let quantity = document.getElementById(qtyId).value;
    let item = { name, price, quantity: parseInt(quantity), imgSrc };

    let existingItem = cart.find(i => i.name === name);
    if (existingItem) {
        existingItem.quantity += parseInt(quantity);
    } else {
        cart.push(item);
    }

    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    let totalPrice = 0;
    cart.forEach((item, index) => {
        let row = document.createElement("div");
        row.classList.add("cart-item");

        row.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}" class="cart-img">
            <span class="cart-name">${item.name}</span>
            <span class="cart-qty">   ${item.quantity}   </span>
    
            <span class="cart-price">${item.price * item.quantity} VND</span>
            <button class="cart-remove" onclick="removeFromCart(${index})">Xóa</button>
        `;
        
        cartList.appendChild(row);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total-price").innerText = totalPrice;
}

// Hiển thị trang chủ mặc định
showPage("home");
