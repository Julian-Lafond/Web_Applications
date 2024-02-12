import menuArray from './data.js';

let get_menu = document.getElementById("menu");
let addPlaceholder = document.querySelector(".add-placeholder");
let addedItemsContainer = document.getElementById("added-items-container");

let add = '';

// Loop through each item in the menuArray
menuArray.forEach(item => {
    // Access the properties of the current item
    const name = item.name;
    const ingredients = item.ingredients;
    const price = item.price;
    const emoji = item.emoji;
    const id = item.id;

    // Concatenate the ingredients into a string
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
            <button class="add-item" data-id="${id}">Add</button> <!-- Set data-id to the item's ID -->
        </div>
    </div>
    `;
});

// Append dynamically generated menu items to the menu container
get_menu.innerHTML = add;


// Event delegation for "Add" buttons
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-item")) {
        // Get the ID of the clicked button using dataset
        let itemId = event.target.dataset.id;
        console.log("Button clicked for item with ID:", itemId);
        
        // Display information at the bottom of the page
        displayAddedItem(itemId);
    }
});

// Function to display added item information
function displayAddedItem(itemId) { 
    let addItem = `
        <div class = "added-item">
            <p>${itemId}</p>
        </div>
    `
    
    addedItemsContainer.innerHTML = addItem

}
