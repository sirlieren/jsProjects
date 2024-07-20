const apiKey = "b95dbbc923b918fefa93648b8a54a04c";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchButton = document.getElementById("searchBtn");
const searchValue = document.getElementById("searchBar");


const cityName = document.querySelector(".city");
const tempatureVal = document.querySelector(".temp");
const humidityVal = document.querySelector(".humidity");
const windSpeedVal = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon")

const card = document.querySelector(".card");
let mainHeight = getComputedStyle(card).height;
const col = document.querySelectorAll(".col");
const errorBox = document.querySelector("#error");
const weatherBox = document.querySelector(".weather");

errorBox.style.display = "none";
checkWeather("Ankara");
function checkWeather(city) {
    cardAnim(city);
    cityName.textContent = "";
    tempatureVal.textContent = "";
    humidityVal.textContent = "";
    windSpeedVal.textContent = "";
    weatherIcon.src = "";

    col.forEach((cols) => {
        cols.style.visibility = "hidden";
    })

}

searchButton.addEventListener("click", checkIt);

function checkIt() {
    checkWeather(searchValue.value);

}

async function setData(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404) {
        errorBox.style.display = "block";
        weatherBox.style.display = "none";
        card.style.height = "200px";
    }
    else {
        errorBox.style.display = "none";
        weatherBox.style.display = "block";
    }

    col.forEach((cols) => {
        cols.style.visibility = "visible";
    })

    console.log(data);
    cityName.textContent = data.name;
    tempatureVal.textContent = Math.round(Number(data.main.temp)) + "°C";
    humidityVal.textContent = data.main.humidity + "%";
    windSpeedVal.textContent = data.wind.speed + " KM/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/cloudy.svg";
    }
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/clear.svg";
    }
    if (data.weather[0].main == "Rain" || data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./assets/light-rain.svg";
    }
    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./assets/night-fog.svg";
    }

}

function cardAnim(city) {

    card.style.height = "150px";

    const timeOut = setTimeout(() => {
        card.style.height = mainHeight;
        setData(city);
    }, 1000);

}
