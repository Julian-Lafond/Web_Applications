let bodycontainer = document.getElementById("container")
let grab_button = document.getElementById("button-el")
let input_info = document.getElementById("input-el")

grab_button.addEventListener('click', function () {
    bodycontainer.innerHTML = `
        <ul>
            <li class = "metric"> Length (Meters/Feet)
            <p>
                ${input_info.value} meters = ${(input_info.value * 3.281).toFixed(3)} feet  
                | ${input_info.value} feet =  ${(input_info.value / 3.281).toFixed(3)} meters
            </p>
            </li>
            <li class = "metric">Volume (Liters/Gallons)
            <p>
                ${input_info.value} liters = ${(input_info.value * 0.264).toFixed(3)} gallons  
                | ${input_info.value} gallons =  ${(input_info.value / 0.264).toFixed(3)} liters   
            </p>
            </li>
            <li class = "metric">Mass (Kilograms/Pounds)
            <p>
                ${input_info.value} kilos = ${(input_info.value * 2.204).toFixed(3)} pounds  
|               ${input_info.value} pounds =  ${(input_info.value / 2.204).toFixed(3)} kilos   
            </p>
            </li>
        </div>
    `
})