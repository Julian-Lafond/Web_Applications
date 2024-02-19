import menuArray from './data.js';

let get_menu = document.getElementById("menu");
let addedItemsContainer = document.getElementById("added-items-container");
let totalItems = document.getElementById("total-items-container")
let add = '';


menuArray.forEach(item => {
    const name = item.name;
    const ingredients = item.ingredients;
    const price = item.price;
    const emoji = item.emoji;
    const id = item.id;

    const ingredientsString = ingredients.join(", "); // Join with a comma and space
    add += `
    <div class="container">
        <p class="emoji">${emoji}</p>
        <div class="menuItems">
            <h1>${name}</h1>
            <h3>${ingredientsString}</h3>
            <h2>$${price}</h2>
            <hr>
        </div>
        <div class="add">
            <button class="add-item" data-id="${id}">Add</button> 
        </div>
    </div>
    `;

});

get_menu.innerHTML = add;

get_menu.addEventListener('click', function (e) {
    if (!addedItemsContainer.querySelector('.orders')) {
        addedItemsContainer.innerHTML = `<h3 class="orders">Your Order</h3>`;
    }
    if (e.target.dataset.id) {
        displayItems(e.target.dataset.id)
    }

})

let total = 0
function displayItems(itemsId) {
    const idObj = menuArray.find(item => item.id == itemsId);
    total += idObj.price
    addedItemsContainer.innerHTML += `
    <div class="checkout">
        <div class = "remove">
            <ul>
                <li>${idObj.name}</li>
            </ul>
            <button class = "remove-item" data-id="${idObj.id}">Remove</button>
        </div>
        <div class="price">
            $${idObj.price}
        </div>
    </div> 
    `;
    displayTotal(total)

}


addedItemsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-item')) {
        const itemId = e.target.dataset.id;
        removeItem(itemId);
    }
});


function removeItem(itemId) {
    const itemElement = addedItemsContainer.querySelector(`[data-id="${itemId}"]`).parentNode.parentNode;
    if (itemElement) {
        const itemPriceText = itemElement.querySelector('.price').textContent.trim();
        const itemPrice = parseFloat(itemPriceText.substring(1));
        total -= itemPrice;
        displayTotal(total);
        addedItemsContainer.removeChild(itemElement);
    }
}

function displayTotal(total) {
    totalItems.innerHTML = `
    <hr class = "checkout">
    <div class = "total">
        <h5>Total Price:</h5>
        <div class = "price">
            <h5>$${total}</h5>
        </div>
    </div>
    <div class = "completed-container">
        <button class = "completed">Complete Order</button>
    </div>
    `
}

totalItems.addEventListener('click', function (e) {
    if (e.target.classList.contains("completed")) {
        get_menu.innerHTML += `
            <form id="credit-form" class="credit-form">
                    <label for="credit">Enter Credit Card Details</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required>
                    <input type="text" id="credit" name="credit" placeholder="Enter card number" required>
                    <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required>
                <button class = "submit-form">Submit</button>
            </form>
        `;


        const get_id = document.getElementById("credit-form")
        get_id.addEventListener('submit', function (event) {
            event.preventDefault()
            const form_data = new FormData(get_id)
            const name = form_data.get('name')
            addedItemsContainer.innerHTML = ''
            totalItems.innerHTML = `<p id = "submitted">Thanks ${name}, Your order is on the way </p>`
            get_menu.removeChild(get_id)
            // Remove the form and addedItemsContainer from the DOM
            if (get_menu.contains(get_id)) {
                get_menu.removeChild(get_id);
            }

            // Optionally, remove addedItemsContainer from the DOM
            if (get_menu.contains(addedItemsContainer)) {
                get_menu.removeChild(addedItemsContainer);
            }
        })

    }
});

