
const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');
    const addBtn = product.querySelector('.product__add');


    decBtn.addEventListener('click', () => {
        let value = parseInt(quantityValue.textContent, 10);
        if (value > 1) {
            quantityValue.textContent = value - 1;
        }
    });


    incBtn.addEventListener('click', () => {
        let value = parseInt(quantityValue.textContent, 10);
        quantityValue.textContent = value + 1;
    });


    addBtn.addEventListener('click', () => {
        const id = product.dataset.id;
        const imgSrc = product.querySelector('.product__image').src;
        const count = parseInt(quantityValue.textContent, 10);


        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
        if (cartProduct) {

            const cartCount = cartProduct.querySelector('.cart__product-count');
            cartCount.textContent = parseInt(cartCount.textContent, 10) + count;
        } else {

            const cartProductDiv = document.createElement('div');
            cartProductDiv.className = 'cart__product';
            cartProductDiv.dataset.id = id;
            cartProductDiv.innerHTML = `
        <img class="cart__product-image" src="${imgSrc}">
        <div class="cart__product-count">${count}</div>
      `;
            cartProducts.appendChild(cartProductDiv);
        }
    });
});
