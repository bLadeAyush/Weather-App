const apiKey = "60f627d1aac75ed632a396d81416d752";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}` + "&units=metric");
        let data = await response.json();

        console.log(data);

        // Update DOM elements
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    } catch (error) {
    console.log("Error fetching weather data:", error);
}
}
searchBtn.addEventListener("click" , () =>{
checkWeather(searchBox.value);
})