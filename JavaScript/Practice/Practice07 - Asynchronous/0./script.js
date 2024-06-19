/**
 * API Documentation: https://fakestoreapi.com/docs
 * baseUrl: https://fakestoreapi.com
 * endpoints: 
 *  /products
 *  /products/{id}
 *  /products/categories
 *  /products/category/{category}
 */

const BASE_URL = 'https://fakestoreapi.com';

const categoryCssClasses = {
    "electronics": "text-bg-info",
    "jewelery": "text-bg-warning",
    "men's clothing": "text-bg-primary",
    "women's clothing": "text-bg-danger"
}

/**
 * product card html:
 * <article class='col-2-md m-2 card cursor-pointer'>
        <img src="${product.image}" alt="Product Image">
        <div class="card-content">
            <div class="title">${product.title}</div>
            <div class="price">$${product.price}</div>
            <span class="badge rounded-pill ${categoryCssClasses[product.category]}">${product.category}</span>
            <div class="description">${product.description}</div>
        </div>`
    </article>
 * 
 */

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


document.addEventListener('DOMContentLoaded', async () => {
    let resp = await fetchAPI('products');
    if (resp.success) {
        insertData(resp.data);
    }

});

function insertData (productList) {
    const elem = document.getElementById('products-container');

    for (let product of productList) {
       let elemToInsert = document.createElement('article');
       elemToInsert.className = 'col-2-md m-2 card cursor-pointer';
       elemToInsert.innerHTML = `<img src="${product.image}" alt="Product Image">
       <div class="card-content">
           <div class="title">${product.title}</div>
           <div class="price">$${product.price}</div>
           <span class="badge rounded-pill ${categoryCssClasses[product.category]}">${product.category}</span>
           <div class="description">${product.description}</div>
       </div>`;

       elem.appendChild(elemToInsert);

       elemToInsert.addEventListener ('click', () => {
            localStorage.setItem ('productId', product.id);
            window.location.href = './product_page.html';
       })
    }
}

