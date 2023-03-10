const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const product = productName.value;
    const quantity = productQuantity.value;

    console.log(product, quantity);
    displayProduct(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${quantity}`;
    ul.appendChild(li);
}