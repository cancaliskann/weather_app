document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "9c867a6081632b9e75d0200e0b7234ff";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    const weatherContainer = document.querySelector(".weather"); 
    const errorContainer = document.querySelector(".error"); 


    function changeBackground(color) {
        document.body.style.background = color;
     }

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404 || response.status === 400){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            changeBackground('#2f6692');

        }else {
             const data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
            if(data.weather[0].main =="Clouds"){
                weatherIcon.src = "images/cloudy.png";
                changeBackground('#CAC5C2');
            }
            else if(data.weather[0].main =="Clear"){
                weatherIcon.src = "images/sunny.png";
               changeBackground('#D0753C');
            }
            else if(data.weather[0].main =="Rain"){
                weatherIcon.src = "images/rain.png";
                changeBackground('#0172B3');
            }
            else if(data.weather[0].main =="Drizzle"){
                weatherIcon.src = "images/drizzle.png";
                changeBackground('#DB9E29');
            }
            else if(data.weather[0].main =="Mist"){
                weatherIcon.src = "images/mist.png"; 
                changeBackground('#9BB1BD');
            }    
            
            document.querySelector(".weather").style.display = "block"; 
            document.querySelector(".error").style.display = "none";
            
                }

    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });

    searchBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkWeather(searchBox.value);
        }
    });

});