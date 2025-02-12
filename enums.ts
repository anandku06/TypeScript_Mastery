// created a enum for weather and values can be assigned as well to each element
enum WeatherConditions{
    Sunny = "sunny", // 0
    Cloudy = "cloudy", // 1
    Rainy = "rainy", // 2
    Snowy = "snowy" // 3
}

// returns the numeric values assigned to them(default)
// if values are assigned to them then they return the values
console.log(WeatherConditions.Sunny);
console.log(WeatherConditions.Cloudy);
console.log(WeatherConditions.Rainy);
console.log(WeatherConditions.Snowy);

const currentWeather = WeatherConditions.Sunny
console.log(`The current weather is ${currentWeather}`);

