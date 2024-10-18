var desktopHeader = document.getElementById("header"); 

// DOM Elements
const cartIcon = document.querySelectorAll('.cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.querySelectorAll('.cart-count');
const cartClose = document.querySelector('.cart-close');
const cartClear = document.querySelector('.clear-cart');

let searchInput;

const filterType = document.getElementById('filter-type');

const modal = document.getElementById('product-modal');
const modalClose = document.querySelector('.close-modal');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductName = document.getElementById('modal-product-name');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDescription = document.getElementById('modal-product-description');
const modalProductRating = document.getElementById('modal-product-rating');

// Cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;

const products = [
    {
        id: 1,
        name: "Matcha Cookies/pc",
        price: 40,
        type: "pastries",
        image: "assets/images/product1.webp",
        description: "Indulge in the perfect balance of earthy matcha and creamy white chocolate in every bite of our matcha cookies.",
        rating: { good: 0, bad: 0 } 
    },
    {
        id: 2,
        name: "Crookies/pc",
        price: 80,
        type: "pastries",
        image: "assets/images/product2.webp",
        description: "Savor the delightful fusion of two beloved classics of croissants and chocolate chip cookies.",
        rating: { good: 0, bad: 0 } 
    },
    {
        id: 3,
        name: "Blueberry Cheesecake/slice",
        price: 140,
        type: "pastries",
        image: "assets/images/product3.webp",
        description: "Our creamy, rich, decadent cheesecake topped with blueberries.",
        rating: { good: 0, bad: 0 } 
    },
    {
        id: 4,
        name: "Biscoff Cheesecake/slice",
        price: 140,
        type: "pastries",
        image: "assets/images/product4.webp",
        description: "Soft and creamy cheesecake layered with Biscoff biscuits. Perfect for any occasion.",
        rating: { good: 0, bad: 0 } 
    },
    {
        id: 5,
        name: "Sea Salt Latte",
        price: 75,
        type: "drink",
        image: "assets/images/product5.webp",
        description: "Creamy espresso with hints of caramel and salt.",
        rating: { good: 0, bad: 0 } 
    },
    {
        id: 6,
        name: "Peka-Mayap",
        price: 75,
        type: "drink",
        image: "assets/images/product6.webp",
        description: "Shaken espresso with white chocolate and caramel sauce. One of our best-selling drinks.",
        rating: { good: 0, bad: 0 } 
    },
    {
        id: 7,
        name: "Matcha Latte",
        price: 100,
        type: "drink",
        image: "assets/images/product7.webp",
        description: "Grinded green tea mixed with creamy milk and vanilla.",
        rating: { good: 0, bad: 0 }
    },
    {
        id: 8,
        name: "Kuti Berry",
        price: 90,
        type: "drink",
        image: "assets/images/product8.webp",
        description: "Refreshing drink with strawberry bits, soda, and yakult.",
        rating: { good: 0, bad: 0 }
    },
    // Add more products as needed
];

// event listeners
for (var i = 0; i < cartIcon.length; i++) {
    cartIcon[i].addEventListener("click", toggleCart);
}
cartClose.addEventListener('click', toggleCart);
cartClear.addEventListener('click', clearCart);

// Initialization
updateCartDisplay();
// (kapag nasa products page lang)
if (document.title == 'Kumachi Coffee and Pastries | Products') {
    console.log('Nasa products page');
    searchInput = document.getElementById('search-input');
    searchAndFilterProducts(); 
    // Event listeners for products only
    searchInput.addEventListener('input', searchAndFilterProducts);
    filterType.addEventListener('change', searchAndFilterProducts);
    modalClose.addEventListener('click', closeModal); 

    // Function to add a product to the cart
    function addToCart(id, name, price, image) {
        if (typeof price !== 'number' || isNaN(price) || price <= 0) {
            console.error('Invalid price:', price);
            return;
        }
        if (typeof image !== 'string' || !image) {
            console.error('Invalid image URL:', image);
            return;
        }

        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, image, quantity: 1 });
        }

        saveCartToLocalStorage();
        updateCartDisplay();
    }


    // Function to render products dynamically
    function renderProducts(products) {
        const productContainer = document.querySelector('.products');
        productContainer.innerHTML = ''; // Clear existing products

        products.forEach(product => {
            // Validate product data
            if (!product.name || typeof product.price !== 'number' || !product.image) {
                console.error('Invalid product data:', product);
                return;
            }

            const productElement = `
                <div class="product" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
                    <img src="${product.image}" alt="${product.name} Image" class="product-image">
                    <div class="product-partition">
                        <p class="product-name">${product.name}</p>
                        <p class="product-price">₱${product.price}.00</p>
                    </div>

                    <div>
                        <p class="gray">${capitalize(product.type)}</p>
                        <p class="gray">Rating: Good (${product.rating.good}) | Bad (${product.rating.bad})</p>
                    </div>

                    <div>
                        <button class="add-to-cart-btn">Add to Cart</button>
                        <div class="rate-product">
                            <button class="rate-btn" data-rating="good" data-id="${product.id}">Good</button>
                            <button class="rate-btn" data-rating="bad" data-id="${product.id}">Bad</button>
                        </div>
                    </div>     
                </div>
            `;

            productContainer.innerHTML += productElement;
        });

        attachEventListeners();
    }


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    function getOverallRating(good, bad) {
        if (good === 0 && bad === 0) return 'No Ratings Yet';
        return good > bad ? 'Good' : 'Bad';
    }


    // Function to attach event listeners to dynamically rendered products
    function attachEventListeners() {
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productElement = event.target.closest('.product');
                const id = productElement.getAttribute('data-id');
                const name = productElement.getAttribute('data-name');
                const price = parseFloat(productElement.getAttribute('data-price'));
                const image = productElement.getAttribute('data-image');
                desktopHeader.style.top = "0";
                desktopHeader.style.backgroundColor = "var(--secondary-color)";
                addToCart(parseInt(id), name, price, image);
            });
        });

        document.querySelectorAll('.product-image').forEach(image => {
            image.removeEventListener('click', handleImageClick);
            image.addEventListener('click', handleImageClick);
        });

        document.querySelectorAll('.rate-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const rating = event.target.getAttribute('data-rating');
                const productId = event.target.getAttribute('data-id');
                rateProduct(productId, rating);
            });
        });
    }


    // Function to rate a product
    function rateProduct(id, rating) {
        const product = products.find(p => p.id == id);

        if (product) {
            if (rating === 'good') {
                product.rating.good += 1;
            } else if (rating === 'bad') {
                product.rating.bad += 1;
            }
            renderProducts(products);
        }
    }


    // Function to search and filter products
    function searchAndFilterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filter = filterType.value;

        const filteredProducts = products.filter(product => {
            return (filter === 'all' || product.type === filter) &&
                (product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm));
        });

        renderProducts(filteredProducts);
    }


    // Function to handle image click for modal display
    function handleImageClick() {
        const productElement = this.closest('.product');
        const id = parseInt(productElement.getAttribute('data-id'));
        const product = products.find(prod => prod.id === id);

        if (product) {
            modalProductImage.src = product.image;
            modalProductName.textContent = product.name;
            modalProductPrice.textContent = `Price: ₱${product.price}`;
            modalProductDescription.textContent = product.description;
            modalProductRating.textContent = `Rating: Good (${product.rating.good}) | Bad (${product.rating.bad})`;

            modal.style.display = 'flex'; // Show modal
        }
    }

    // Function to close the product modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Initialize product display
    renderProducts(products);
};
    

// ===========

function toggleCart() {
    var cart = document.querySelector('.cart');
    cart.classList.toggle('active');
}

// Function to update cart display
function updateCartDisplay() {
    cartItemsContainer.innerHTML = ''; 
    total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.textContent = 'Total: ₱0.00';
        cartCountElement[0].textContent = '0';
        cartCountElement[1].textContent = '0';
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name} Image">
            <p class="cart-item-title">${item.name}</p>
            
            <div class="quantity-control">
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
            <p>Price: ₱${item.price.toFixed(2)}</p>
            <p class="subtotal">Subtotal: ₱${itemTotal.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalElement.textContent = `Total: ₱${total.toFixed(2)}`;
    cartCountElement[0].textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCountElement[1].textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

// Function to attach event listeners to quantity buttons
function attachQuantityControls() {

    cartItemsContainer.addEventListener('click', event => {
        if (event.target.classList.contains('increase-qty')) {
            handleQuantityChange(event.target, 1);
        } else if (event.target.classList.contains('decrease-qty')) {
            handleQuantityChange(event.target, -1);
        }
    });
}


function changeQuantity(id, change) {
    const product = cart.find(item => item.id == id); 

    if (product) {
        product.quantity += change;

        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id != id);
        }

        saveCartToLocalStorage();
        updateCartDisplay();
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initialize
updateCartDisplay(); // Display cart initially
attachQuantityControls();

// Function to clear the cart
function clearCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
        cart = [];
        saveCartToLocalStorage();
        updateCartDisplay();
    }
}

// Function to toggle the cart sidebar
function toggleCartSidebar() {
    if (cartSidebar.classList.contains('open')) {
        cartSidebar.classList.remove('open');
        cartSidebar.style.transform = 'translateX(100%)'; 
    } else {
        cartSidebar.classList.add('open');
        cartSidebar.style.transform = 'translateX(0)';
    }
}