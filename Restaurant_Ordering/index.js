import menuArray from './data.js'

let get_menu = document.getElementById("menu")


function getIngredients(){
    ingredientsArray = []
    for (let item of menuArray){
        for (let ingredients of item.ingredients){
            ingredientsArray.push(ingredients)
        }
    }
    return ingredientsArray
}

function getData(menuArray) {
    let menuItems = ""
    let ingredientsArray = getIngredients()
    for (let item of menuArray) {
            menuItems += `
            <div class = "container">
                <p class = "emoji">${item.emoji}</p>
                <div class = "menuItems">
                    <h1>${item.name}</h1>
                    <h2>$${item.price}</h2>
                    <hr>
                </div>
            </div>
        `
        }
    get_menu.innerHTML = menuItems
}

getData(menuArray)


