//your JS code here. If required.
const button = document.getElementById("getWeather");
const weatherData = document.getElementById("weatherData");

button.addEventListener("click", async function () {
    weatherData.textContent = "Loading weather...";

    try {
        const response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY",
            {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();

        weatherData.textContent =
            `Current weather in London: ${data.weather[0].main}`;

    } catch (error) {
        weatherData.textContent = "Unable to fetch weather data.";
        console.error(error);
    }
}); 