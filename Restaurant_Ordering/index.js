import menuArray from './data.js'

let get_menu = document.getElementById("menu")

let add = ''

// Loop through each item in the menuArray
menuArray.forEach(item => {
    // Access the properties of the current item
    const name = item.name;
    const ingredients = item.ingredients;
    const price = item.price;
    const emoji = item.emoji;

    // Concatenate the ingredients into a string
    const ingredientsString = ingredients.join(", "); // Join with a comma and space
    add += `
    <div class = "container">
        <p class = "emoji">${emoji}</p>
        <div class = "menuItems">
            <h1>${name}</h1>
            <h3>${ingredientsString}</h3>
            <h2>$${price}</h2>
            <div class = "add">
                <h1>add button</h1>
            </div>
            <hr>
        </div>
    </div>

    

    `
});

get_menu.innerHTML = add


