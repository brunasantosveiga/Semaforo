const img = document.querySelector('#img');
const buttons = document.querySelector('#buttons');
let colorIndex = 0;
let intervalId = null;
const trafficLight = ( event ) => {
    stopAutomatic(); 
    turnOn[event.target.id](); 
}
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;
const changeColor = () => {
    const colors = ['green', 'yellow', 'red'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const stopAutomatic = () => {
    clearInterval (intervalId); 
}
const turnOn = {
    green: () => img.src = 'images/verde.png',
    yellow: () => img.src = 'images/amarelo.png',
    red: () => img.src = 'images/vermelho.png',
    automatic: () => intervalId = setInterval(changeColor, 1000) 
} 

buttons.addEventListener('click', trafficLight); 