import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://playground-63664-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

const input_element = document.getElementById("input-el")
const button_element = document.getElementById("button-el")
const unordered_list_element = document.getElementById("ul-el")

button_element.addEventListener("click", function () {
    push(moviesInDB, input_element.value);
    console.log(`Added to Database ${input_element.value}`)
    clearInputFielEl();
})

onValue(moviesInDB, function (snapshot) {
    let moviesArray = Object.entries(snapshot.val())
    clearBookList();
    for (let i = 0; i < moviesArray.length; i++) {
        let currentItem = moviesArray[i];
        let moviesID = currentItem[0];
        let moviesValue = currentItem[1];
        appendMovietToMoviesList(currentItem)
    }
})

function clearInputFielEl() {
    input_element.value = ""
}
function clearBookList() {
    unordered_list_element.innerHTML = ""
}

function appendMovietToMoviesList(item) {
    let itemId = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue;

    newEl.addEventListener("click", function(){
        let exactLocationofID = ref(database, `movies/${itemId}`)
        remove(exactLocationofID)
    })
    
    unordered_list_element.append(newEl)
}

