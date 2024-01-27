import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://we-are-champions-8b35a-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const thoughtsListInDB = ref(database, "thoughtsList")


const input_element = document.getElementById("text-el")
const button_element = document.getElementById("button-el")
const peoples_thoughts_page = document.getElementById("ul-el")

button_element.addEventListener('click', function () {
    push(thoughtsListInDB, input_element.value)
    clearInput();
})


onValue(thoughtsListInDB, function (snapshot) {
    if (snapshot.exists()) {
        let thoughtsArray = Object.entries(snapshot.val())
        clearList()
        for (let i = 0; i < thoughtsArray.length; i++) {
            let currentItem = thoughtsArray[i]
            appendToThoughtsArray(currentItem);
        }
    }
    else {
        peoples_thoughts_page.innerHTML = "Nothing posted yet..."
    }

})

function clearList() {
    peoples_thoughts_page.innerHTML = " ";
}

function clearInput() {
    input_element.value = " ";
}

function appendToThoughtsArray(item) {
    let itemId = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue

    newEl.addEventListener("click", function () {
        let exactLocationOfDB = ref(database, `thoughtsList/${itemId}`)
        remove(exactLocationOfDB);
    })

    peoples_thoughts_page.append(newEl);

}
