import menuArray from './data.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://restaurants-cee35-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings) 	//connect our project with firebase
const database = getDatabase(app)		//connect your application to firebase
const restaurantsinDB = ref(database, "Restaurants") 	//create a reference so that everything is 

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

// Other parts of your code remain the same...

// Event listener for remove buttons
addedItemsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-item')) {
        const itemId = e.target.dataset.id;
        removeItem(itemId);
    }
});
// Function to remove items
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
    `
}