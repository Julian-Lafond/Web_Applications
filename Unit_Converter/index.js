let bodycontainer = document.getElementById("container")
let grab_button = document.getElementById("button-el")
let input_info = document.getElementById("input-el")


grab_button.addEventListener('click', function () {
    bodycontainer.innerHTML = `
        <ul>
            <li> Length (Meters/Feet)</li>
            <p>
                ${input_info.value} meters = ${(input_info.value * 3.281).toFixed(3)} feet  
                | ${input_info.value} feet =  ${(input_info.value / 3.281).toFixed(3)} meters
            </p>
            <li>Volume (Liters/Gallons)</li>
                ${input_info.value} liters = ${(input_info.value * 0.264).toFixed(3)} gallons  
                | ${input_info.value} gallons =  ${(input_info.value / 0.264).toFixed(3)} liters   
            <li>Mass (Kilograms/Pounds)</li>
                ${input_info.value} kilos = ${(input_info.value * 2.204).toFixed(3)} pounds  
|               ${input_info.value} pounds =  ${(input_info.value / 2.204).toFixed(3)} kilos   
        </div>
    `
})