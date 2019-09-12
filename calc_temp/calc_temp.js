'use strict'

let isEnd = false;

while(isEnd == false)
{
    let Tc = prompt("Enter a temperature in Celsius: ");
    let result = convertToFahrenheit(Tc);
    alert(`Converted Fahrenheit temperature is equal to ${result}`);
    isEnd = confirm("Finish the calculations?");
}

//конвертирование температуры в Цельсиях в Фаренгейты:
function convertToFahrenheit(TCelcius) {
    let TFahrenheit = (9 / 5) * TCelcius + 32;
    console.log(TFahrenheit);
    return TFahrenheit;
}