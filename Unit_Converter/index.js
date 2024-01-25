let bodycontainer = document.getElementById("container")
let grab_button = document.getElementById("button-el")
let input_info = document.getElementById("input-el")


grab_button.addEventListener('click', function(){
    bodycontainer.innerHTML = `
        <ul>
            <li> Length (Meters/Feet)</li>
            <p>
                ${input_info.value} meters = ${(input_info.value * 3.281).toFixed(3)} feet  
                | ${input_info.value} feet =  ${(input_info.value / 3.281).toFixed(3)} meters
            </p>
            <li>Volume (Liters/Gallons)</li>
                
            <li>Mass (Kilograms/Pounds)</li>
        </div>
    
    `
})