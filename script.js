document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "9c867a6081632b9e75d0200e0b7234ff";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=hamburg";

    async function checkWeather(){
        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
        console.log(data.name);
        document.querySelector(".city").innerHTML = data.name;
    }

    checkWeather();
});