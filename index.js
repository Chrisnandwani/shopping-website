
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        console.log(response)
        const products = await response.json()
        console.log("products", products)
        const productGrid = document.getElementById("product-grid")
        console.log(productGrid)
        products.forEach(product => {
            console.log(product)
            const productCard = document.createElement('div')
            productCard.classList.add('card')
            console.log(productCard)
            productCard.innerHTML = `
                <img src= "${product.image}" alt="${product.title}" >
                <h3> ${product.title}></h3>
                <p class="price" > ${product.price} </p>
                <button>Add to Cart</button>
            `
            productGrid.appendChild(productCard)
        })
    } catch (error) {

    }
}

window.onload = fetchProducts