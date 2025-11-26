const API = "https://weather-proxy.freecodecamp.rocks/api/city/"
const cityWeather = document.getElementById("city-weather");
const mainTemperature = document.getElementById("main-temperature");
const weatherInfo = document.getElementById("weather-info");
const weatherIcon = document.getElementById("weather-icon");
const weatherDescription = document.getElementById("weather-description");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const cityLocation = document.getElementById("location");

const getWeatherBtn = document.getElementById("get-weather-btn");
const cityOpt = document.getElementById("city-opt");

getWeatherBtn.addEventListener("click", () => {
  if (cityOpt.value) {
    showWeather(cityOpt.value);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(`${API}${city}`);
    if (!response.ok) 
      throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function showWeather(city) {
  try {
    const data = await getWeather(city);
    if (!data)
      throw new Error(`DATA ${data}`);
    displayCityWeather(data);
  }
  catch(error) {
    alert("Something went wrong, please try again later");
  }
};

const formatValue = (value, unit) => value ? `${value}${unit}` : `N/A`;

const capitalize = (str) => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

function displayCityWeather(data) {
  cityLocation.textContent = data.name;
  mainTemperature.textContent = formatValue(data.main.temp, " °C");
  weatherIcon.src = data.weather[0].icon;
  weatherDescription.textContent = capitalize(data.weather[0].description);
  feelsLike.textContent = formatValue(data.main.feels_like, " °C");
  humidity.textContent = formatValue(data.main.humidity, " %");
  wind.textContent = formatValue(data.wind.speed, " m/s");
  windGust.textContent = formatValue(data.wind.gust, " m/s");
  weatherMain.textContent = data.weather[0].main || "N/A";
}