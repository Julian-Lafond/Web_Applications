import menuArray from './data.js'

let get_menu = document.getElementById("menu")


function getData(menuArray) {
    let menuItems = ""
    for (let item of menuArray) {
        menuItems += `
            <div class = "menuItems">
                <p>${item.emoji}</p>
                <h1>${item.name}</h1>
                <h3>${item.ingredients}</h3>
                <h2>${item.price}</h2>

            </div>
        
        `
    }
    get_menu.innerHTML = menuItems
}

getData(menuArray)


