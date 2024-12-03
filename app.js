document.addEventListener("DOMContentLoaded", () => {
    const productsDiv = document.getElementById("products");
    const cartItems = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout");

    // Пример данных о товарах
    const products = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Phone", price: 499 },
        { id: 3, name: "Headphones", price: 199 },
    ];

    // Отображение товаров
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });

    // Добавление в корзину
    productsDiv.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const productId = parseInt(event.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            const cartItem = document.createElement("li");
            cartItem.textContent = `${product.name} - $${product.price}`;
            cartItems.appendChild(cartItem);
        }
    });

    // Оформление заказа
    checkoutButton.addEventListener("click", () => {
        alert("Order processed!");
    });
});
