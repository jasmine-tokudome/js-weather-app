const weatherForm = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResults = document.getElementById("weather-results")
fetch("https://api.weatherapi.com/v1/current.json?key=c9b135c00c9c4c8cbee143639241301&q=kyoto&aqi=no")
  .then(response =>response.json())
  .then(jsonData =>console.log(jsonData))
