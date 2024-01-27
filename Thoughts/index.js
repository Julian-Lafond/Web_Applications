


const input_element = document.getElementById("input-el")
const button_element = document.getElementById("button-el")
const peoples_thoughts = document.getElementById("ul-el")

let add_thoughts = "";
button_element.addEventListener('click', function(){
    add_thoughts += `
        <li>
            ${input_element.value}
        </li>
    `
    console.log(add_thoughts)
    peoples_thoughts.innerHTML = add_thoughts;
})