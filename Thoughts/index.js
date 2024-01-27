import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://we-are-champions-8b35a-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const thoughtsListInDB = ref(database, "thoughtsList")


const input_element = document.getElementById("text-el")
const button_element = document.getElementById("button-el")
const peoples_thoughts_page = document.getElementById("ul-el")

let add_thoughts = "";
button_element.addEventListener('click', function(){
    push(thoughtsListInDB, input_element.value)
    clearInput();
})


onValue(thoughtsListInDB, function(snapshot){
    let thoughtsArray = Object.values(snapshot.val())
    clearList()
    for (let i = 0; i < thoughtsArray.length; i++){
        console.log(thoughtsArray[i]);
        appendToThoughtsArray(thoughtsArray[i]);
    }
    
})

function clearList(){
    peoples_thoughts_page.innerHTML = " ";
}

function clearInput(){
    input_element.value = " ";
}

function appendToThoughtsArray(item){
    peoples_thoughts_page.innerHTML += `
        <li>
            ${item}
        </li>
    `
}