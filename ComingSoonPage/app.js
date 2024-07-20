const seconds = document.querySelector(".Seconds .number");
const minutes = document.querySelector(".Minutes .number");
const hours = document.querySelector(".Hours .number");
const days = document.querySelector(".Days .number");

let secVal = 10;
let minVal = 6;
let hourVal = 3;
let dayVal = 8;

const timeFunction = setInterval(() => {
    secVal--;

    if (secVal == 0) {
        minVal--;
        secVal = 60;
    }
    if (minVal == 0) {
        hourVal--;
        minVal = 60;
    }
    if (hourVal == 0) {
        dayVal--;
        hourVal = 24;
    }
    seconds.textContent = secVal < 10 ? `0${secVal}` : secVal;
    minutes.textContent = minVal < 10 ? `0${minVal}` : minVal;
    hours.textContent = hourVal < 10 ? `0${hourVal}` : hourVal;
    days.textContent = dayVal < 10 ? `0${dayVal}` : dayVal;
}, 1000)
