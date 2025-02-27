"use strict";
// created a enum for weather and values can be assigned as well to each element
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
    WeatherConditions["Snowy"] = "snowy"; // 3
})(WeatherConditions || (WeatherConditions = {}));
// returns the numeric values assigned to them(default)
// if values are assigned to them then they return the values
console.log(WeatherConditions.Sunny);
console.log(WeatherConditions.Cloudy);
console.log(WeatherConditions.Rainy);
console.log(WeatherConditions.Snowy);
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
