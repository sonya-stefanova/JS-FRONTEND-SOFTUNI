function attachEvents() {
    //definition of all needed elements
    const API_URL = "http://localhost:3030/jsonstore/forecaster/";
    const button = document.querySelector("#submit");
    const locationInput = document.querySelector("#location");
    const forecastDiv = document.querySelector("#forecast");
    const currWeatherDiv = document.querySelector("#current");
    const upcomingWeatherDiv = document.querySelector("#upcoming");
    let locationNameInfo = "";

    //attach the eventListener:
    button.addEventListener("click", async () => {
        const locationName = locationInput.value;
        forecastDiv.style.display = "block";

        try {
            const locationCode = await getLocationCode(locationName);
            const currentForecast = await getcurrentForecast(locationCode);
            const upcomingForecast = await getUpcomingForecast(locationCode);
            visualiseCurrentWeather(currentForecast);
            visualiseUpcomingWeather(upcomingForecast);

        } catch {
            currWeatherDiv.textContent = "Error";            
        }
    })

    async function getLocationCode(locationName) {
        const response = await fetch(API_URL + "locations");
        const locationsArray = await response.json();
        const location = locationsArray.find(x => x.name.toLowerCase() === locationName.toLowerCase());
        return location.code;
    }

    async function getcurrentForecast(locationCode) {
        const response = await(await fetch(API_URL + "today/" + locationCode)).json();
        locationNameInfo = response.name;
        return response.forecast;
    }

    async function getUpcomingForecast(locationCode) {
        const response = await(await fetch(API_URL + "upcoming/" + locationCode)).json();
        return response.forecast;
    }

    function appendNestedSpan(parentElement, spanText) {
        const span = document.createElement("span");
        span.innerHTML = spanText;
        span.classList.add("forecast-data");
        parentElement.appendChild(span);
        return parentElement;
    }

    function createSymbol(parentElement, condition) {
        const WEATHER_SYMBOLS_DICT = {
            "Sunny": "&#☀x2600",
            "Partly sunny": "&#x26C5",
            "Overcast": "&#x2601",
            "Rain": "&#x2614",
        }
        const span = document.createElement("span");
        span.classList.add("symbol");
        span.innerHTML = WEATHER_SYMBOLS_DICT[condition];
        parentElement.appendChild(span);
        return parentElement;
    }

    function visualiseCurrentWeather(currentForecast) {
        const condition = currentForecast.condition;
        const low = currentForecast.low;
        const high = currentForecast.high;

        let forecastsDiv = document.createElement("div");
        forecastsDiv.classList.add("forecasts");
        forecastsDiv = createSymbol(forecastsDiv, condition);

        let conditionSpan = document.createElement("span");
        conditionSpan.classList.add("condition");
        conditionSpan = appendNestedSpan(conditionSpan, locationNameInfo);
        conditionSpan = appendNestedSpan(conditionSpan, low + "&#176/" + high + "&#176");
        conditionSpan = appendNestedSpan(conditionSpan, condition);

        forecastsDiv.appendChild(conditionSpan);
        currWeatherDiv.appendChild(forecastsDiv);
    }

    function visualiseUpcomingWeather(upcomingForecast) {
        const forecastInfoDiv = document.createElement("div");
        forecastInfoDiv.classList.add("forecast-info");
        for (let i = 0; i < upcomingForecast.length; i++) {
            const upcomingDayForecastSpan = createUpcomingSpan(upcomingForecast[i]);
            forecastInfoDiv.appendChild(upcomingDayForecastSpan);
        }
        upcomingWeatherDiv.appendChild(forecastInfoDiv);
    }

    function createUpcomingSpan(forecast) {
        const condition = forecast.condition;
        const low = forecast.low;
        const high = forecast.high;

        let spanUpcomingWeather = document.createElement("span");
        spanUpcomingWeather.classList.add("upcoming");
        spanUpcomingWeather = createSymbol(spanUpcomingWeather, condition);
        spanUpcomingWeather = appendNestedSpan(spanUpcomingWeather, low + "&#176/" + high + "&#176");
        spanUpcomingWeather = appendNestedSpan(spanUpcomingWeather, condition);
        return spanUpcomingWeather;
    }
}

attachEvents();