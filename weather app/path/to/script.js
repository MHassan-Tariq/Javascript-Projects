const apiKey = "93fe4b485a757e96e293d336ddd2579d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const weatherContainer = document.querySelector(".weather");
const errorContainer = document.querySelector(".error");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        displayError();
    }
}

function updateWeather(data) {
    weatherContainer.style.display = "block";
    errorContainer.style.display = "none";

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
        case "Clouds":
            weathericon.src = "images/clouds.png";
            break;
        case "Clear":
            weathericon.src = "images/clear.png";
            break;
        case "Rain":
            weathericon.src = "images/rain.png";
            break;
        case "Drizzle":
            weathericon.src = "images/drizzle.png";
            break;
        case "Mist":
            weathericon.src = "images/mist.png";
            break;
        case "Haze":
            weathericon.src = "images/mist.png";
            break;
        default:
            weathericon.src = ""; 
            break;
    }
}

function displayError() {
    errorContainer.style.display = "block";
    weatherContainer.style.display = "none";
}





window.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
        const city = searchbox.value.trim();
        if (city) {
            checkWeather(city);
        }
    }
});


searchbtn.addEventListener("click", () => {
    const city = searchbox.value.trim();
    if (city) {
        checkWeather(city);
    }
});
