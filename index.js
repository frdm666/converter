/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inpAmount = document.querySelector('.input-amount');
let convButton = document.querySelector('.convert-btn');
let contOne = document.querySelector('.content-1');
let contTwo = document.querySelector('.content-2');
let contThree = document.querySelector('.content-3');

console.log()

convButton.addEventListener('click', () => {
    let val = parseFloat(inpAmount.value);
    count(val);
})

function count(value) {
    contOne.innerHTML = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`;
    contTwo.innerHTML = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`;
    contThree.innerHTML = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`;
}

// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters

// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos