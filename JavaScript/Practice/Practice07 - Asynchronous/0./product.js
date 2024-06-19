const BASE_URL = 'https://fakestoreapi.com';

async function fetchAPI (endpoint) {
    const url = new URL (endpoint, BASE_URL);

    try {
        const response = await fetch (url);

        if (!response.ok) {
            throw new Error (`Error fetching: ${response.status}`);
        }
        const data = await response.json();
        return {success: true, data: data}

    } catch (err) {
        return {success: false, data: err}
    }
}

function insertData (product) {
    const imageContainer = document.getElementById('img-container');
    const image = document.createElement('img');
    image.className = 'img-fluid';
    image.src = product.image;

    imageContainer.appendChild(image);

    document.getElementById('product-title').textContent = product.title;
    document.getElementById('review-count').textContent = `${product.rating.count} reviews`;
    document.getElementById('product-categ').textContent = product.category;
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.getElementById('product-description').textContent = product.description;




} 

document.addEventListener('DOMContentLoaded', async () => {
    let productId= localStorage.getItem ('productId');

    let resp = await fetchAPI(`products/${productId}`);
    if (resp.success) {
        insertData (resp.data);
    }

});
