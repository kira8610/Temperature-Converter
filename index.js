const inputTemp = document.getElementById("inputTemp");

const cToF = document.getElementById("cToF");
const fToC = document.getElementById("fToC");

const convertedTemp = document.getElementById("convertedTemp");

let currentTemp = Number(inputTemp.value);

function convert(){
    if(cToF.checked){
        currentTemp = (currentTemp * 9/5) + 32;
        convertedTemp.textContent = currentTemp.toFixed(1) + "°F";
    }
    else if(fToC.checked){
        currentTemp = (currentTemp - 32) * 5/9;
        convertedTemp.textContent = currentTemp.toFixed(1) + "°C";
    }
    else{
        convertedTemp.textContent = 'Select a unit';
    }
    inputTemp.value = 0;
}
